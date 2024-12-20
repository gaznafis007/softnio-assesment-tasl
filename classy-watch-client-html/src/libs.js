// For wrist band button state
document.addEventListener("DOMContentLoaded", () => {
    const sizeCards = document.querySelectorAll(".size-card");

    sizeCards.forEach((card) => {
        card.addEventListener("click", () => {
            // Reset all cards to Regular size card style
            sizeCards.forEach((c) => {
                c.classList.remove("border-blue-600");
                c.classList.add("border-slate-400");

                const span = c.querySelector("span");
                span.classList.remove("text-blue-600");
                span.classList.add("text-black");
            });

            // Apply Active size card style to the clicked card
            card.classList.remove("border-slate-400");
            card.classList.add("border-blue-600");

            const activeSpan = card.querySelector("span");
            activeSpan.classList.remove("text-black");
            activeSpan.classList.add("text-blue-600");
        });
    });
    // Add to carts counter
    const counter = document.getElementById("counter");
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");

    // Initialize counter value
    let count = 0;

    // Increment button logic
    incrementButton.addEventListener("click", () => {
        count++;
        counter.textContent = count; // Update the counter value
    });

    // Decrement button logic
    decrementButton.addEventListener("click", () => {
        if (count > 0) {
            count--;
            counter.textContent = count; // Update the counter value
        }
    });
});




// For Modal
// Get elements
const checkoutButton = document.getElementById('checkoutButton');
const cartModal = document.getElementById('cartModal');
const closeModal = document.getElementById('closeModal');

// Show modal
checkoutButton.addEventListener('click', () => {
    cartModal.classList.remove('hidden');
});

// Hide modal
closeModal.addEventListener('click', () => {
    cartModal.classList.add('hidden');
});

// Close modal when clicking outside of it
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.classList.add('hidden');
    }
});