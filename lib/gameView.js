(function () {
  if (typeof UnblockMe === "undefined") {
    window.UnblockMe = {};
  }

  var GameView = UnblockMe.GameView = function (game, ctx) {
    this.ctx = ctx;
    this.game = game;
  };
})();
