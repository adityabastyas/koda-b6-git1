export async function celciusToKelvin(num) {
  try {
    if (typeof num !== "number" || num !== num) {
      throw new Error("Input harus berupa angka");
    }

    let k = num + 273.15;
    return k;
  } catch (error) {
    throw error;
  }
}
