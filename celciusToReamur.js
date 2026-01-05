export async function celciusToReamur(num) {
  try {
    if (typeof num !== "number" || num !== num) {
      throw new Error("Input harus berupa angka");
    }

    let r = (4 / 5) * num;
    return r;
  } catch (error) {
    throw error;
  }
}
