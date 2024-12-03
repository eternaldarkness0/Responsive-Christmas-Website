const userLogin = document.getElementById('user-login');
const closeIcon = document.getElementById('close');
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

userLogin.addEventListener('click', () => {
    wrapper.classList.toggle('closed-popup');
});

closeIcon.addEventListener('click', () => {
    wrapper.classList.add('closed-popup');
});

