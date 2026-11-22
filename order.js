// ==========================================
// 1. LOCATE: Grab the form and receipt elements
// ==========================================
const orderForm = document.getElementById('orderForm');
const orderReceipt = document.getElementById('orderReceipt');
const receiptTitle = document.getElementById('receiptTitle');
const receiptBody = document.getElementById('receiptBody');


// ==========================================
// 2. EXECUTE: Handle the Form Submission
// ==========================================
orderForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Grab all values entered by the user
    const name = document.getElementById('customerName').value.trim();
    const category = document.getElementById('serviceCategory').value;
    const address = document.getElementById('deliveryAddress').value.trim();
    const notes = document.getElementById('orderNotes').value.trim() || "None provided";

    // Generate a random 3-digit receipt number (between 104 and 999)
    const randomReceipt = Math.floor(104 + Math.random() * 895).toString();

    // ------------------------------------------
    // NEW: Save this order into localStorage!
    // ------------------------------------------
    // 1. Pull any existing orders from browser memory (or start an empty list)
    const savedOrders = JSON.parse(localStorage.getItem('dashAllOrders')) || {};

    // 2. Add our new order under its exact receipt number
    savedOrders[randomReceipt] = {
        item: category,
        driver: "Assigned Driver (Pending Pickup)",
        status: `🛵 Preparing order for ${name} — Delivering to ${address}`
    };

    // 3. Pack the updated list back into text and save it to localStorage
    localStorage.setItem('dashAllOrders', JSON.stringify(savedOrders));


    // Display the receipt on screen
    receiptTitle.innerText = `✅ Order #${randomReceipt} Confirmed!`;
    receiptBody.innerHTML = `
        <strong>Customer:</strong> ${name} <br>
        <strong>Service:</strong> ${category} <br>
        <strong>Delivering To:</strong> ${address} <br>
        <strong>Notes:</strong> ${notes} <br><br>
        <em>Save receipt number <strong>#${randomReceipt}</strong> and try looking it up on the Track Order page!</em>
    `;

    orderReceipt.classList.remove('hidden');
    orderReceipt.style.display = "block"; // Forces the receipt card to become visible!
   
});
