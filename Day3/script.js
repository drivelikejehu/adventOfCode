var fs = require('fs')
var list = fs.readFileSync('input.txt', 'utf-8').split("\n")
var ruckSacks = []

for (let i = 0; i < list.length; i++) {
    let arr = []
    arr.push(list[i])
    ruckSacks.push(arr)
}

console.log("RuckSacks: ", ruckSacks)