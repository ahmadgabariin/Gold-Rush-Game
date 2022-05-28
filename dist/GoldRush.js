class GoldRush extends Matrix{
    constructor(numRows , numCoulmns) {
        super(numRows , numCoulmns)
        this.player1 = new Player(0, 0)
        this.player2 = new Player(this.numRows - 1, this.numCoulmns - 1)
    }

    checkIfItsACoin (player) {
        if (this.matrix[player.x][player.y] === `c`) {
           player.points++
        }
    }

    playerMoveDown  = player => {
        switch (player) {
            case 1 :
                if (this.player1.x < this.numRows - 1) {
                    this.alter(this.player1.x, this.player1.y , `.`)
                    this.player1.x += 1
                    this.checkIfItsACoin(this.player1)
                    this.alter(this.player1.x, this.player1.y , player)
                }
            break
    
            case 2 : 
                if (this.player2.x < this.numRows - 1) {
                    this.alter(this.player2.x, this.player2.y , `.`)
                    this.player2.x += 1
                    this.checkIfItsACoin(this.player2)
                    this.alter(this.player2.x , this.player2.y , player)
                }
            break
        }
    }

    playerMoveUp = player => {
        switch (player) {
            case 1 : 
                if (this.player1.x > 0) {
                    this.alter(this.player1.x , this.player1.y , `.`)
                    this.player1.x -= 1
                    this.checkIfItsACoin(this.player1)
                    this.alter(this.player1.x , this.player1.y , player)
                }
            break

            case 2 : 
                if (this.player2.x > 0) {
                    this.alter(this.player2.x , this.player2.y , `.`)
                    this.player2.x -= 1
                    this.checkIfItsACoin(this.player2)
                    this.alter(this.player2.x , this.player2.y , player)
                }
            break
        }
    }

    playerMoveRight = player => {
        switch (player) {
            case 1 :
                if (this.player1.y < board.numCoulmns - 1) {
                    this.alter(this.player1.x , this.player1.y , `.`)
                    this.player1.y += 1
                    this.checkIfItsACoin(this.player1)
                    this.alter(this.player1.x , this.player1.y , player)
                }
            break

            case 2 :
                if (this.player2.y < board.numCoulmns - 1) {
                    this.alter(this.player2.x , this.player2.y , `.`)
                    this.player2.y += 1
                    this.checkIfItsACoin(this.player2)
                    this.alter(this.player2.x , this.player2.y ,player)
                }
            break
        }
    }

    playerMoveLeft = player => {
        switch (player) {
            case 1 :
                if (this.player1.y > 0) {
                    this.alter(this.player1.x , this.player1.y , `.`)
                    this.player1.y -= 1
                    this.checkIfItsACoin(this.player1)
                    this.alter(this.player1.x , this.player1.y , player)
                }
            break

            case 2 :
                if (this.player2.y > 0) {
                    this.alter(this.player2.x , this.player2.y , `.`)
                    this.player2.y -= 1
                    this.checkIfItsACoin(this.player2)
                    this.alter(this.player2.x , this.player2.y ,player)
                }
            break
        }
    }

    movePlayer (player , movement) {
        switch (movement.toLowerCase()) {
            case  'down':
                this.playerMoveDown(player)
            break;

            case `up` : 
                this.playerMoveUp(player)
            break;
            
            case `right` :
                this.playerMoveRight(player)
            break

            case `left` :
                this.playerMoveLeft (player)
            break

            default :
            console.log(`Wrong movement !`) 
        }
    }
}