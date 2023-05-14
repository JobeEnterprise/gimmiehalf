// Define the rate of tax per second
const taxRate = 0.00317057704;

// Define the counters
let dailyTax = 0;
let weeklyTax = 0;
let monthlyTax = 0;
let yearlyTax = 0;
let totalTax = 0;

// Define the start date of the counters
const startDate = new Date();

// Update the counters every second
setInterval(function() {
    // Calculate the elapsed time in various units
    const now = new Date();
    const elapsedSeconds = (now - startDate) / 1000;
    const elapsedDays = elapsedSeconds / 86400;
    const elapsedWeeks = elapsedSeconds / (86400 * 7);
    const elapsedMonths = elapsedSeconds / (86400 * 30.44);  // Rough average
    const elapsedYears = elapsedSeconds / (86400 * 365.25);  // Leap years included

    // Update the counters
    dailyTax = elapsedDays <= 1 ? taxRate * elapsedSeconds : 0;
    weeklyTax = elapsedWeeks <= 1 ? taxRate * elapsedSeconds : 0;
    monthlyTax = elapsedMonths <= 1 ? taxRate * elapsedSeconds : 0;
    yearlyTax = elapsedYears <= 1 ? taxRate * elapsedSeconds : 0;
    totalTax = taxRate * elapsedSeconds;

    // Update the page
    document.getElementById('daily').innerText = `Daily Tax: $${dailyTax.toFixed(2)}`;
    document.getElementById('weekly').innerText = `Weekly Tax: $${weeklyTax.toFixed(2)}`;
    document.getElementById('monthly').innerText = `Monthly Tax: $${monthlyTax.toFixed(2)}`;
    document.getElementById('yearly').innerText = `Yearly Tax: $${yearlyTax.toFixed(2)}`;
    document.getElementById('total').innerText = `Total Tax: $${totalTax.toFixed(2)}`;
}, 1000);
