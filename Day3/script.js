var fs = require('fs')
var list = fs.readFileSync('input.txt', 'utf-8').split("\n")
var ruckSacks = []
var commonLetters = []
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var total = 0;

console.log("the list: ", list)

for (let i = 0; i < list.length; i++) {
    let arr = []
    let ruckSack = list[i]

    // separate each rucksack into 2 equal compartments
    let compartment1 = ruckSack.slice(0, ruckSack.length / 2)
    let compartment2 = ruckSack.slice(ruckSack.length / 2, ruckSack.length)
    arr.push(compartment1, compartment2)
    ruckSacks.push(arr)
}

console.log("RuckSacks: ", ruckSacks)

// finding the common letter in each string
for (let j = 0; j < ruckSacks.length; j++) {
    let comp1 = new Set(ruckSacks[j][0])
    let res = ([...new Set(ruckSacks[j][1])]
        .filter(char => comp1.has(char)))
        // res is an array
        commonLetters.push(res[0])
}

 console.log("common letters: ", commonLetters)
 console.log('alphabet: ', alphabet)


// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.


// comparing commonLetters array against alphabet

for (let i = 0; i < commonLetters.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
        // position of lowercase alphabet
        if (commonLetters[i] == alphabet[j]) {
            total += j + 1
        } else if (commonLetters[i] == alphabet[j].toUpperCase()) {
            total += j + 1 + 26
        }
    }
}

console.log("the total: ", total)