const tambah = require('./math');

test('menambahkan 1 + 2 hasilnya harus 3', () => {
  expect(tambah(1, 2)).toBe(3);
});
