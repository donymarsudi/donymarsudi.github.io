const bars = document.querySelector('.bars');
const navbar = document.querySelector('.nav-list');
bars.addEventListener('click', () => {
    if (navbar.classList.contains('translateX-default')) {
        return navbar.classList.replace('translateX-default', 'translateX-0')
    }

    navbar.classList.add('translateX-0')
});

const btnNavClose = document.querySelector('.btn-close-nav');
btnNavClose.addEventListener('click', () => {
    navbar.classList.add('translateX-default')
});