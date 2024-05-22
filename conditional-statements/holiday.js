function calculateVacation(budget, season) {
    let destination;
    let holidayType;
    let amountSpent;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            holidayType = "Camp";
            amountSpent = budget * 0.30;
        } else if (season === "winter") {
            holidayType = "Hotel";
            amountSpent = budget * 0.70;
        } else {
            console.log("Invalid season");
            return;
        }
    } else if (budget <= 1000) {
        destination = "Europe";
        if (season === "summer") {
            holidayType = "Camp";
            amountSpent = budget * 0.40;
        } else if (season === "winter") {
            holidayType = "Hotel";
            amountSpent = budget * 0.80;
        } else {
            console.log("Invalid season");
            return;
        }
    } else {
        destination = "Asia";
        holidayType = "Hotel";
        amountSpent = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${holidayType} – ${amountSpent.toFixed(2)}`);
}
