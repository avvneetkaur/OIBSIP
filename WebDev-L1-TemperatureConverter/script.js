function convertTemperature() {

const temperature = parseFloat(
    document.getElementById("temperature").value
);

const fromUnit = document.getElementById("fromUnit").value;
const toUnit = document.getElementById("toUnit").value;
const result = document.getElementById("result");

if (isNaN(temperature)) {
    result.textContent = "Enter a temperature";
    return;
}

let celsius;

// Convert the entered value to Celsius
if (fromUnit === "celsius") {
    celsius = temperature;
} 
else if (fromUnit === "fahrenheit") {
    celsius = (temperature - 32) * 5 / 9;
} 
else {
    celsius = temperature - 273.15;
}

let converted;
let symbol;

// Convert Celsius to selected unit
if (toUnit === "celsius") {
    converted = celsius;
    symbol = "°C";
} 
else if (toUnit === "fahrenheit") {
    converted = (celsius * 9 / 5) + 32;
    symbol = "°F";
} 
else {
    converted = celsius + 273.15;
    symbol = "K";
}

result.textContent = `${converted.toFixed(2)} ${symbol}`;


}
