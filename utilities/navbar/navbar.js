const navBars = document.querySelector('.fa-bars');
const slidingNav = document.querySelector('.sliding-nav');
const crossBtn = document.querySelector('.fa-x');

navBars.addEventListener('click', () => {
    slidingNav.style.display = 'block';
    setTimeout(() => {
        slidingNav.style.left = '50vw';
    }, 10);
});

crossBtn.addEventListener('click', () => {
    slidingNav.style.left = '100vw';
    setTimeout(() => {
        slidingNav.style.display = 'none'; 
    }, 500);
});

