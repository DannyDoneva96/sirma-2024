function getDaysInMonth(month) {
    switch (month) {
        case 1: // January
        case 3: // March
        case 5: // May
        case 7: // July
        case 8: // August
        case 10: // October
        case 12: // December
            return 31;
        case 4: // April
        case 6: // June
        case 9: // September
        case 11: // November
            return 30;
        case 2: // February
            return 28; 
        default:
            return "Invalid month";
    }
}

console.log(getDaysInMonth(4))
console.log(getDaysInMonth(7))