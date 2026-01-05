import { celciusToFahrenheit } from "./celciusToFahrenheit.js";
import { celciusToKelvin } from "./celciusToKelvin.js";
import { celciusToReamur } from "./celciusToReamur.js";

process.stdout.write("Masukkan suhu dalam celcius: ");

process.stdin.on("data", async (data) => {
  try {
    const input = Number(data.toString().trim());

    const fahrenheit = await celciusToFahrenheit(input);
    const kelvin = await celciusToKelvin(input);
    const reamur = await celciusToReamur(input);
    console.log("Hasil konversi suhu celcius ke fahrenheit adalah", fahrenheit);
    console.log("Hasil konversi suhu celcius ke kelvin adalah", kelvin);
    console.log("Hasil konversi suhu celcius ke reamur adalah", reamur);

    process.exit();
  } catch (error) {
    console.log("Error: ", error.message);
    process.exit();
  }
});
