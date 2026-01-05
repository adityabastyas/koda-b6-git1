export async function celciusToFahrenheit(num) {
  try {
    if (typeof num !== "number" || num !== num) {
      throw new Error("Input harus berupa angka");
    }

    let f = num * (9 / 5) + 32;
    return f;
  } catch (error) {
    throw error;
  }
}
