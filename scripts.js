// Email validation regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Validate sign-up form
document.querySelector('.signup-form').addEventListener('submit', (e) => {
    const email = document.querySelector('input[type="email"]').value;
    if (!emailRegex.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

// Validate login form
document.querySelector('.login-form').addEventListener('submit', (e) => {
    const email = document.querySelector('input[type="email"]').value;
    if (!emailRegex.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});