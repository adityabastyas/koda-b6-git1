import { celciusToFahrenheit } from "./celciusToFahrenheit.js";
import { celciusToKelvin } from "./celciusToKelvin.js";
import { celciusToReamur } from "./celciusToReamur.js";

async function index() {
  try {
    const fahrenheit = await celciusToFahrenheit(5);
    const kelvin = await celciusToKelvin(8);
    const reamur = await celciusToReamur(10);
    console.log("Hasil konversi suhu celcius ke fahrenheit adalah", fahrenheit);
    console.log("Hasil konversi suhu celcius ke kelvin adalah", kelvin);
    console.log("Hasil konversi suhu celcius ke reamur adalah", reamur);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

index();
