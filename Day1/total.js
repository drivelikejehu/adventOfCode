var fs = require('fs')
var list = fs.readFileSync('input.txt', 'utf-8').split("\n")
var arr = []
var sum = 0
var top3 = 0

for (let i = 0; i < list.length; i++) {
    if (isNaN(parseInt(list[i]))) {
        arr.push(sum)
        sum = 0;
    } else {
        sum += parseInt(list[i])
    }
}

// var sorted = (arr.sort())
// console.log("problems: ", sorted.reverse())

arr.sort(function(a, b) {
  return b - a;
});

for (let j = 0; j < 3; j++) {
    top3 += arr[j]
}

console.log("total is: ", top3);