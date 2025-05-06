document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const mainSection = document.querySelector("main");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const selectedMethod = document.querySelector('input[name="payment-method"]:checked');

        if (selectedMethod) {
            // Replace the main content with confirmation message
            mainSection.innerHTML = `
                <section class="confirmation">
                    <h2>Thank you for your payment!</h2>
                    <p>You chose <strong>${selectedMethod.value}</strong> as your payment method.</p>
                    <p>Your payment has been successfully processed.</p>
                    <p><a href="Main Project.html">Return to Home</a></p>
                </section>
            `;
        } else {
            alert("Please select a payment method.");
        }
    });
});