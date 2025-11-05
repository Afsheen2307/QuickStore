File Structure 
quickstore/
├── index.html      # Main HTML structure
├── styles.css      # Custom CSS styles
├── script.js       # JavaScript logic
└── README.md       # Documentation
Installation & Usage 
Method 1: Direct Use (Easiest)

Download all three files (index.html, styles.css, script.js)
Place them in the same folder
Open index.html in your web browser
Start saving links!

Method 2: GitHub Pages Deployment

Create a new repository on GitHub
Upload all files to the repository
Go to Settings → Pages
Select "Deploy from a branch" and choose main branch
Your site will be live at https://yourusername.github.io/quickstore

Method 3: Local Server
bash# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
Then visit http://localhost:8000 in your browser.
How to Use 📖
Adding Links

Paste your video link in the "Link URL" field
(Optional) Add a custom title
(Optional) Select platform or let it auto-detect
Click "Add Link"

Managing Links

Search: Type in the search box to filter links
Filter: Use the dropdown to show only specific platforms
Copy: Click the copy icon to copy link to clipboard
Delete: Click the trash icon to remove a link

Browser Compatibility 🌐
Works on all modern browsers:

Chrome/Edge (recommended)
Firefox
Safari
Opera

Note: Requires JavaScript and localStorage to be enabled.
Data Storage 💾
All your links are stored locally in your browser using localStorage:

Data persists across sessions
No server or cloud storage required
Data stays on your device only
Clear browser data will delete saved links

Contributing 🤝
Feel free to fork this project and submit pull requests for:

Bug fixes
New features
UI improvements
Documentation updates


Main Interface
![QuickStore Main Interface]
Adding Links
![Adding a new link]
Support 
If you encounter any issues or have suggestions:

Check existing issues on GitHub
Create a new issue with details
Contact the developer

Roadmap 
Future enhancements planned:

 Tags/categories for links
 Export/import functionality
 Dark mode
 Bulk operations
 Link preview thumbnails
 Statistics dashboard
