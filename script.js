document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.dark-mode-toggle');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.navbar').classList.toggle('dark-mode');
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.toggle('dark-mode');
        });
    });
});
