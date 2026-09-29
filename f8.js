function statisztika(...szamok) {
  return {
    db: szamok.length,
    osszeg: szamok.reduce((sum, value) => sum + value, 0),
    max: Math.max(...szamok),
  };
}

console.log(statisztika(4, 8, 15, 16, 23, 42));
console.log(statisztika(7));
