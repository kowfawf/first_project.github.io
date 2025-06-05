document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
        
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
    const themeBtnMobile = document.getElementById('theme-mobile');
    const themeBtn = document.getElementById('theme');
    if (themeBtnMobile && themeBtn) {
        themeBtnMobile.addEventListener('click', function() {
            themeBtn.click();
        });
    }
});