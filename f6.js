const termek = { nev: 'Billentyűzet', ar: 14990, keszlet: 4 };

const akciosTermek = {
  ...termek,
  ar: Math.round(termek.ar * 0.9),
  akcios: true,
};

console.log(termek);
console.log(akciosTermek);
