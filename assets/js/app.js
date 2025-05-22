const form = document.getElementById('loginForm');
const username = document.getElementById('username-input');
const password = document.getElementById('password-input');
const errorDiv = document.getElementById('error');

form.addEventListener('submit', function (e) {
    let message = [];

    const email = username.value.trim();
    const pwd = password.value;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!regexEmail.test(email)) {
        message.push('Please enter a valid email address.');
    }

    if (!regexPassword.test(pwd)) {
        message.push('Password must be at least 8 characters long, only contains letters and digits');
    }

    if (message.length > 0) {
        e.preventDefault();
        errorDiv.innerHTML = message.map(msg => `<p>${msg}</p>`).join('');
        errorDiv.style.display = 'block';
        form.reset();

    } else {
        errorDiv.innerHTML = '';
        errorDiv.style.display = 'none';
        alert("LOGIN SUCCESSFUL");
    }
});