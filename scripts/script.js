'use strict'
document.addEventListener("DOMContentLoaded", function() {
    console.log('Скрипт отработал корректно')
});

const modal = document.getElementById('authModal');
const signupBtn = document.getElementById('openSignup');
const loginBtn = document.getElementById('openLogin');
const tabBtns = document.querySelectorAll('.tab-btn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');
let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav');

// Открыть окно при клике на Sign Up
if (signupBtn) {
    signupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        setActiveTab('signup');
    });
}

// Закрыть окно при клике на фон
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});


tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabType = btn.getAttribute('data-tab');
        setActiveTab(tabType);
    });
});

// Переключение по ссылкам внутри форм
if (switchToSignup) {
    switchToSignup.addEventListener('click', () => setActiveTab('signup'));
}
if (switchToLogin) {
    switchToLogin.addEventListener('click', () => setActiveTab('login'));
}

hamburger.addEventListener('click', function(e) {
  e.stopPropagation();
  nav.classList.toggle('active');
});

document.addEventListener('click', function(e) {
  if (!nav.contains(e.target)) {
    nav.classList.remove('active');
  }
});
