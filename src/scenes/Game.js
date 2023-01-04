import Phaser from "../lib/phaser.js";

export default class Game extends Phaser.Scene {
  /** @type {Phaser.GameObjects.Text} */
  Text;

  constructor() {
    super("game");
  }

  init() {}

  preload() {
    this.load.image("skyBg","assets/sky.png")
  }

  create() {
    this.add.image(400,300,"skyBg")

    this.Text = this.add
      .text(400, 10, "Sandbox", { color: "#fff", fontSize: 44 })
      .setOrigin(0.5, -0.3);
  }

  update() {
  }
}
