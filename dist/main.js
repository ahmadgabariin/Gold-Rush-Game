const board = new GoldRush(10 , 10)
const renderer = new Renderer()


$(`#btn-stat-game`).on(`click`, function () {
    renderer.renderBoard(board.matrix)
})

$(`body`).keydown(function(e) {
    console.log(e.key)
    switch(e.key) {
        case `a` :
            board.movePlayer(1, `left`)
        break

        case `s` : 
            board.movePlayer(1 , `down`)
        break
       
        case `d` :
            board.movePlayer(1, `right`)
        break

        case `w` :
            board.movePlayer(1, `up`)
        break

        case `ArrowUp` :
            board.movePlayer(2, `up`)
        break

        case `ArrowDown` :
            board.movePlayer(2, `down`)
        break

        case `ArrowLeft` :
            board.movePlayer(2, `left`)
        break

        case `ArrowRight` :
            board.movePlayer(2, `right`)
        break

    }
    renderer.renderBoard(board.matrix)
  });

