// Handle login functionality
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Please fill out all fields.');
        return;
    }

    // Example validation (replace this with actual backend validation)
    if (email === 'test@bookstore.com' && password === 'password123') {
        alert('Login successful! Redirecting...');
        window.location.href = 'homepage.html';
    } else {
        alert('Invalid email or password.');
    }
});