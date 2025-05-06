document.addEventListener("DOMContentLoaded", function() {
    const readMoreButton = document.querySelector('.read-more');
    if (readMoreButton) {
        readMoreButton.addEventListener('click', function() {
            document.querySelector('.extra-content').style.display = 'block';
            readMoreButton.style.display = 'none';
        });
    }
});