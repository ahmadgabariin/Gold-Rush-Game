const board = new GoldRush(10 , 10)
const renderer = new Renderer()

renderer.renderBoard(board.matrix)



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
            board.movePlayer(1, )
        break

        case `w` :
            board.movePlayer(1, ``)
        break

        case `ArrowUp` :
            board.movePlayer(2, ``)
        break

        case `ArrowDown` :
            board.movePlayer(2, ``)
        break

        case `ArrowLeft` :
            board.movePlayer(2, `left`)
        break

        case `ArrowRight` :
            board.movePlayer(2, ``)
        break

    }
    renderer.renderBoard(board.matrix)
  });

