const helyezettek = ['Anna', 'Béla', 'Csilla', 'Dávid', 'Emese'];

const [arany, ezust, ...tovabbiHelyezettek] = helyezettek;

console.log(`Arany: ${arany}, ezüst: ${ezust}, további helyezettek: ${tovabbiHelyezettek.join(', ')}`);

