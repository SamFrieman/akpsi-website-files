// darkmode.js - Selective Dark Mode (Only White Backgrounds)

// Apply saved theme immediately (before page renders to prevent flash)
(function() {
    const savedMode = localStorage.getItem('siteTheme');
    if (savedMode === 'dark') {
        document.documentElement.classList.add('dark-mode');
        if (document.body) {
            document.body.classList.add('dark-mode');
        }
    }
})();

// Initialize dark mode toggle when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const modeIcon = document.getElementById('modeIcon');
    
    if (!darkModeToggle || !modeIcon) {
        console.warn('Dark mode toggle elements not found');
        return;
    }

    // Set initial icon based on current mode
    updateIcon();

    // Toggle dark mode with smooth transition
    darkModeToggle.addEventListener('click', () => {
        // Toggle the mode
        document.body.classList.toggle('dark-mode');
        
        // Save preference and update icon
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('siteTheme', 'dark');
        } else {
            localStorage.setItem('siteTheme', 'light');
        }
        
        updateIcon();
    });

    // Update icon based on current mode
    function updateIcon() {
        if (document.body.classList.contains('dark-mode')) {
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun');
        } else {
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon');
        }
    }
});