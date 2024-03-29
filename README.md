# Sandy Espape

Desarrollo de videojuego para la clase Electiva VI: desarrollo de videojuegos.

Desarrollado por Jhonatan Cardona Buitrago y Kenpo Erickson Castaño Gil.

## Configuración del proyecto

Para este desarrollo se va usar el framework `Phaser`, framework basado en JavaScript.

### Inicialización del proyecto

```
npm init -y
npm i phaser
```

Con lo anterior se inicializa un proyecto que trabajara con `Node.js` y además se agrega la dependencia de `Phaser`.

Si se clona o se descarga el código solo se debe ejecutar el siguiente comando:

```
npm i
```

Lo siguiente se debe realizar común y corriente.

Se deberá instalar de manera global `Parcel`, que es un blunder de aplicaciones web, parecido a Webpack pero no necesita de configuración.

```
npm install -g parcel-bundler
```

Luego se crea el archivo `game.js` en la carpeta `src`, archivo donde pondremos toda nuestra configuración del videojuego.

```js
import Phaser from 'phaser'

new Phaser.Game()
```

Para que el navegador entienda este código debemos hacer un blunder por medio de `Parcel`, así

```
parcel watch src/game.js
```

Se crea el archivo donde se verá el videojuego llamado `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sandy Escape</title>
</head>
<body>
    <script src="./dist/game.js"></script>
</body>
</html>
```

Se instancia el archivo `./dist/game.js` ya que este contiene el código que puede entender el navegador.

Phaser debe ejecutarse en un servidor o no funcionara, por lo tanto, vamos a instalar de manera global `browser-sync`, este nos ayudara a ejecutar un servidor HTTP.

```
npm install -g browser-sync
```

Y lo ejecutamos

```
browser-sync start --server --files "."
```
