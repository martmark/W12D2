class View {
  constructor(game, $container) {
    this.game = game;
    this.$container = $container;
    this.setupBoard();
  }

  bindEvents() {
    $('.ttt < ul < li').on("click", function(e) {
      let pos = $(e.currentTarget).data('pos');
      this.game.playMove(pos);
    })
  }

  makeMove($square) {}

  setupBoard() {

    const $ul = $('<ul>');

    for (let i = 0; i < 3; i++ ) {
      for (let x = 0; x < 3; x++ ) {

        const $li = $('<li>');
        $li.data('pos', [i,x]);
        $ul.append($li);
      }
    }
   this.$container.append($ul);

  }
}

module.exports = View;