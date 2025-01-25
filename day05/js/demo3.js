// var units = prompt("Enter the number of units consumed: ");
// var bill = 0;

// if (units <= 100) {
//     bill = 0; // No charge for the first 100 units
// } else if (units <= 200) {
//     bill = (units - 100) * 5; // Rs 5 per unit for the next 100 units
// } else {
//     bill = 100 * 5 + (units - 200) * 10; // Rs 5 per unit for the next 100 units and Rs 10 per unit for units above 200
// }

//console.log("Total Bill Amount is Rs " + bill);

var unit = 200; // You can change this value to test with different units
var bill = 350;

if (unit <= 100) {
    bill = 0; // No charge for first 100 units
} else if (unit <= 200) {
    bill = (unit - 100) * 5; // Rs 5 per unit for the next 100 units
} else {
    bill = (100 * 5) + (100 * 10) + ((unit - 200) * 10); // Rs 10 per unit for units above 200
}

console.log("Total Bill Amount: Rs " + bill);
