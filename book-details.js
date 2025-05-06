// Function to add the book to the cart
function addToCart() {
    const bookTitle = document.querySelector(".book-info h2").textContent;
    const bookPrice = parseFloat(document.getElementById("bookPrice").textContent);
    const quantity = parseInt(document.getElementById("quantity").value);

    if (quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    // Simulating adding to cart
    const cartItem = {
        title: bookTitle,
        price: bookPrice,
        quantity: quantity,
        total: (bookPrice * quantity).toFixed(2),
    };

    // Saving cart item to localStorage (or send to server in real application)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(Added `"${bookTitle}" tothecart!)`);
}