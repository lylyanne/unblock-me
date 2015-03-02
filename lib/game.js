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
    height: 300,
    pos:[200,0],
  },
  {
    width: 300,
    height: 100,
    pos: [300,0],
  },
  {
    width: 100,
    height: 200,
    pos: [0,300],
  },
  {
    width: 200,
    height: 100,
    pos: [200,300],
  },
  {
    width: 100,
    height: 200,
    pos: [400,400],
  },
  {
    width: 100,
    height: 300,
    pos: [500,300],
  },
  {
    width: 300,
    height: 100,
    pos: [0,500],
  },
  {
    width: 200,
    height: 100,
    pos: [0,200],
    color: "red",
  },
  ];

  Game.prototype.addBlocks = function () {
    var that = this;
    Game.BLOCK_VALUES.forEach(function (blockOption) {
      blockOption["game"] = that;
      that.blocks.push(new UnblockMe.Block(blockOption));
    });
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    for (var i = 0; i < this.blocks.length; i++) {
      this.blocks[i].draw(ctx);
    };
  };

  Game.prototype.getCoord = function (event) {
    // doesn't know canvas
    var rt = canvas.getBoundingClientRect();
    return [(event.clientX - rt.left)*(canvas.width/rt.width), (evt.clientY - rt.top)*(canvas.height/rt.height)];
  };

})();
