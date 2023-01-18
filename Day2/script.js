var fs = require('fs')
var list = fs.readFileSync('input.txt', 'utf-8').replace(/\n/g, ' ').split(' ')
var arr = []
var arr2 = []
var total = 0

console.log(list)

for (let i = 0; i < list.length; i++) {
    arr2.push(list[i])
    if (i > 0 && i % 2 === 1) {
        arr.push(arr2)
        arr2 = []
    }
}

console.log(arr)

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 'A') {
        if (arr[i][1] === 'X') {
            total += 4
        } else if (arr[i][1] === 'Y') {
            total += 8
        } else if (arr[i][1] === 'Z') {
            total += 3
        }
        
    } else if (arr[i][0] === 'B') {
        if (arr[i][1] == 'X') {
            total += 1
        } else if (arr[i][1] === 'Y') {
            total += 5
        } else if (arr[i][1] === 'Z') {
            total += 9
        }
        
    } else if (arr[i][0] == 'C') {
        if (arr[i][1] == 'X') {
            total += 7
        } else if (arr[i][1] === 'Y') {
            total += 2
        } else if (arr[i][1] === 'Z') {
            total += 6
        }
    }
}

console.log('total', total)