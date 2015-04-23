module Wormsjs.State {
  export class Preload extends Phaser.State {
    private preloadBar:Phaser.Sprite;

    preload() {
      this.preloadBar = this.add.sprite(290, 290, 'preload-bar');
      this.load.setPreloadSprite(this.preloadBar);

      this.load.spritesheet('worm-walk', 'assets/sprites/worm-walk.png', 60, 60);
    }

    create() {
      this.game.state.start('main');
    }
  }
}
