var fs = require('fs')
var list = fs.readFileSync('input.txt', 'utf-8').split("\n")
var arr = []
var sum = 0
var mostCal = 0

for (let i = 0; i < list.length; i++) {
    if (isNaN(parseInt(list[i]))) {
        arr.push(sum)
        sum = 0;
        // console.log(arr)
    } else {
        sum += parseInt(list[i])
    }
}

for (let j = 0; j < arr.length; j++) {
    if ( mostCal < arr[j]) {
        mostCal = arr[j]
    }
}

console.log("the most calories: ", mostCal)
