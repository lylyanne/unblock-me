(function () {
  if (typeof UnblockMe === "undefined") {
    window.UnblockMe = {};
  };

  var Block = UnblockMe.Block = function (options) {
    this.pos = options.pos;
    this.color = options.color || 'orange';
    this.width = options.width;
    this.height = options.height;
    this.direction = (this.width > this.height ? "horz": "vert");
    this.game = options.game;
  };

  Block.prototype.draw = function (ctx) {
    var gameBorder = UnblockMe.Game.BORDER;
    ctx.clearRect(this.pos[0] + gameBorder, this.pos[1] + gameBorder,
      this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0] + gameBorder, this.pos[1] + gameBorder,
      this.width, this.height);
      ctx.lineJoin = "round";

    ctx.lineWidth="3";
    ctx.strokeStyle="#424245";
    ctx.strokeRect(this.pos[0] + gameBorder, this.pos[1] + gameBorder,
       this.width, this.height);
  };

  Block.prototype.move = function (mouse_pos, initial_pos) {
    if (this.direction == "horz" && mouse_pos[0] > initial_pos[0]) {
      if (!this.reachScreenEdge("r") && !this.isCollidedWith(this.game.blocks, "r")) {
        this.pos = [this.pos[0] + 5, this.pos[1]];
      };
    } else if (this.direction == "horz" && mouse_pos[0] < initial_pos[0]) {
      if (!this.reachScreenEdge("l") && !this.isCollidedWith(this.game.blocks, "l")) {
        this.pos = [this.pos[0] - 5, this.pos[1]];
      };
    } else if (this.direction == "vert" && mouse_pos[1] > initial_pos[1]) {
      if (!this.reachScreenEdge("b") && !this.isCollidedWith(this.game.blocks, "b")) {
        this.pos = [this.pos[0], this.pos[1] + 5];
      };
    } else if (this.direction == "vert" && mouse_pos[1] < initial_pos[1]) {
      if (!this.reachScreenEdge("t") && !this.isCollidedWith(this.game.blocks, "t")) {
        this.pos = [this.pos[0], this.pos[1] - 5];
      };
    };
    this.game.checkWon();
  };

  Block.prototype.isCollidedWith = function (blocks, dir) {
    for (var i = 0; i < blocks.length; i++) {
      // skip if it's itself
      if (blocks[i].pos[0] === this.pos[0] &&
        blocks[i].pos[1] === this.pos[1] ) continue;

      if (this.reachOtherBlockEdge(blocks[i], dir) === true) {
        return true;
      };
    };

    return false;
  };

  Block.prototype.isCollidedWithPos = function (pos) {
    return pos[0] >= this.pos[0] && pos[0] <= this.pos[0] + this.width &&
           pos[1] >= this.pos[1] && pos[1] <= this.pos[1] + this.height;
  };

  Block.prototype.reachOtherBlockEdge = function (block, dir) {
    if (dir === "r" && block.pos[0] == this.pos[0] + this.width &&
      block.pos[1] < this.pos[1] + this.height &&
      block.height + block.pos[1] > this.pos[1]) { return true; }
    else if (dir === "l" && block.pos[0] + block.width == this.pos[0] &&
      block.pos[1] < this.pos[1] + this.height &&
      block.height + block.pos[1] > this.pos[1]) { return true; }
    else if (dir === "b" && block.pos[0] < this.pos[0] + this.width &&
      block.pos[0] + block.width > this.pos[0] &&
      block.pos[1] == this.pos[1] + this.height) { return true; }
    else if (dir === "t" && block.pos[0] < this.pos[0] + this.width &&
      block.pos[0] + block.width > this.pos[0] &&
      block.height + block.pos[1] == this.pos[1]) { return true; }
    else { return false; }
  };

  Block.prototype.reachScreenEdge = function (dir) {
    if (this.pos[0] === 0 && dir === "l") { return true; }
    else if (this.pos[0] + this.width === 600 && dir === "r") { return true; }
    else if (this.pos[1] === 0 && dir === "t") { return true; }
    else if (this.pos[1] + this.height === 600 && dir === "b") { return true; }
    else { return false; }
  };
})();
