// toggle class active
const navbarNav = document.querySelector('.navbar-nav')
const btnMenu = document.getElementById('humberger-menu');

btnMenu.addEventListener('click', (e) => {
    e.preventDefault();
    navbarNav.classList.toggle('active')
});


// click untuk menghilangkan nav di luar
document.addEventListener('click', (e) => {
    if(!btnMenu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})

gsap.from('.navbar', {y: -100, duration: .7, ease: "bounce"})
gsap.from('.hero .konten', {opacity: 0, duration: 1, x: 200})