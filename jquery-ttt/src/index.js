const View = require('./view.js')
const Game = require('./game.js')

  $(() => {
    const container = $('.ttt');
    const game = new Game();
    const view = new View(game, container);
  });
