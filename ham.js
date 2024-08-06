// hamburger menu
document.getElementById('ham-button').addEventListener('click', function() {
    console.log('Hamburger menu clicked');
    document.getElementById('nav-links').classList.toggle('active');
    document.querySelector('.content').classList.toggle('shifted');
});
