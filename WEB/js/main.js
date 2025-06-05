document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.getElementById('theme-btn');
    const toggleIcon = document.getElementById('toggle-icon');
    const body = document.body;
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkTheme();
    }
    themeBtn.addEventListener('click', function() {
        if (body.classList.contains('dark-theme')) {
            disableDarkTheme();
            localStorage.setItem('theme', 'light');
            themeBtn.style.backgroundColor = '#e0e0e0';
        } else {
            themeBtn.style.backgroundColor = '#474747';
            themeBtn.style.borderColor = '#e0e0e0';
            enableDarkTheme();
            localStorage.setItem('theme', 'dark');
        }
    });

    function enableDarkTheme() {
        body.classList.add('dark-theme');
        header.classList.add('dark-theme');
        main.classList.add('dark-theme');
        footer.classList.add('dark-theme');
        toggleIcon.textContent = '🌙';
    }

    function disableDarkTheme() {
        body.classList.remove('dark-theme');
        header.classList.remove('dark-theme');
        main.classList.remove('dark-theme');
        footer.classList.remove('dark-theme');
        toggleIcon.textContent = '☀️';
    }
});
