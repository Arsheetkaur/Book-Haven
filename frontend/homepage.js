// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function() {

  // Get the 'Explore Now' button by its class name
  const exploreButton = document.querySelector(".explore-button");

  // Add an event listener to the button for the click event
  exploreButton.addEventListener("click", function() {
      
      // You can add an action here, for example:
      // Navigate to a new page (replace the URL with the actual page URL)
      window.location.href = "category list.html"; // Redirects to the shop page

      // Or, display a welcome alert
      // alert("Enjoy exploring our bookstore!");

      // Or animate a transition effect (for example, fading the text)
      const textContent = document.querySelector(".text-content");
      textContent.style.transition = "opacity 1s ease-out";
      textContent.style.opacity = 0;

      setTimeout(function() {
          // Reset the opacity after the transition ends
          textContent.style.opacity = 1;
      }, 1000);
  });
});
// Swiper Initialization 
var swiper = new Swiper('.swiper-container' , {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 60,
    stretch: -10,
    depth: 250,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1000,
});

// Select the form and the search input
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from reloading the page on submit

  const searchTerm = searchInput.value.trim(); // Get the search term

  if (searchTerm) {
      // Redirect directly to the search results page
      window.location.href = "search-results.html?q=" + encodeURIComponent(searchTerm);
  } else {
      alert("Please enter a search term.");
  }
});

// Shopping Cart Logic
let cart = [];
const cartContainer = document.querySelector('.cart-items');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTotal = document.getElementById('cart-total');

// Function to Add Item to Cart
function addToCart(bookTitle, price) {
    const item = cart.find((cartItem) => cartItem.title === bookTitle);
    if (item) {
        item.quantity++;
    } else {
      cart.push({ title: bookTitle, price: parseFloat(price), quantity: 1 });
    }
    updateCart();
}

// Function to Update Cart
function updateCart() {
    cartContainer.innerHTML = '';
    let subtotal = 0;

    cart.forEach((item) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
<p>${item.title} x ${item.quantity}</p>
            <p>$${itemTotal.toFixed(2)}</p>
        `;
        cartContainer.appendChild(cartItem);
    });

    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartTotal.textContent = `$${subtotal.toFixed(2)}`;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>No items in the cart yet. Start shopping now!</p>';
    }
}

// Add Event Listeners to 'Add to Cart' Buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const bookItem = event.target.closest('.book-item');
        const bookTitle = bookItem.querySelector('h3').textContent;
        const bookPrice = bookItem.querySelector('.price')?.textContent || '0.00';
        addToCart(bookTitle, bookPrice.replace('$', ''));
});
});
// Optional JS to handle any extra functionality for the View All button, 
// e.g., smooth scrolling or animation.
document.getElementById("view-all-btn").addEventListener("click", function() {
  // You could add more animation or behavior here
  console.log("Redirecting to View All Comments...");
});