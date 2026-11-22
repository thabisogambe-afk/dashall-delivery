// ==========================================
// 1. LOCATE: Grab the components from the HTML
// ==========================================
const findBtn = document.getElementById('findBtn');
const addressInput = document.getElementById('addressInput');

const foodCard = document.getElementById('foodCard');
const groceryCard = document.getElementById('groceryCard');
const parcelCard = document.getElementById('parcelCard');


// ==========================================
// 2. ACTION 1: The Address Checker (Search Box)
// ==========================================
// Grab the new landing spot element from the HTML
const statusMessage = document.getElementById('statusMessage');

findBtn.addEventListener('click', function() {
    const userAddress = addressInput.value.trim();

    if (userAddress === "") {
        // Display an error message directly on the screen
        statusMessage.innerText = "⚠️ Please enter a delivery address first!";
        statusMessage.style.color = "#ff4757"; // Make it red
    } else {
        // Display a beautiful interactive success message on the screen!
        statusMessage.innerHTML = `🛵 Finding the best drivers near <strong>"${userAddress}"</strong>...`;
        statusMessage.style.color = "#2ed573"; // Make it green
        
        // Reset the button state back to clean
        findBtn.innerText = "Searching...";
    }
});

;


// ==========================================
// 3. ACTION 2: On-Page Details Toggle (Cards)
// ==========================================

// Grab the new panel elements from HTML
const detailsPanel = document.getElementById('detailsPanel');
const panelTitle = document.getElementById('panelTitle');
const panelDescription = document.getElementById('panelDescription');
const closePanelBtn = document.getElementById('closePanelBtn');

// Helper function to update text and remove the "hidden" cloak
function showDetails(title, description) {
    panelTitle.innerText = title;
    panelDescription.innerText = description;
    detailsPanel.classList.remove('hidden'); // Makes the box appear!
}

// 1. Hot Food Card Click
foodCard.addEventListener('click', function() {
    showDetails(
        "🍔 Hot Food Delivery",
        "Order fresh meals from over 50+ local restaurants. Average delivery time is under 30 minutes."
    );
});

// 2. Groceries Card Click
groceryCard.addEventListener('click', function() {
    showDetails(
        "🛒 Express Groceries",
        "Fresh produce, bakery items, and household essentials picked and delivered straight to your kitchen."
    );
});

// 3. Custom Parcels Card Click
parcelCard.addEventListener('click', function() {
    showDetails(
        "📦 Same-Day Custom Parcels",
        "Forgot your keys or need a package sent across town? Our couriers pick up and drop off anything safely."
    );
});

// 4. Close Button Click (Puts the "hidden" cloak back on)
closePanelBtn.addEventListener('click', function() {
    detailsPanel.classList.add('hidden'); // Hides the box again!
});
