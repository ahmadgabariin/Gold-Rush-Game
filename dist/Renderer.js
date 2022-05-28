class Renderer {
    constructor () {

    }

    setGrid () {
        let grid = $(`#grid-body`)
        grid.css(`display` , `grid`)
        grid.css(`grid-template-rows` , `repeat(${board.numRows},1fr)`)
        let gridChildren = $(`#grid-body > div`)
        gridChildren.css(`display`, `grid`)
        gridChildren.css(`grid-template-columns` , `repeat(${board.numCoulmns},1fr)`)
    }

    
    handlebarsValidationFunctions () {
        Handlebars.registerHelper('isCoind', function (value) {
            return value ===`c`
        });      
        Handlebars.registerHelper('isPlayer1', function (value) {
            return value === 1
        });   
        Handlebars.registerHelper('isPlayer2', function (value) {
            return value === 2
        });   
    }

    renderBoard (matrix) { 
        let gridBody = $(`#grid-body`)
        gridBody.empty()
        this.handlebarsValidationFunctions()
        const SOURCE = $(`#board-template`).html()
        const TEMPLATE = Handlebars.compile(SOURCE)
        let newHTML = TEMPLATE({'matrix' : matrix})
        gridBody.append(newHTML)
        this.setGrid()
        $(`.player1-score`).text(board.player1.points)
        $(`.player2-score`).text(board.player2.points)
    }
}