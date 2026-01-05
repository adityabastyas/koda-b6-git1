import { celciusToFahrenheit } from "./celciusToFahrenheit.js";

async function index() {
  try {
    const fahrenheit = await celciusToFahrenheit(5);
    console.log("Hasil konversi suhu celcius ke fahrenheit adalah", fahrenheit);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

index();
