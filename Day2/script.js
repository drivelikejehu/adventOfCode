var fs = require('fs')
var list = fs.readFileSync('input.txt', 'utf-8').replace(/\n/g, ' ').split(' ')
var arr = []
var arr2 = []

console.log(list)

for (let i = 0; i < list.length; i++) {
    arr2.push(list[i])
    if (i > 0 && i % 2 === 1) {
        arr.push(arr2)
        arr2 = []
    }
}


console.log(arr)