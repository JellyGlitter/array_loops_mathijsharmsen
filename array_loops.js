// --------------------------
// Opdracht 1
// --------------------------

const names = ["Henk", "Piet", "Fred", "Joop"];

let index;
for (index=0; index<=3;index++) {
    names[index] = names [index] +"je";
}

console.log(names);

// Verander de waardes van de array dusdanig dat er -"je" achter iedere naam wordt geplakt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]



// --------------------------
// Opdracht 2
// --------------------------

const numbers = [2, 4, 5, 29, 38];

let index1;
for (index1=0; index1<=4;index1++) {
    numbers [index1] = numbers [index1] * 3;
}

console.log(numbers);

// Verander de waardes van de array dusdanig dat iedere waarde met 3 vermenigvuldigd wordt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(numbers) geeft: [ 6, 12, 15, 87, 114 ];



// --------------------------
// Opdracht 3
// --------------------------

const figures = [4, 6, 12, 34, 1];

let index2;
for (index2=0; index2<=4;index2++) {
    figures[index2] = figures [index2] + 3;
}

console.log(figures)
// Verander de waardes van de array dusdanig dat er 3 bij iedere waarde wordt opgetelt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(figures) geeft: [ 7, 9, 15, 37, 4 ]


