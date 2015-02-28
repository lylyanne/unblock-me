(function () {
  if (typeof UnblockMe === "undefined") {
    window.UnblockMe = {};
  };

  var Block = UnblockMe.Block = function (options) {
    this.pos = options.pos;
    this.color = options.color || 'gray';
    this.width = options.width;
    this.height = options.height;
    this.direction = (this.width > this.height ? "horz": "vert");
    this.game = options.game;
  };

  Block.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.rect(this.pos[0], this.pos[1], this.width, this.height);
    ctx.fill();
  };

  Block.prototype.slide = function () {

  };

})();
