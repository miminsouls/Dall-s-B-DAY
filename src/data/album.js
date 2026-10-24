/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENIDO DEL ÁLBUM — edita SOLO este archivo
 * ─────────────────────────────────────────────────────────────
 *  · Estructura: 10 dobles páginas (20 páginas interiores).
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
          text: 'A little something from me to you, my handsome birthday boy. ♡',
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
          text: 'Open me, handsome… I made this whole world just for you. ♡',
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
    //  DOBLE PÁGINA 2 (Págs. 3–4) · Infancia combinada (Bebé y niña)
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
          placeholder: 'Baby Morphi · 01-morphine-bebe',
          caption: "Yes, my love, I've always been this adorable.",
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
      folder: '02-morphine-infancia',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'Little Morphi · 02-morphine-infancia',
          caption: 'Little me, big dreams… already dreaming of someone like you. ♡',
          frame: 'corners',
          ratio: '4 / 5',
          pos: { top: '10%', left: '20%', width: '54%' },
          rotate: 3,
        },
        {
          type: 'note',
          text: '[Nota tierna provisional — su infancia y los sueños de una pequeña pelirroja]',
          pos: { top: '66%', left: '14%', width: '72%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'lavender', pos: { top: '12%', left: '72%', width: '18%' }, rotate: -14 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 3 (Págs. 5–6) · Ballet y su vida antes de Dalliancé
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'ballet',
      spread: 3,
      folder: '03-morphine-ballet',
      blocks: [
        { type: 'chapterTitle', text: 'A thousand dances…', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'photo',
          src: null,
          placeholder: 'Ballet memories · 03-morphine-ballet',
          caption: 'A thousand dances before I found my favorite partner.',
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
      spread: 3,
      folder: '04-antes-de-dalliance',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'Before there was us · 04-antes-de-dalliance',
          caption: 'Every step was leading me straight into your arms. ♡',
          frame: 'deckle',
          ratio: '4 / 5',
          pos: { top: '10%', left: '20%', width: '54%' },
          rotate: 3,
        },
        {
          type: 'note',
          text: '[Nota manuscrita provisional — el ballet y su vida antes de encontrar al amor de su vida]',
          pos: { top: '66%', left: '14%', width: '72%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'fern', pos: { top: '12%', left: '8%', width: '16%' }, rotate: -22 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 4 (Págs. 7–8) · Cómo se conocieron
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'conocimos',
      spread: 4,
      folder: '05-morphine-dalliance',
      blocks: [
        { type: 'chapterTitle', text: 'And then there was you.', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'photo',
          src: null,
          placeholder: 'Our first photo · 05-morphine-dalliance/foto-01',
          caption: 'The moment my whole world changed forever. ♡',
          frame: 'gold',
          ratio: '4 / 3',
          pos: { top: '32%', left: '12%', width: '76%' },
          rotate: -2,
        },
      ],
    },
    {
      chapter: 'conocimos',
      spread: 4,
      folder: '05-morphine-dalliance',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'How we met · 05-morphine-dalliance/foto-02',
          caption: 'One look at you, handsome, and I was completely yours.',
          frame: 'corners',
          ratio: '4 / 5',
          pos: { top: '10%', left: '20%', width: '54%' },
          rotate: 3,
        },
        {
          type: 'note',
          text: '[Nota romántica provisional — cómo se conocieron y cómo se enamoró de él al instante]',
          pos: { top: '66%', left: '14%', width: '72%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'rose', pos: { top: '12%', left: '72%', width: '20%' }, rotate: 18 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 5 (Págs. 9–10) · Recuerdos románticos
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'recuerdos',
      spread: 5,
      folder: '05-morphine-dalliance',
      blocks: [
        { type: 'chapterTitle', text: 'Hopelessly in love with you…', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'photo',
          src: null,
          placeholder: 'Romantic memory · 05-morphine-dalliance/foto-03',
          caption: 'Every kiss with you still feels like the very first one. ♡',
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
      spread: 5,
      folder: '05-morphine-dalliance',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'Romantic memory · 05-morphine-dalliance/foto-04',
          caption: 'Held in your arms is my favorite place to be.',
          frame: 'tape',
          ratio: '4 / 3',
          pos: { top: '12%', left: '14%', width: '72%' },
          rotate: 2,
        },
        {
          type: 'note',
          text: '[Nota melosa y enamorada provisional — citas, caricias y momentos inolvidables juntos]',
          pos: { top: '64%', left: '16%', width: '68%' },
          rotate: -2,
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 6 (Págs. 11–12) · Recuerdos tiernos, coquetos y juguetones
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'recuerdos',
      spread: 6,
      folder: '06-nuestros-recuerdos',
      blocks: [
        { type: 'chapterTitle', text: 'My favorite person to spoil. ♡', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'photo',
          src: null,
          placeholder: 'Sweet memory · 06-nuestros-recuerdos/foto-01',
          caption: 'Te amo con locura, mi vida… I can never get enough of your kisses. ♡',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '30%', left: '18%', width: '58%' },
          rotate: -4,
        },
      ],
    },
    {
      chapter: 'recuerdos',
      spread: 6,
      folder: '06-nuestros-recuerdos',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'Playful memory · 06-nuestros-recuerdos/foto-02',
          caption: 'Stealing your hoodies and all your attention forever. ♡',
          frame: 'deckle',
          ratio: '4 / 5',
          pos: { top: '10%', left: '22%', width: '52%' },
          rotate: 4,
        },
        {
          type: 'note',
          text: '[Nota coqueta, tierna y juguetona provisional — risas, mimos y complicidad]',
          pos: { top: '66%', left: '14%', width: '72%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'fern', pos: { top: '14%', left: '8%', width: '16%' }, rotate: 20 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 7 (Págs. 13–14) · El regalo de su corazón
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'recuerdos',
      spread: 7,
      folder: '06-nuestros-recuerdos',
      blocks: [
        { type: 'chapterTitle', text: 'The gift of my heart', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'photo',
          src: null,
          placeholder: 'My heart is yours · 06-nuestros-recuerdos/foto-03',
          caption: 'Every single beat belongs to you, my darling.',
          frame: 'gold',
          ratio: '4 / 5',
          pos: { top: '30%', left: '18%', width: '58%' },
          rotate: -2,
        },
      ],
    },
    {
      chapter: 'recuerdos',
      spread: 7,
      folder: '06-nuestros-recuerdos',
      blocks: [
        {
          type: 'note',
          text: "I've already given you my actual heart… and I'd give it to you a thousand times more. ♡",
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
            greeting: 'My sweet love,',
            body: [
              '[Carta romántica provisional sobre la entrega del corazón de Morphine a Dalliancé.]',
              '[Puedes personalizar este texto en src/data/album.js.]',
            ],
            signature: 'Yours completely, Morphine ♡',
          },
        },
        { type: 'flower', variant: 'rose', pos: { top: '74%', left: '68%', width: '20%' }, rotate: -24 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 8 (Págs. 15–16) · Recién embarazada de los mellizos (Primera ecografía)
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'mellizos',
      spread: 8,
      folder: '07-mellizos',
      blocks: [
        { type: 'chapterTitle', text: 'Our tiny new secret…', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'ultrasound',
          src: null,
          caption: 'Two tiny new heartbeats… we are going to be parents, my love! ♡',
          header: ['07-mellizos', 'First Ultrasound'],
          pos: { top: '30%', left: '14%', width: '68%' },
          rotate: -3,
        },
      ],
    },
    {
      chapter: 'mellizos',
      spread: 8,
      folder: '07-mellizos',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'Just found out · 07-mellizos/foto-01',
          caption: 'Still so tiny, just beginning to grow inside me… two little miracles made of our love. ♡',
          frame: 'corners',
          ratio: '4 / 5',
          pos: { top: '10%', left: '20%', width: '54%' },
          rotate: 3,
        },
        {
          type: 'note',
          text: '[Nota tierna provisional — la emoción de descubrir que recién está embarazada de mellizos]',
          pos: { top: '66%', left: '14%', width: '72%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'lavender', pos: { top: '12%', left: '72%', width: '18%' }, rotate: -15 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 9 (Págs. 17–18) · Primeros días de esta nueva etapa
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'mellizos',
      spread: 9,
      folder: '07-mellizos',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'Our new beginning · 07-mellizos/foto-02',
          caption: 'The very beginning of our biggest adventure together. ♡',
          frame: 'tape',
          ratio: '4 / 3',
          pos: { top: '12%', left: '14%', width: '72%' },
          rotate: -3,
        },
        {
          type: 'note',
          text: 'Your hands on my belly, whispering to our two tiny beans… you are already the sweetest dad. ♡',
          pos: { top: '62%', left: '14%', width: '72%' },
          rotate: 2,
        },
      ],
    },
    {
      chapter: 'mellizos',
      spread: 9,
      folder: '07-mellizos',
      blocks: [
        {
          type: 'photo',
          src: null,
          placeholder: 'Future parents · 07-mellizos/foto-03',
          caption: 'Two little hearts just starting to beat, and so much love waiting for them.',
          frame: 'gold',
          ratio: '4 / 5',
          pos: { top: '12%', left: '20%', width: '56%' },
          rotate: 3,
        },
        { type: 'flower', variant: 'rose', pos: { top: '68%', left: '66%', width: '22%' }, rotate: 14 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 10 (Págs. 19–20) · Nuestro futuro juntos y última carta
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'futuro',
      spread: 10,
      folder: '08-nuestro-futuro',
      blocks: [
        { type: 'chapterTitle', text: 'The best is yet to come.', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'note',
          text: "So many pictures we haven't taken yet, so many birthdays and little hands to hold… ♡",
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
              'Right now, two tiny little hearts are just beginning to grow inside me, and a whole life together is waiting for us.',
              "I left these pages empty on purpose. Because the best part of our story hasn't happened yet.",
              'Happy birthday, my love. Thank you for making me the happiest woman alive.',
            ],
            signature: 'Forever yours, Morphine ♡',
          },
        },
      ],
    },
    {
      chapter: 'futuro',
      spread: 10,
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
