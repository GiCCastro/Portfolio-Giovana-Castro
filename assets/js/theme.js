document.getElementById('theme-toggle').addEventListener('click', function() {
    const themeBody = document.querySelector('.body');
    const themeMain = document.querySelector('.main');

    themeBody.classList.toggle('active');
    themeMain.classList.toggle('active');
    this.classList.toggle('active');
});
