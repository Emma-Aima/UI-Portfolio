 // Mobile menu toggle
 const mobileMenuButton = document.getElementById('mobile-menu-button');
 const mobileMenu = document.getElementById('mobile-menu');
 
 mobileMenuButton.addEventListener('click', () => {
     mobileMenu.classList.toggle('hidden');
 });
 
 // Mobile dropdown toggles
 const blogDropdownBtn = document.getElementById('blog-dropdown-btn');
 const blogDropdown = document.getElementById('blog-dropdown');
 const pagesDropdownBtn = document.getElementById('pages-dropdown-btn');
 const pagesDropdown = document.getElementById('pages-dropdown');
 
 blogDropdownBtn.addEventListener('click', () => {
     blogDropdown.classList.toggle('hidden');
 });
 
 pagesDropdownBtn.addEventListener('click', () => {
     pagesDropdown.classList.toggle('hidden');
 });
 
 // Theme toggle
 const themeToggle = document.getElementById('theme-toggle');
 
 themeToggle.addEventListener('click', () => {
     const html = document.documentElement;
     html.classList.toggle('dark');
     
     // Save preference to localStorage
     if (html.classList.contains('dark')) {
         localStorage.setItem('theme', 'dark');
     } else {
         localStorage.setItem('theme', 'light');
     }
 });
 
 // Check for saved theme preference
 if (localStorage.getItem('theme') === 'dark' || 
     (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
     document.documentElement.classList.add('dark');
 } else {
     document.documentElement.classList.remove('dark');
 }
 
 // Search modal toggle
 const searchBtn = document.getElementById('search-btn');
 const searchModal = document.getElementById('search-modal');
 const closeSearch = document.getElementById('close-search');
 
 searchBtn.addEventListener('click', () => {
     searchModal.classList.remove('hidden');
 });
 
 closeSearch.addEventListener('click', () => {
     searchModal.classList.add('hidden');
 });
 
 // Close modal when clicking outside
 searchModal.addEventListener('click', (e) => {
     if (e.target === searchModal) {
         searchModal.classList.add('hidden');
     }
 });