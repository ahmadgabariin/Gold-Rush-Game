class Matrix {
    constructor (numRows , numCoulmns) {
        this.numRows = numRows
        this.numCoulmns = numCoulmns
        this.matrix = this.generateMatrix(numRows , numCoulmns)
        this.generateCoins()
    }

    generateRandom (number) {
        let row = Math.random() * number
        return Math.floor(row)
    }
    generateCoins () {
        let coins = this.generateRandom(this.numRows) + this.numRows
        while (coins) {
            let row = this.generateRandom(this.numRows)
            let column = this.generateRandom(this.numCoulmns)
            if (row === 0 && column === 0 || row === this.numRows - 1 && column === this.numCoulmns - 1 || this.matrix[row][column] === `c`) { coins ++}
            else { this.matrix[row][column] = `c` }
            coins--
        }
    }

    generateMatrix (numRows , numCoulmns) {
        let matrix = []
        for (let i = 0 ; i < numRows ; i++) {
            matrix.push([])
            for (let j = 0 ; j < numCoulmns ; j++) {
                matrix[i].push(`.`)
            }
        }
        this.matrix = matrix
        this.setPlayers()
        return matrix
    }
    setPlayers () {
        this.matrix[0][0] = 1
        this.matrix[this.numRows - 1][this.numCoulmns - 1] = 2
    }

    print () {
        let row = ``
        for (let i = 0 ; i < this.matrix.length ; i++) {
            for (let j = 0 ; j < this.matrix[i].length ; j++ ) {
                row += this.matrix[i][j] + `\t`
            }
            row +=`\n`
        }
        console.log(row)
    }
    alter (x, y , value) {
        this.matrix[x][y] = value
    }
}