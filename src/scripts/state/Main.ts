module Wormsjs.State {
  export class Main extends Phaser.State {

    worm:entities.Worm;

    create() {
      var thing:String = 'code !';
      this.add.text(10, 10, `Let's ${thing}`, {font: '65px Arial'});

      this.worm = new entities.Worm(this.game);
      this.worm.position.set(200, 200);
      this.add.existing(this.worm);
    }
  }
}
