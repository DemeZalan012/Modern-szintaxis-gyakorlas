const termek = { nev: 'Egér', ar: 6990, keszlet: 12, kategoria: 'periféria' };

const { nev: termekNev, ar: egysegAr, garancia = 12 } = termek;

console.log(`${termekNev} – egységár: ${egysegAr} Ft, garancia: ${garancia} hónap`);
