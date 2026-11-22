// ==========================================
// 1. DEFAULT SAMPLE ORDERS
// ==========================================
const defaultOrders = {
    "101": {
        item: "🍔 Hot Food Combo",
        driver: "Tangi",
        status: "🛵 On the way! Arriving in 5 minutes."
    },
    "102": {
        item: "🛒 Express Groceries",
        driver: "Ndapewa",
        status: "📦 Picking up items at the store."
    },
    "103": {
        item: "📄 Custom Document Parcel",
        driver: "Johannes",
        status: "✅ Delivered to reception."
    }
};


// ==========================================
// 2. LOCATE: Grab elements from track.html
// ==========================================
const orderInput = document.getElementById('orderInput');
const checkBtn = document.getElementById('checkBtn');
const orderResult = document.getElementById('orderResult');
const resultHeader = document.getElementById('resultHeader');
const resultDetails = document.getElementById('resultDetails');


// ==========================================
// 3. EXECUTE: Lookup order from Memory + Defaults
// ==========================================
checkBtn.addEventListener('click', function() {
    const receiptNumber = orderInput.value.trim().replace('#', '');

    // NEW: Unpack any custom orders saved in browser memory
    const savedOrders = JSON.parse(localStorage.getItem('dashAllOrders')) || {};

    // Combine default sample orders and newly saved orders into one list
    const allOrders = { ...defaultOrders, ...savedOrders };

    // Search the combined list for the receipt number
    const foundOrder = allOrders[receiptNumber];

    orderResult.classList.remove('hidden');

    if (foundOrder) {
        resultHeader.innerText = `Order #${receiptNumber}: ${foundOrder.item}`;
        resultHeader.style.color = "#1e293b";
        resultDetails.innerHTML = `<strong>Driver:</strong> ${foundOrder.driver} <br> <strong>Status:</strong> ${foundOrder.status}`;
    } else {
        resultHeader.innerText = "❌ Order Not Found";
        resultHeader.style.color = "#ff4757";
        resultDetails.innerText = "Please double-check your receipt number (Hint: Try 101, 102, 103, or an order number you just created).";
    }
});
