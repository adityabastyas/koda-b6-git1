import { celciusToFahrenheit } from "./celciusToFahrenheit.js";
import { celciusToKelvin } from "./celciusToKelvin.js";

async function index() {
  try {
    const fahrenheit = await celciusToFahrenheit(5);
    const kelvin = await celciusToKelvin(8);
    console.log("Hasil konversi suhu celcius ke fahrenheit adalah", fahrenheit);
    console.log("Hasil konversi suhu celcius ke kelvin adalah", kelvin);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

index();
