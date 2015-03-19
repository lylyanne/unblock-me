(function() {
  if (typeof UnblockMe === "undefined") {
    window.UnblockMe = {};
  };

  var GameView = UnblockMe.GameView = function (game, canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.game = game;
    this.mouseX = null;
    this.mouseY = null;
    $(this.canvas).on('mousedown', this.selectBlock.bind(this));
  };

  GameView.prototype.selectBlock = function (event) {
    this.mouseX = event.pageX - this.canvas.offsetLeft;
    this.mouseY = event.pageY - this.canvas.offsetTop;
    this.mouseXY = [this.mouseX, this.mouseY];

    for (var i=0; i< this.game.blocks.length; i++) {
      var that = this;

      if (this.game.blocks[i].isCollidedWithPos(this.mouseXY)) {
        $(this.canvas).on('mousemove',
          this.updateBlockPos.bind(this, this.game.blocks[i], this.mouseXY))
          .on('mouseup', function() {
          $(that.canvas).off('mousemove');
        });
      }
    }
  };

  GameView.prototype.updateBlockPos = function (block, initial_pos) {
      block.move([event.pageX, event.pageY], initial_pos);
      this.game.draw(this.ctx);
  };

  GameView.prototype.start = function () {
    this.game.draw(this.ctx);
  };
})();
