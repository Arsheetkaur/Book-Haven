document.addEventListener("DOMContentLoaded", function () {
    // Add-to-cart functionality
    const cartCount = document.getElementById("cart-count");
    let cartItems = 0;

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            cartItems++;
            cartCount.textContent = cartItems;
            alert("Item added to cart! Don't forget to select your free book.");
        });
    });
});