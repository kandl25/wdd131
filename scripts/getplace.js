const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified")

const today = new Date();
const lastMod = document.lastModified;

year.innerHTML = `${today.getFullYear()}`;
lastmodified.innerHTML = `Last Modification: ${lastMod}`;


// Function to calculate wind chill
function calculateWindChill() {
    var temperature = parseFloat(document.getElementById("temperature").innerText);
    var windSpeed = parseFloat(document.getElementById("windSpeed").innerText);

    // Check if temperature is within the valid range (60°F to 100°F)
    if (temperature < 60 || temperature > 100) {
        document.getElementById("result").innerText = "Temperature must be between 60°F and 100°F.";
        return;
    }

    // Calculate wind chill index
    var windChillIndex = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));

    document.getElementById("result").innerText = windChillIndex.toFixed(2) + "°F";
}

// Automatically calculate wind chill when the page loads
calculateWindChill();