const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const berat = parseFloat(req.query.berat);
  const tinggiCm = parseFloat(req.query.tinggi);

  // Jika tidak ada input, kirim halaman form biasa
  if (!berat || !tinggiCm) {
    const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
    return res.status(200).send(html);
  }

  // Logika perhitungan
  const bmi = (berat / Math.pow(tinggiCm / 100, 2)).toFixed(1);
  let kategori = bmi < 18.5 ? "Kurus" : bmi < 25 ? "Ideal" : "Gemuk";
  let pesan = bmi < 18.5 ? "Perbanyak nutrisi ya!" : bmi < 25 ? "Pertahankan!" : "Yuk mulai olahraga!";

  // Kirim respon UI langsung
  const responseHtml = `
    <html>
      <body style="font-family: sans-serif; text-align: center; padding-top: 50px;">
        <h1>Hasil BMI Kamu: ${bmi}</h1>
        <p>Kategori: <strong>${kategori}</strong></p>
        <p>${pesan}</p>
        <a href="/">Kembali</a>
      </body>
    </html>
  `;
  res.status(200).send(responseHtml);
};