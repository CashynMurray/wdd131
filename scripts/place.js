document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;

const temperature = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("windspeed").textContent);

function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1);
}

if (temperature <= 50 && windSpeed > 3) {
  document.getElementById("windchill").textContent = `${calculateWindChill(
    temperature,
    windSpeed
  )} °F`;
} else {
  document.getElementById("windchill").textContent = "N/A";
}