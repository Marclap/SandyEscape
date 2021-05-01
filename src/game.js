import Phaser from "phaser"

function preload() {
    this.load.image("sky", "../assets/space3.png")
    this.load.image("sandy", "../assets/Sandy.png")
}

function create() {
    this.add.image(400, 300, "sky")
    let sandy = this.add.image(100, 450, "sandy")
    this.input.keyboard.on("keydown-D", () => {
        sandy.x++
    })
    this.input.keyboard.on("keydown-A", () => {
        sandy.x--
    })
}

function update() {}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 200 },
        },
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
    parent: "container",
}

const game = new Phaser.Game(config)
