// Define the rate of tax per second
const taxRate = 0.00317057704; // Now in dollars

// Function to update tax counter
function updateTaxCounter() {
    // Get current date and time
    const now = new Date();

    // Define start of the year
    const startOfYear = new Date(now.getFullYear(), 0, 1);

    // Calculate elapsed seconds
    const elapsedSecondsYearly = (now - startOfYear) / 1000;

    // Calculate tax
    const yearlyTax = taxRate * elapsedSecondsYearly;

    // Update the page
    document.getElementById('yearly').innerText = `Yearly Tax: $${yearlyTax.toFixed(2)}`;
}

// Update the counter right away
updateTaxCounter();

// Then update the counter every second
setInterval(updateTaxCounter, 1000);
