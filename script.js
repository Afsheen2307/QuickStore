const welcome = document.getElementById("welcome-screen");
const mainApp = document.getElementById("main-app");
const userDisplay = document.getElementById("user-name-display");

const startBtn = document.getElementById("start-btn");
const usernameInput = document.getElementById("username-input");
const logoutBtn = document.getElementById("logout-btn");

let currentUser = localStorage.getItem("quickstore_user");

// Show saved user instantly
if (currentUser) showApp();

startBtn.addEventListener("click", () => {
  const name = usernameInput.value.trim();
  if (!name) return alert("Please enter your name!");
  currentUser = name;
  localStorage.setItem("quickstore_user", name);
  showApp();
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("quickstore_user");
  location.reload();
});

function showApp() {
  welcome.classList.add("hidden");
  mainApp.classList.remove("hidden");
  userDisplay.textContent = `Hi, ${currentUser}!`;
  renderLinks();
}

// --------------------------- LINKS ---------------------------

const linkForm = document.getElementById("link-form");
const linkList = document.getElementById("link-list");
const emptyMsg = document.getElementById("empty-msg");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");

linkForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const url = document.getElementById("url").value.trim();
  const category = document.getElementById("category").value;
  const notes = document.getElementById("notes").value.trim();

  if (!title || !url) return alert("Please fill title and URL!");

  const link = {
    id: Date.now(),
    title,
    url,
    category,
    notes,
  };

  const all = getLinks();
  all.unshift(link);
  saveLinks(all);
  linkForm.reset();
  renderLinks();
});

function getLinks() {
  return JSON.parse(localStorage.getItem(`quickstore_links_${currentUser}`) || "[]");
}
function saveLinks(arr) {
  localStorage.setItem(`quickstore_links_${currentUser}`, JSON.stringify(arr));
}
function deleteLink(id) {
  const all = getLinks().filter((x) => x.id !== id);
  saveLinks(all);
  renderLinks();
}

function renderLinks() {
  const all = getLinks();
  const q = searchInput.value.toLowerCase();
  const filter = filterSelect.value;

  let list = all.filter((l) => {
    const matchCat = filter === "All" || l.category === filter;
    const matchQ = l.title.toLowerCase().includes(q) || l.url.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  linkList.innerHTML = "";
  if (list.length === 0) {
    emptyMsg.style.display = "block";
    return;
  }
  emptyMsg.style.display = "none";

  list.forEach((link) => {
    const li = document.createElement("li");
    li.className = "link-item";
    li.innerHTML = `
      <h4><a href="${link.url}" target="_blank">${link.title}</a></h4>
      <p>${link.category} | ${link.notes || ""}</p>
      <div class="actions">
        <button onclick="copyLink('${link.url}')">Copy</button>
        <button onclick="deleteLink(${link.id})">Delete</button>
      </div>
    `;
    linkList.appendChild(li);
  });
}

function copyLink(url) {
  navigator.clipboard.writeText(url);
  alert("Link copied!");
}

searchInput.addEventListener("input", renderLinks);
filterSelect.addEventListener("change", renderLinks);
