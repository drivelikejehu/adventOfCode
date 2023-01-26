var fs = require('fs')
var list = fs.readFileSync('input.txt', 'utf-8').split("\n")
var elfGroups = []
// var commonLetters = []
// var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
// var total = 0;

// console.log(list)

for (let i = 0; i < list.length; i += 3) {
    let arr = []
    arr.push(list[i], list[i + 1], list[i + 2])
    elfGroups.push(arr)
}

console.log(elfGroups)