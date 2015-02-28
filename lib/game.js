(function () {
  if (typeof UnblockMe === "undefined") {
    window.UnblockMe = {};
  };

  var Game = UnblockMe.Game = function () {
    this.blocks = [];
    // this.theBlock = UnblockMe.Block.new();
    this.addBlocks();
  };

  Game.DIM_X = 600;
  Game.DIM_Y = 600;

  Game.BLOCK_VALUES = [
  {
    width: 100,
    height: 200,
    pos:[0,0],
  },
  {
    width: 200,
    height: 100,
    pos: [300,300],
  },
  ];

  Game.prototype.addBlocks = function () {
    var that = this;
    Game.BLOCK_VALUES.forEach(function (blockOption) {
      that.blocks.push(new UnblockMe.Block(blockOption));
    })
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    for (var i = 0; i < this.blocks.length; i++) {
      this.blocks[i].draw(ctx);
    };
  };

})();
