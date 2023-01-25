var fs = require('fs')
var list = fs.readFileSync('input.txt', 'utf-8').split("\n")
var arr = []
var elfGroups = []
var commonLetters = []
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var total = 0;

console.log(list)
for (let i = 0; i < list.length; i++) {
    // make an array out of every 3 lines
    arr.push(list[i])
    if (i > 0 && i % 3 === 1) {
        elfGroups.push(arr)
        arr = []
    }
}

console.log('elf groups: ', elfGroups)
