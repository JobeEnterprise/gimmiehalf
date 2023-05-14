// Define the rate of tax per second
const taxRate = 0.00317057704 / 100; // Convert to dollars

// Initialize total tax
let totalTax = 0;

// Update the counters every second
setInterval(function() {
    // Get current date and time
    const now = new Date();

    // Define start of the day
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Define start of the week (assuming week starts on Monday)
    const startOfWeek = new Date();
    startOfWeek.setDate(now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1));
    startOfWeek.setHours(0, 0, 0, 0);

    // Define start of the month
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    // Define start of the year
    const startOfYear = new Date(now.getFullYear(), 0, 1);

    // Calculate elapsed seconds
    const elapsedSecondsDaily = (now - startOfDay) / 1000;
    const elapsedSecondsWeekly = (now - startOfWeek) / 1000;
    const elapsedSecondsMonthly = (now - startOfMonth) / 1000;
    const elapsedSecondsYearly = (now - startOfYear) / 1000;

    // Calculate taxes
    const dailyTax = taxRate * elapsedSecondsDaily;
    const weeklyTax = taxRate * elapsedSecondsWeekly;
    const monthlyTax = taxRate * elapsedSecondsMonthly;
    const yearlyTax = taxRate * elapsedSecondsYearly;

    // Calculate total tax
    totalTax += taxRate;

    // Update the page
    document.getElementById('daily').innerText = `Daily Tax: $${dailyTax.toFixed(2)}`;
    document.getElementById('weekly').innerText = `Weekly Tax: $${weeklyTax.toFixed(2)}`;
    document.getElementById('monthly').innerText = `Monthly Tax: $${monthlyTax.toFixed(2)}`;
    document.getElementById('yearly').innerText = `Yearly Tax: $${yearlyTax.toFixed(2)}`;
    document.getElementById('total').innerText = `Total Tax: $${totalTax.toFixed(2)}`;
}, 1000);
