(function () {
  if (typeof UnblockMe === "undefined") {
    window.UnblockMe = {};
  }

  var Game = UnblockMe.Game = function () {
    this.addBlocks();
  };

  Game.DIM_X = 400;
  Game.DIM_Y = 600;
})();
