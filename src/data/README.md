# Cómo editar el contenido del álbum

Todo el contenido vive en [`album.js`](./album.js). No hace falta tocar componentes.

## Fotos
1. Copia la foto a `public/photos/` (ej. `public/photos/infancia-01.jpg`).
2. En el bloque correspondiente cambia `src: null` por `src: '/photos/infancia-01.jpg'`.
3. Ajusta `ratio` (ej. `'4 / 5'`, `'1 / 1'`, `'4 / 3'`) a la proporción de la foto.

Mientras `src` sea `null` se verá una **IMAGEN PROVISIONAL** con el texto de `placeholder`.

## Música
Guarda un archivo en `public/audio/ambient.mp3`. Si no existe, el botón de música usa una
caja de música generada como sustituto provisional (`fallbackMusicBox: false` la desactiva).

## Páginas
`pages` es una lista en orden. En escritorio se muestran de dos en dos (pliegos); en móvil, una a una.
Cada página tiene `chapter` (id de `chapters`) y una lista de `blocks`.

## Bloques disponibles
Todos aceptan `pos: { top, left, width }` (porcentajes de la página) y `rotate` (grados).

| type | Campos |
|---|---|
| `chapterTitle` | (usa el capítulo de la página) · `text` opcional para sobrescribir el título |
| `photo` | `src`, `placeholder`, `caption`, `alt`, `ratio`, `frame`: `corners` · `tape` · `deckle` · `gold` |
| `note` | `text` |
| `flower` | `variant`: `rose` · `lavender` · `fern` |
| `envelope` | `label`, `seal` (letra del lacre), `letter: { title, greeting, body: [párrafos], signature }` |
| `ultrasound` | `src`, `caption`, `header: [izquierda, derecha]` |
| `blank` | `title`, `text` — página vacía con huecos para fotos futuras |
