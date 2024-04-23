// Function to set dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('mode', 'dark');
}

// Function to set light mode
function enableLightMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('mode', 'light');
}

// Function to toggle between dark and light mode
function toggleMode() {
    if (document.body.classList.contains('dark-mode')) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
}

// Function to initialize mode based on user preference
function initializeMode() {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode();
    }
}

// Call initializeMode() when the page loads
window.onload = initializeMode;
