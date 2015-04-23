/// <reference path="definitions/phaser.comments.d.ts"/>

module Wormsjs {
  export class Game extends Phaser.Game {
    constructor() {
      super({
        width: 640,
        height: 480,
        transparent: false,
        enableDebug: true
      });

      this.state.add('boot', State.Boot);
      this.state.add('preload', State.Preload);
      this.state.add('main', State.Main);

      this.state.start('boot');
    }
  }
}
