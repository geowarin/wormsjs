module entities {

  enum Direction {
    LEFT,
    RIGHT
  }

  export class Worm extends Phaser.Sprite {
    target:Phaser.Sprite;
    speed:number = 100;

    constructor(game:Phaser.Game) {
      super(game, 0, 0, 'worm');

      this.anchor.setTo(0.5);
      var walk = this.animations.add('walk', Phaser.Animation.generateFrameNames('walk', 1, 15, '', 2), 30, true, false);
      walk.enableUpdate = true;
      walk.onUpdate.add(this.onWalk.bind(this));

      this.animations.play('walk');

      game.physics.enable(this, Phaser.Physics.ARCADE);
    }

    onWalk(animation:Phaser.Animation, frame:Phaser.Frame) {
      if (frame.name === 'walk03') {
        this.game.sound.play('walk-compress');
      }
      if (frame.name === 'walk11') {
        this.game.sound.play('walk-expand');
      }
    }

    update() {
      super.update();

      var keyboard:Phaser.Keyboard = this.game.input.keyboard;
      this.body.velocity.x = 0;

      if (keyboard.isDown(Phaser.Keyboard.LEFT)) {
        this.walk(1);
      } else if (keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        this.walk(-1);
      }

      if (this.body.velocity.isZero()) {
        this.animations.stop();
      }
    }

    walk(direction:number) {
      this.scale.x = direction;
      this.body.velocity.x -= this.speed * direction;
      this.animations.play('walk');
    }
  }
}
