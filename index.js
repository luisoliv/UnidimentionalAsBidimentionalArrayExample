/*
* Example of accessing one dimentional array as bidimentional ones (matrix)
* to test it just run it with: $ node index.js
*
* made by Luis Oliva
* */

let unidimentional = []
let bidimentional = []

//asuming an square 5x5 matrix because testing in 3x3 sucks
let rows = 5
let columns = 5

function fillOnedimentional () {
    for (let i = 0; i < (columns * rows); i++) {
        unidimentional.push(Math.floor(Math.random() * Math.floor(2000)))
    }
    console.log('\n\n1-dimentional =>\n', unidimentional, '\n')
}

function getValueByCoords (x, y) {
    if (x < columns && y < rows)
        return unidimentional[y * rows + x]
    else
        return null
}

function createBidimentional () {
    for (let i = 0; i < rows; i++) {
        var singleRow = []
        for (let j = 0; j < columns; j++) {
            singleRow.push(getValueByCoords(i, j))
        }
        bidimentional.push(singleRow)
    }

    console.log('2-dimentional =>\n', bidimentional, '\n')
}

fillOnedimentional()
createBidimentional()

var coords = [3, 1]
console.log('getValueByCoords(' + coords[0] + ', ' + coords[1] + ') =>', getValueByCoords(coords[0], coords[1]))

