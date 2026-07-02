module.exports = (req, res) => {
  const berat = parseFloat(req.query.berat);
  const tinggiCm = parseFloat(req.query.tinggi);

  if (!berat || !tinggiCm) {
    return res.status(400).json({ status: "Error", pesan: "Data kurang lengkap, coba lagi ya!" });
  }

  const bmi = (berat / Math.pow(tinggiCm / 100, 2)).toFixed(1);
  
  // Logika respon yang lebih menarik
  let komentar = "";
  if (bmi < 18.5) komentar = "Kamu agak kurus nih, jangan lupa makan yang bergizi!";
  else if (bmi < 25) komentar = "Mantap! Berat badanmu sudah ideal, pertahankan!";
  else komentar = "Wah, sepertinya harus mulai olahraga rutin nih. Semangat!";

  res.status(200).json({
    hasil_bmi: bmi,
    kategori: bmi < 18.5 ? "Kurus" : bmi < 25 ? "Ideal" : "Gemuk",
    pesan_untuk_kamu: komentar,
    tips: "Minum air putih yang cukup setiap hari!"
  });
};