function cimke({ nev, ar }) {
  return `${nev} – ${ar} Ft`;
}

console.log(cimke({ nev: 'Egér', ar: 6990, keszlet: 12 }));
console.log(cimke({ nev: 'Monitor', ar: 54990 }));

