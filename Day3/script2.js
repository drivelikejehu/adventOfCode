var fs = require('fs')
var list = fs.readFileSync('input.txt', 'utf-8').split("\n")
var elfGroups = []
var badges = []
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var total = 0;

// console.log(list)

for (let i = 0; i < list.length; i += 3) {
    let arr = []
    arr.push(list[i], list[i + 1], list[i + 2])
    elfGroups.push(arr)
}

// console.log("elf groups: ", elfGroups)

// finding the common letter in each group
for (let j = 0; j < elfGroups.length; j++) {
    let elf1 = new Set(elfGroups[j][0])
    let elf2 = new Set(elfGroups[j][1])
    let res = ([...new Set(elfGroups[j][2])]
        .filter(char => elf1.has(char)).filter(char => elf2.has(char)))
    badges.push(res[0])
}

// console.log("common letters: ", badges)

// comparing badges array against alphabet
for (let i = 0; i < badges.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
        if (badges[i] === alphabet[j]) {
            // position of lowercase alphabet
            total += j + 1
        } else if (badges[i] === alphabet[j].toUpperCase()) {
            total += j + 1 + 26
        }
    }
}

console.log("the total: ", total)
