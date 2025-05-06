// Offers data
const offers = {
    1: {
      title: "Buy One Get One Free",
      description: "Enjoy this limited-time offer where you can get one free item for every item you purchase. Applicable on selected categories only."
    },
    2: {
      title: "20% Off All Books",
      description: "Get 20% off on all books, including bestsellers, new releases, and classics. Offer ends this weekend!"
    },
    3: {
      title: "Free Shipping Over $50",
      description: "Spend over $50 and enjoy free shipping on your order. This offer is valid for all locations."
    }
  };
  
  // Select modal and buttons
  const modal = document.getElementById("details-modal");
  const offerTitle = document.getElementById("offer-title");
  const offerDescription = document.getElementById("offer-description");
  const closeModal = document.getElementById("close-modal");
  const viewMoreButtons = document.querySelectorAll(".view-more");
  
  // Show modal with offer details
  viewMoreButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const offerId = e.target.dataset.offer;
      offerTitle.textContent = offers[offerId].title;
      offerDescription.textContent = offers[offerId].description;
      modal.style.display = "flex";
    });
  });
  
  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  // Close modal by clicking outside the modal
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });