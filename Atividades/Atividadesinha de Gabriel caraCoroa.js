// Jogo cara e coroa - melhor de três rodadas - aleatório com Do-While
var i = 1;
var cara = 0;
var coroa = 0;

do {
  let face = Math.random() * 100;
  face < 50 ? cara++ : coroa++
  i++;
} while (i <= 3);

console.log("-----------------------------------");
console.log("            PLACAR            ");
console.log("-----------------------------------");
console.log("Vitórias:", cara);
console.log("Derrotas:", coroa);
console.log("-----------------------------------");