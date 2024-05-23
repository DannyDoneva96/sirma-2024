function calculateLuggageCharges(weight, sumOfDimensions) {
    let totalCharge = 0;

    // Check for overweight fee
    if (weight > 50) {
        totalCharge += 100;
    }

    // Check for oversize fee
    if (sumOfDimensions > 158) {
        const excess = sumOfDimensions - 158;
        if (excess <= 20) {
            totalCharge += 50;
        } else if (excess <= 50) {
            totalCharge += 100;
        } else {
            totalCharge += 200;
        }
    }

    // Check for handling fee if both overweight and oversize
    if (weight > 50 && sumOfDimensions > 158) {
        totalCharge += 50;
    }

    return totalCharge;
}