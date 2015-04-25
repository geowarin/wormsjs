module Wormsjs.State {
  export class Preload extends Phaser.State {
    private preloadBar:Phaser.Sprite;

    preload() {
      this.preloadBar = this.add.sprite(290, 290, 'preload-bar');
      this.load.setPreloadSprite(this.preloadBar);

      this.stage.backgroundColor = '#8585C2';
      this.load.atlas('worm', 'assets/sprites/worm.png', 'assets/sprites/worm.json');

      this.load.audio('walk-compress', 'assets/sounds/walk-compress.wav');
      this.load.audio('walk-expand', 'assets/sounds/walk-expand.wav');
    }

    create() {
      this.game.state.start('main');
    }
  }
}
