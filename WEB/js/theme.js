document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.getElementById('theme-btn');
    const toggleIcon = document.getElementById('toggle-icon');
    const body = document.body;
    
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        enableDarkTheme();
    }
    themeBtn.addEventListener('click', toggleTheme);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            e.matches ? enableDarkTheme() : disableDarkTheme();
        }
    });
    
    function toggleTheme() {
        if (body.classList.contains('dark-theme')) {
            disableDarkTheme();
            localStorage.setItem('theme', 'light');
        } else {
            enableDarkTheme();
            localStorage.setItem('theme', 'dark');
        }
    }
    
    function enableDarkTheme() {
        body.classList.add('dark-theme');
        toggleIcon.textContent = '🌙';
        themeBtn.setAttribute('aria-label', 'Переключить на светлую тему');
    }
    
    function disableDarkTheme() {
        body.classList.remove('dark-theme');
        toggleIcon.textContent = '☀️';
        themeBtn.setAttribute('aria-label', 'Переключить на темную тему');
    }
});