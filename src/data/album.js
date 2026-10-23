/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENIDO DEL ÁLBUM — edita SOLO este archivo
 * ─────────────────────────────────────────────────────────────
 *  · Todo lo que aparece entre [corchetes] es TEXTO PROVISIONAL.
 *  · src: null  → se muestra una imagen provisional marcada.
 *    Para usar una foto real: guárdala en /public/photos/ y escribe
 *    src: '/photos/nombre-de-la-foto.jpg'
 *  · pos: posición del bloque dentro de la página, en porcentajes
 *    (top / left / width). rotate: inclinación en grados.
 *  · Ver src/data/README.md para la lista de bloques disponibles.
 */

export const album = {
  cover: {
    kicker: 'Álbum de',
    names: ['Morphine', 'Dalliancé'],
    subtitle: '[Subtítulo provisional]',
  },

  titlePage: {
    heading: ['Morphine', 'Dalliancé'],
    dedication: '[Dedicatoria provisional — unas palabras de Morphine para Dalliancé]',
    date: '[Fecha de la boda]',
  },

  music: {
    src: '/audio/ambient.mp3', // coloca aquí tu archivo de música
    volume: 0.35,
    // Si el archivo no existe, se usa una caja de música generada (provisional)
    fallbackMusicBox: true,
  },

  chapters: [
    { id: 'infancia', numeral: 'I', title: 'La infancia de Morphine' },
    { id: 'pareja', numeral: 'II', title: 'Nuestra historia' },
    { id: 'familia', numeral: 'III', title: 'Nuestra futura familia' },
  ],

  pages: [
    // ── Capítulo I · Página 1 ─────────────────────────────────
    {
      chapter: 'infancia',
      blocks: [
        { type: 'chapterTitle', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'photo',
          src: null,
          placeholder: 'Fotografía de la infancia de Morphine',
          caption: '[Pie de foto provisional]',
          frame: 'corners',
          ratio: '4 / 5',
          pos: { top: '31%', left: '15%', width: '54%' },
          rotate: -3,
        },
        { type: 'flower', variant: 'rose', pos: { top: '64%', left: '68%', width: '24%' }, rotate: 18 },
      ],
    },

    // ── Capítulo I · Página 2 ─────────────────────────────────
    {
      chapter: 'infancia',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'Foto de infancia 2',
          caption: '[Pie de foto]',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '11%', left: '9%', width: '42%' },
          rotate: -4,
        },
        {
          type: 'photo',
          src: null,
          placeholder: 'Foto de infancia 3',
          caption: '[Pie de foto]',
          frame: 'deckle',
          ratio: '3 / 4',
          pos: { top: '36%', left: '51%', width: '41%' },
          rotate: 5,
        },
        {
          type: 'note',
          text: '[Nota manuscrita provisional]',
          pos: { top: '62%', left: '9%', width: '38%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'lavender', pos: { top: '9%', left: '66%', width: '20%' }, rotate: -12 },
      ],
    },

    // ── Capítulo II · Página 3 ────────────────────────────────
    {
      chapter: 'pareja',
      blocks: [
        { type: 'chapterTitle', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'photo',
          src: null,
          placeholder: 'Fotografía de Morphine y Dalliancé',
          caption: '[Pie de foto provisional]',
          frame: 'gold',
          ratio: '4 / 3',
          pos: { top: '31%', left: '12%', width: '76%' },
          rotate: 1,
        },
        { type: 'flower', variant: 'fern', pos: { top: '66%', left: '4%', width: '15%' }, rotate: -24 },
      ],
    },

    // ── Capítulo II · Página 4 ────────────────────────────────
    {
      chapter: 'pareja',
      blocks: [
        {
          type: 'note',
          text: '[Nota provisional — un recuerdo de la pareja]',
          pos: { top: '9%', left: '14%', width: '58%' },
          rotate: 2,
        },
        {
          type: 'envelope',
          label: 'Para Dalliancé',
          seal: 'M',
          pos: { top: '33%', left: '10%', width: '80%' },
          rotate: -2,
          letter: {
            title: 'Carta para Dalliancé',
            greeting: '[Saludo provisional]',
            body: [
              '[Primer párrafo provisional de la carta de Morphine para Dalliancé.]',
              '[Segundo párrafo provisional. Sustituye estos textos en src/data/album.js.]',
            ],
            signature: '[Firma]',
          },
        },
        { type: 'flower', variant: 'rose', pos: { top: '73%', left: '66%', width: '20%' }, rotate: -30 },
      ],
    },

    // ── Capítulo III · Página 5 ───────────────────────────────
    {
      chapter: 'familia',
      blocks: [
        { type: 'chapterTitle', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'ultrasound',
          src: null,
          caption: '[Pie de foto provisional]',
          header: ['[Centro médico]', '[Fecha]'],
          pos: { top: '30%', left: '9%', width: '52%' },
          rotate: -3,
        },
        {
          type: 'note',
          text: '[Nota provisional]',
          pos: { top: '36%', left: '65%', width: '29%' },
          rotate: 6,
        },
        {
          type: 'envelope',
          label: 'Carta para el futuro',
          seal: 'M',
          pos: { top: '66%', left: '44%', width: '48%' },
          rotate: 4,
          letter: {
            title: 'Carta para el futuro',
            greeting: '[Saludo provisional]',
            body: ['[Texto provisional de la carta. Sustituye este texto en src/data/album.js.]'],
            signature: '[Firma]',
          },
        },
      ],
    },

    // ── Capítulo III · Página 6 ───────────────────────────────
    {
      chapter: 'familia',
      blocks: [
        {
          type: 'blank',
          title: 'Para el futuro',
          text: '[Espacio reservado para nuevos recuerdos]',
          pos: { top: '8%', left: '8%', width: '84%' },
        },
      ],
    },
  ],
}
