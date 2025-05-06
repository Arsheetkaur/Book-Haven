let cart = [];

// Function to update the cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';  // Clear current items

    let totalPrice = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
                <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-id="${item.id}">
                <button class="remove-item" data-id="${item.id}">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
        totalPrice += item.price * item.quantity;
    });

    cartCount.innerText = cart.length;
    cartTotal.innerText = totalPrice.toFixed(2);
}

// Function to add items to the cart
function addToCart(id, name, price, image) {
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    updateCartUI();
}

// Function to show the cart modal
function showCartModal() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'block';
}

// Function to hide the cart modal
function closeCartModal() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}

// Function to remove items from the cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

// Event listeners for add to cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const name = e.target.getAttribute('data-name');
        const price = parseFloat(e.target.getAttribute('data-price'));
        const image = e.target.getAttribute('data-image');
        addToCart(id, name, price, image);
    });
});

// Event listener for showing the cart modal when clicking the cart icon
document.getElementById('shopping-cart-icon').addEventListener('click', showCartModal);

// Event listener for closing the cart modal
document.getElementById('close-cart').addEventListener('click', closeCartModal);

// Event delegation for remove item buttons in the cart modal
document.getElementById('cart-items').addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
        const id = e.target.getAttribute('data-id');
        removeFromCart(id);
    }
});

// Event listener for quantity change in the cart
document.getElementById('cart-items').addEventListener('input', (e) => {
    if (e.target.classList.contains('quantity-input')) {
        const id = e.target.getAttribute('data-id');
        const newQuantity = parseInt(e.target.value);
        const item = cart.find(item => item.id === id);
        if (item && newQuantity > 0) {
            item.quantity = newQuantity;
            updateCartUI();
        }
    }
});

// Event listener for Proceed to Checkout
document.getElementById('checkout-button').addEventListener('click', () => {
    window.location.href = "checkout.html";  // Navigate to checkout page (or show checkout modal)
});