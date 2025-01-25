// Array of sample data (weight in kg and height in meters)
var data = [
  { weight: 50, height: 1.6 },  // Example data
  { weight: 65, height: 1.7 },
  { weight: 85, height: 1.75 },
  { weight: 95, height: 1.8 }
];

// Loop through each dataset
for (var i = 0; i < data.length; i++) {
  var weight = data[i].weight;
  var height = data[i].height;

  // Calculate BMI
  var bmi = weight / (height * height);

  // Determine the category
  var category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal Weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  // Output the result
  console.log(
    `Person ${i + 1}: Weight = ${weight}kg, Height = ${height}m, BMI = ${bmi.toFixed(2)}, Category = ${category}`
  );
}
