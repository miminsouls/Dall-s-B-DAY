/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENIDO DEL ÁLBUM — edita SOLO este archivo
 * ─────────────────────────────────────────────────────────────
 *  · Estructura: 12 dobles páginas (24 páginas interiores).
 *  · Todo lo que aparece entre [corchetes] es TEXTO PROVISIONAL.
 *  · src: null  → se muestra una imagen provisional marcada.
 *    Para usar una foto real: guárdala en /public/photos/<carpeta>/ y escribe
 *    src: '/photos/<carpeta>/nombre-de-la-foto.jpg'
 *  · pos: posición del bloque dentro de la página, en porcentajes
 *    (top / left / width). rotate: inclinación en grados.
 *  · Ver src/data/README.md para la lista de bloques disponibles.
 */

export const album = {
  cover: {
    // Textos tomados de morphine_album_base/index.html
    kicker: 'A Birthday Gift · October 23', // línea sobre el álbum cerrado
    monogram: ['M', 'D'],
    title: ['A Little Piece', 'of Forever'],
    date: 'October 23',
    hint: 'Touch the golden clasp ♡', // texto bajo el álbum cerrado
    ariaLabel: 'Desabrochar y abrir el álbum de Morphine para Dalliancé',
  },

  titlePage: {
    heading: ['Morphine', 'Dalliancé'],
    dedication: 'A little something from me to you.',
    date: 'October 23',
  },

  music: {
    src: '/audio/ambient.mp3', // coloca aquí tu archivo de música
    volume: 0.35,
    // Si el archivo no existe, se usa una caja de música generada (provisional)
    fallbackMusicBox: true,
  },

  chapters: [
    { id: 'regalo', numeral: 'I', title: 'Happy Birthday, my love' },
    { id: 'infancia', numeral: 'II', title: 'Once upon a little redhead' },
    { id: 'ballet', numeral: 'III', title: 'Ballet & Life Before You' },
    { id: 'conocimos', numeral: 'IV', title: 'And Then There Was You' },
    { id: 'recuerdos', numeral: 'V', title: 'Our Memories & My Heart' },
    { id: 'mellizos', numeral: 'VI', title: 'Our Little Forever' },
    { id: 'futuro', numeral: 'VII', title: 'To Be Continued…' },
  ],

  pages: [
    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 1 (Págs. 1–2) · Bienvenida y regalo de cumpleaños
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'regalo',
      spread: 1,
      title: 'Happy Birthday, my love. ♡',
      blocks: [
        { type: 'chapterTitle', text: 'Happy Birthday, my love. ♡', pos: { top: '8%', left: '8%', width: '84%' } },
        {
          type: 'note',
          text: 'A little something from me to you. ♡',
          pos: { top: '36%', left: '14%', width: '72%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'rose', pos: { top: '62%', left: '36%', width: '26%' }, rotate: 12 },
      ],
    },
    {
      chapter: 'regalo',
      spread: 1,
      title: 'Open me, handsome…',
      blocks: [
        {
          type: 'note',
          text: 'Open me, handsome… I made you something. ♡',
          pos: { top: '10%', left: '14%', width: '72%' },
          rotate: 2,
        },
        {
          type: 'envelope',
          label: 'Open me, handsome…',
          seal: 'M',
          pos: { top: '34%', left: '12%', width: '76%' },
          rotate: -2,
          letter: {
            title: 'For my birthday boy',
            greeting: 'To my favorite birthday boy,',
            body: [
              "I spent an embarrassing amount of time thinking about your gift. Which is ridiculous, considering I've already given you my actual heart.",
              "So here's a little piece of my life, and all the moments that became ours.",
              'Now be a good boy and turn the page.',
            ],
            signature: 'Your Morphi ♡',
          },
        },
        { type: 'flower', variant: 'lavender', pos: { top: '74%', left: '68%', width: '20%' }, rotate: -18 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 2 (Págs. 3–4) · Infancia de Morphine (Bebé)
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'infancia',
      spread: 2,
      folder: '01-morphine-bebe',
      blocks: [
        { type: 'chapterTitle', text: 'Once upon a little redhead…', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'photo',
          src: null,
          placeholder: 'Baby Morphi · 01-morphine-bebe/foto-01',
          caption: "Yes, I've always been this adorable.",
          frame: 'tape',
          ratio: '4 / 5',
          pos: { top: '30%', left: '18%', width: '58%' },
          rotate: -4,
        },
        { type: 'flower', variant: 'rose', pos: { top: '68%', left: '70%', width: '22%' }, rotate: 16 },
      ],
    },
    {
      chapter: 'infancia',
      spread: 2,
      folder: '01-morphine-bebe',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'Baby Morphi · 01-morphine-bebe/foto-02',
          caption: '[Recuerdo provisional de sus primeros años]',
          frame: 'corners',
          ratio: '1 / 1',
          pos: { top: '12%', left: '12%', width: '48%' },
          rotate: 3,
        },
        {
          type: 'note',
          text: '[Nota manuscrita provisional — primeros recuerdos de Morphine bebé]',
          pos: { top: '64%', left: '16%', width: '68%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'fern', pos: { top: '14%', left: '68%', width: '20%' }, rotate: -14 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 3 (Págs. 5–6) · Infancia y sueños de niña
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'infancia',
      spread: 3,
      folder: '02-morphine-infancia',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'Little Morphi · 02-morphine-infancia/foto-01',
          caption: 'Little me, big dreams.',
          frame: 'tape',
          ratio: '4 / 5',
          pos: { top: '12%', left: '14%', width: '56%' },
          rotate: -3,
        },
        {
          type: 'note',
          text: '[Nota provisional — travesuras y sueños de infancia]',
          pos: { top: '68%', left: '18%', width: '66%' },
          rotate: 2,
        },
      ],
    },
    {
      chapter: 'infancia',
      spread: 3,
      folder: '02-morphine-infancia',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'Little Morphi · 02-morphine-infancia/foto-02',
          caption: '[Pie de foto provisional · infancia]',
          frame: 'deckle',
          ratio: '1 / 1',
          pos: { top: '10%', left: '10%', width: '44%' },
          rotate: -4,
        },
        {
          type: 'photo',
          src: null,
          placeholder: 'Little Morphi · 02-morphine-infancia/foto-03',
          caption: '[Pie de foto provisional · infancia]',
          frame: 'corners',
          ratio: '3 / 4',
          pos: { top: '38%', left: '48%', width: '42%' },
          rotate: 5,
        },
        { type: 'flower', variant: 'lavender', pos: { top: '68%', left: '14%', width: '22%' }, rotate: 15 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 4 (Págs. 7–8) · Ballet
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'ballet',
      spread: 4,
      folder: '03-morphine-ballet',
      blocks: [
        { type: 'chapterTitle', text: 'A thousand dances…', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'photo',
          src: null,
          placeholder: 'Ballet memories · 03-morphine-ballet/foto-01',
          caption: 'A thousand dances before I found you.',
          frame: 'corners',
          ratio: '4 / 5',
          pos: { top: '30%', left: '16%', width: '58%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'rose', pos: { top: '66%', left: '72%', width: '20%' }, rotate: -20 },
      ],
    },
    {
      chapter: 'ballet',
      spread: 4,
      folder: '03-morphine-ballet',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'Ballet · 03-morphine-ballet/foto-02',
          caption: '[Zapatillas, ensayos y escenarios]',
          frame: 'tape',
          ratio: '4 / 3',
          pos: { top: '12%', left: '12%', width: '74%' },
          rotate: 3,
        },
        {
          type: 'note',
          text: '[Nota manuscrita provisional — años de ballet y disciplina]',
          pos: { top: '64%', left: '14%', width: '70%' },
          rotate: -2,
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 5 (Págs. 9–10) · Vida antes de Dalliancé
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'ballet',
      spread: 5,
      folder: '04-antes-de-dalliance',
      blocks: [
        { type: 'chapterTitle', text: 'Before there was us…', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'photo',
          src: null,
          placeholder: 'Life before you · 04-antes-de-dalliance/foto-01',
          caption: '[Pie de foto provisional · su vida antes de conocerlo]',
          frame: 'deckle',
          ratio: '4 / 5',
          pos: { top: '30%', left: '16%', width: '56%' },
          rotate: -3,
        },
      ],
    },
    {
      chapter: 'ballet',
      spread: 5,
      folder: '04-antes-de-dalliance',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'Life before you · 04-antes-de-dalliance/foto-02',
          caption: '[Pie de foto provisional]',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '12%', left: '22%', width: '54%' },
          rotate: 4,
        },
        {
          type: 'note',
          text: '[Nota provisional — quién era Morphine justo antes de cruzarse con Dalliancé]',
          pos: { top: '66%', left: '14%', width: '72%' },
          rotate: -1,
        },
        { type: 'flower', variant: 'fern', pos: { top: '12%', left: '8%', width: '16%' }, rotate: -22 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 6 (Págs. 11–12) · Cómo se conocieron
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'conocimos',
      spread: 6,
      folder: '05-morphine-dalliance',
      blocks: [
        { type: 'chapterTitle', text: 'And then there was you.', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'photo',
          src: null,
          placeholder: 'Our first photo · 05-morphine-dalliance/foto-01',
          caption: 'You had NO idea what you were getting into. ♡',
          frame: 'gold',
          ratio: '4 / 3',
          pos: { top: '32%', left: '12%', width: '76%' },
          rotate: -2,
        },
      ],
    },
    {
      chapter: 'conocimos',
      spread: 6,
      folder: '05-morphine-dalliance',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'How we met · 05-morphine-dalliance/foto-02',
          caption: '[Pie de foto provisional · cómo nos conocimos]',
          frame: 'corners',
          ratio: '4 / 5',
          pos: { top: '10%', left: '20%', width: '54%' },
          rotate: 3,
        },
        {
          type: 'note',
          text: '[Nota manuscrita provisional — el primer encuentro entre Morphine y Dalliancé]',
          pos: { top: '66%', left: '14%', width: '72%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'rose', pos: { top: '12%', left: '72%', width: '20%' }, rotate: 18 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 7 (Págs. 13–14) · Recuerdos románticos
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'recuerdos',
      spread: 7,
      folder: '05-morphine-dalliance',
      blocks: [
        { type: 'chapterTitle', text: 'Falling for you…', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'photo',
          src: null,
          placeholder: 'Romantic memory · 05-morphine-dalliance/foto-03',
          caption: '[Cita o momento romántico provisional]',
          frame: 'corners',
          ratio: '4 / 5',
          pos: { top: '30%', left: '16%', width: '58%' },
          rotate: -3,
        },
        { type: 'flower', variant: 'lavender', pos: { top: '66%', left: '72%', width: '20%' }, rotate: -12 },
      ],
    },
    {
      chapter: 'recuerdos',
      spread: 7,
      folder: '05-morphine-dalliance',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'Romantic memory · 05-morphine-dalliance/foto-04',
          caption: '[Segundo recuerdo romántico provisional]',
          frame: 'tape',
          ratio: '4 / 3',
          pos: { top: '12%', left: '14%', width: '72%' },
          rotate: 2,
        },
        {
          type: 'note',
          text: '[Nota manuscrita provisional — un momento especial juntos]',
          pos: { top: '64%', left: '16%', width: '68%' },
          rotate: -2,
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 8 (Págs. 15–16) · Recuerdos divertidos y cómplices
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'recuerdos',
      spread: 8,
      folder: '06-nuestros-recuerdos',
      blocks: [
        { type: 'chapterTitle', text: 'My favorite person to annoy.', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'photo',
          src: null,
          placeholder: 'A silly memory · 06-nuestros-recuerdos/foto-01',
          caption: 'Te amo, incluso cuando eres insoportable. ♡',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '30%', left: '18%', width: '58%' },
          rotate: -4,
        },
      ],
    },
    {
      chapter: 'recuerdos',
      spread: 8,
      folder: '06-nuestros-recuerdos',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'Fun memory · 06-nuestros-recuerdos/foto-02',
          caption: '[Risas y locuras cotidianas]',
          frame: 'deckle',
          ratio: '4 / 5',
          pos: { top: '10%', left: '22%', width: '52%' },
          rotate: 4,
        },
        {
          type: 'note',
          text: '[Nota provisional — broma interna o recuerdo divertido de los dos]',
          pos: { top: '66%', left: '14%', width: '72%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'fern', pos: { top: '14%', left: '8%', width: '16%' }, rotate: 20 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 9 (Págs. 17–18) · El regalo de su corazón
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'recuerdos',
      spread: 9,
      folder: '06-nuestros-recuerdos',
      blocks: [
        { type: 'chapterTitle', text: 'The gift of my heart', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'photo',
          src: null,
          placeholder: 'My heart is yours · 06-nuestros-recuerdos/foto-03',
          caption: '[Fotografía simbólica · el regalo de su corazón]',
          frame: 'gold',
          ratio: '4 / 5',
          pos: { top: '30%', left: '18%', width: '58%' },
          rotate: -2,
        },
      ],
    },
    {
      chapter: 'recuerdos',
      spread: 9,
      folder: '06-nuestros-recuerdos',
      blocks: [
        {
          type: 'note',
          text: "I've already given you my actual heart… ♡",
          pos: { top: '10%', left: '14%', width: '72%' },
          rotate: 2,
        },
        {
          type: 'envelope',
          label: 'My heart, in writing',
          seal: 'M',
          pos: { top: '34%', left: '12%', width: '76%' },
          rotate: -2,
          letter: {
            title: 'My heart is yours',
            greeting: '[Saludo provisional]',
            body: [
              '[Carta provisional sobre la promesa y entrega del corazón de Morphine a Dalliancé.]',
              '[Puedes reemplazar este texto en src/data/album.js.]',
            ],
            signature: 'Yours, Morphine ♡',
          },
        },
        { type: 'flower', variant: 'rose', pos: { top: '74%', left: '68%', width: '20%' }, rotate: -24 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 10 (Págs. 19–20) · Embarazo de los mellizos (Ecografía)
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'mellizos',
      spread: 10,
      folder: '07-mellizos',
      blocks: [
        { type: 'chapterTitle', text: 'Our little forever…', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'ultrasound',
          src: null,
          caption: 'Two tiny heartbeats. Two little troublemakers.',
          header: ['07-mellizos', '[Fecha ecografía]'],
          pos: { top: '30%', left: '14%', width: '68%' },
          rotate: -3,
        },
      ],
    },
    {
      chapter: 'mellizos',
      spread: 10,
      folder: '07-mellizos',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'Waiting for the twins · 07-mellizos/foto-01',
          caption: '[Pie de foto provisional · esperando a los mellizos]',
          frame: 'corners',
          ratio: '4 / 5',
          pos: { top: '10%', left: '20%', width: '54%' },
          rotate: 3,
        },
        {
          type: 'note',
          text: '[Nota manuscrita provisional — la noticia de los dos pequeños corazones]',
          pos: { top: '66%', left: '14%', width: '72%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'lavender', pos: { top: '12%', left: '72%', width: '18%' }, rotate: -15 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 11 (Págs. 21–22) · Dulce espera y futura familia
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'mellizos',
      spread: 11,
      folder: '07-mellizos',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'Growing family · 07-mellizos/foto-02',
          caption: '[Recuerdo provisional del embarazo]',
          frame: 'tape',
          ratio: '4 / 3',
          pos: { top: '12%', left: '14%', width: '72%' },
          rotate: -3,
        },
        {
          type: 'note',
          text: 'So many birthdays, little hands to hold, and memories waiting for us.',
          pos: { top: '62%', left: '14%', width: '72%' },
          rotate: 2,
        },
      ],
    },
    {
      chapter: 'mellizos',
      spread: 11,
      folder: '07-mellizos',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'Parents to be · 07-mellizos/foto-03',
          caption: '[Morphine & Dalliancé · futuros papás]',
          frame: 'gold',
          ratio: '4 / 5',
          pos: { top: '12%', left: '20%', width: '56%' },
          rotate: 3,
        },
        { type: 'flower', variant: 'rose', pos: { top: '68%', left: '66%', width: '22%' }, rotate: 14 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 12 (Págs. 23–24) · Nuestro futuro juntos y última carta
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'futuro',
      spread: 12,
      folder: '08-nuestro-futuro',
      blocks: [
        { type: 'chapterTitle', text: 'The best is yet to come.', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'note',
          text: "So many pictures we haven't taken yet… ♡",
          pos: { top: '30%', left: '16%', width: '68%' },
          rotate: -2,
        },
        {
          type: 'envelope',
          label: 'One last letter…',
          seal: '♡',
          pos: { top: '50%', left: '14%', width: '72%' },
          rotate: 2,
          letter: {
            title: 'One last letter…',
            greeting: 'My darling,',
            body: [
              'Now there are two little hearts growing inside me, and a whole family waiting to make new memories.',
              "I left these pages empty on purpose. Because the best part of our story hasn't happened yet.",
              'Happy birthday, my love.',
            ],
            signature: 'Forever yours, Morphine ♡',
          },
        },
      ],
    },
    {
      chapter: 'futuro',
      spread: 12,
      folder: '08-nuestro-futuro',
      blocks: [
        {
          type: 'blank',
          title: 'To be continued…',
          text: 'For our future memories ♡',
          pos: { top: '8%', left: '8%', width: '84%' },
        },
      ],
    },
  ],
}
