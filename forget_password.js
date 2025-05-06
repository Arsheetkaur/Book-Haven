document.getElementById('resetPasswordForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();

    if (validateEmail(email)) {
        alert(`A reset link has been sent to: ${email}`);
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}