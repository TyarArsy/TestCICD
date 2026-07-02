module.exports = (req, res) => {
  // Mengambil input dari URL: /api?berat=70&tinggi=175
  const berat = parseFloat(req.query.berat);
  const tinggiCm = parseFloat(req.query.tinggi);

  // Validasi input
  if (!berat || !tinggiCm) {
    return res.status(400).json({ 
      error: "Masukkan berat (kg) dan tinggi (cm) yang valid.",
      contoh: "/api?berat=70&tinggi=175"
    });
  }

  // Kalkulasi BMI: berat(kg) / (tinggi(m) * tinggi(m))
  const tinggiM = tinggiCm / 100;
  const bmi = (berat / (tinggiM * tinggiM)).toFixed(1);

  // Menentukan kategori
  let kategori = "";
  if (bmi < 18.5) kategori = "Kurus";
  else if (bmi < 25) kategori = "Ideal";
  else kategori = "Gemuk";

  res.status(200).json({
    berat_kg: berat,
    tinggi_cm: tinggiCm,
    bmi: parseFloat(bmi),
    kategori: kategori
  });
};