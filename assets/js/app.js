const form = document.getElementById('loginForm');
const username = document.getElementById('username-input');
const password = document.getElementById('password-input');
const errorDiv = document.getElementById('error');

form.addEventListener('submit', function (e) {
    let message = [];
    if (username.value.trim() === '' || username.value == null) {
        message.push('Username is required');
    }

    if (password.value.length < 6) {
        message.push('Password must be at least 6 characters long');
    }

    if (message.length > 0) {
        e.preventDefault();
        if (message.length > 0) {
            e.preventDefault();
            errorDiv.innerHTML = message;
            errorDiv.style.display = 'block';
        } else {
            errorDiv.innerHTML = '';
            errorDiv.style.display = 'none';
        }

    }
})