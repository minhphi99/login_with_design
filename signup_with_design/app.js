const form = document.getElementById('signupForm');
const nameinput = document.getElementById('name-input');
const email = document.getElementById('email-input');
const password = document.getElementById('password-input');
const errorDiv = document.getElementById('error');

form.addEventListener('submit', function (e) {
    let message = [];
    if (!nameinput.value.trim()) {
        message.push('Name is required');
    }
    if (!email.value.trim()) {
        message.push('Email is required');
    }
    if (password.value.length < 6) {
        message.push('Password must be at least 6 characters long');
    }

    if (message.length > 0) {
        e.preventDefault();
        errorDiv.innerHTML = message.join('<br>');
        errorDiv.style.display = 'block';
    } else {
        errorDiv.innerHTML = '';
        errorDiv.style.display = 'none';
    }
});