const form = document.getElementById('signupForm');
const errorDiv = document.getElementById('error');

form.addEventListener('submit', function (e) {
    let message = [];

    const username = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;

    //regex form validation
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!username) {
        message.push('Name is required');
    }
    if (!regexEmail.test(email)) {
        message.push('Email must be valid');
    }
    if (!regexPassword.test(password)) {
        message.push('Password must be at least 8 characters long, only contains letters and digits');
    }

    if (message.length > 0) {
        e.preventDefault();
        errorDiv.innerHTML = message.join('<br>');
        errorDiv.style.display = 'block';
        form.reset();
    } else {
        errorDiv.innerHTML = '';
        errorDiv.style.display = 'none';
        alert('signed up successfully')
    }
});