const termek = { nev: 'Egér', ar: 6990, keszlet: 12, kategoria: 'periféria' };

const { nev: termekNev, ar: termekAr, ...masAdatok } = termek;

const akcios = {
  ...termek,
  ar: Math.round(termekAr * 0.9),
  akcios: true,
};

console.log(`${termekNev}: ${termekAr} Ft`);
console.log(`${termekNev}: ${akcios.ar} Ft, akcios: ${akcios.akcios}, keszlet: ${masAdatok.keszlet}`);
