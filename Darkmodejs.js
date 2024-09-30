const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

// Function to update the button icon
const updateButton = () => {
    toggleButton.textContent = body.classList.contains('dark-mode') ? '🌜' : '🌞';
};

// Check if dark mode was enabled in a previous session
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    updateButton();
}

// Toggle dark mode when button is clicked
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    updateButton();

    // Save preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
