import Phaser from "phaser"

let aceleracion = 50
let rayos = 1

function preload() {
    this.load.image("sky", "../assets/background.png")
    this.load.image("sandy", "../assets/Sandy.png")
    this.load.image("enemy", "../assets/rayo.png")
    this.load.image("gameover", "../assets/gameover.png")
}

function create() {
    this.add.image(600, 315, "sky")
    this.sandy = this.physics.add.image(100, 450, "sandy").setImmovable()
    this.sandy.body.allowGravity = false
    this.cursors = this.input.keyboard.createCursorKeys()
    this.enemies = this.physics.add.image(1200, 500, "enemy")
    this.physics.add.collider(this.enemies, this.sandy, colision)
    let velocity = 100 * Phaser.Math.Between(1.3, 2)
    if (Phaser.Math.Between(0, 10) > 5) velocity = 0 - velocity
    this.enemies.setVelocityX(velocity)
    console.log(this.enemies)
}

const colision = (sandy, enemigo) => {
    window.location.reload()
}

function update() {
    if (this.cursors.up.isDown) {
        this.sandy.setVelocityY(0 - aceleracion)
        console.log(this.enemies.x)
        console.log(this.enemies.y)
    } else if (this.cursors.down.isDown) {
        this.sandy.setVelocityY(0 + aceleracion)
    } else {
        this.sandy.setVelocityY(0)
    }
    if (this.enemies.x < 0) {
        for (let i = 0; i < rayos; i++) {
            this.enemies = this.physics.add.image(
                1200,
                Math.random() * 630,
                "enemy"
            )
            this.physics.add.collider(this.enemies, this.sandy, colision)
            let velocity = 100 * Phaser.Math.Between(1.3, 2)
            if (Phaser.Math.Between(0, 10) > 5) velocity = 0 - velocity
            this.enemies.setVelocityX(velocity)
        }
        rayos++
        aceleracion += 1
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 630,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { x: -150 },
            debug: false,
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
