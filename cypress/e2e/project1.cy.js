/// <reference types= "cypress" />

let array = ["Shereen", "omar", "Ammar", "lina", "sundus", "Osama", "leen",
  "Lyan", "Basel", "eman", "Fares", "Razan", "roze", "talal", "Yosef", "wael", "tala", "Yasmeen"]

let alphabet = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'
];


let ramdomindex = Math.floor(Math.random() * alphabet.length)
let letter = alphabet[ramdomindex]


function name() {

  for (let i = 0; i < array.length; i++) {
    if (array[i][1] == letter) {
      console.log(`The second letter of this name ${array[i]} is ${letter}`)
    }

  }
}

name()