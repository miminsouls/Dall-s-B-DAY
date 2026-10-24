/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENIDO DEL ÁLBUM — edita SOLO este archivo
 * ─────────────────────────────────────────────────────────────
 *  · Estructura: 10 dobles páginas (20 páginas interiores).
 *  · Incluye todas las fotografías reales de /public/photos/ sin superposiciones.
 *  · Incluye los textos definitivos de las tres cartas.
 */

export const album = {
  cover: {
    kicker: 'A Birthday Gift · October 23',
    monogram: ['M', 'D'],
    title: ['A Little Piece', 'of Forever'],
    date: 'October 23',
    hint: 'Touch the golden clasp ♡',
    ariaLabel: 'Desabrochar y abrir el álbum de Morphine para Dalliancé',
  },

  titlePage: {
    heading: ['Morphine', 'Dalliancé'],
    dedication: 'A little something from me to you.',
    date: 'October 23',
  },

  music: {
    src: '/audio/ambient.mp3',
    volume: 0.35,
    fallbackMusicBox: true,
  },

  chapters: [
    { id: 'regalo', numeral: 'I', title: 'Happy Birthday, my love' },
    { id: 'infancia', numeral: 'II', title: 'Once upon a little redhead' },
    { id: 'ballet', numeral: 'III', title: 'Ballet & Life Before You' },
    { id: 'conocimos', numeral: 'IV', title: 'And Then There Was You' },
    { id: 'recuerdos', numeral: 'V', title: 'Our Memories & Adventures' },
    { id: 'corazon', numeral: 'VI', title: 'The Gift of My Heart' },
    { id: 'mellizos', numeral: 'VII', title: 'Our Little Forever' },
    { id: 'futuro', numeral: 'VIII', title: 'To Be Continued…' },
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
        { type: 'chapterTitle', text: 'Happy Birthday, my love. ♡', pos: { top: '6%', left: '8%', width: '84%' } },
        { type: 'doodle', variant: 'sparkle', tone: 'gold', pos: { top: '18.5%', left: '14%', width: '9.5%' }, rotate: -6 },
        { type: 'doodle', variant: 'sun', tone: 'gold', pos: { top: '18.5%', left: '76%', width: '10.5%' }, rotate: 8 },
        {
          type: 'note',
          text: 'Un pequeño regalo hecho a mano para mi sol. Guardé aquí pedacitos de mi vida y todos los momentos que se volvieron nuestros.',
          pos: { top: '29%', left: '12%', width: '76%' },
          rotate: -2,
        },
        { type: 'ephemera', variant: 'lace', pos: { top: '57%', left: '26%', width: '48%' }, rotate: -1 },
        { type: 'flower', variant: 'tulip', pos: { top: '68%', left: '40%', width: '19%' }, rotate: 10 },
        { type: 'ephemera', variant: 'waxSeal', emblem: 'M&D', tone: 'wine', pos: { top: '75%', left: '17%', width: '9.5%' }, rotate: -8 },
      ],
    },
    {
      chapter: 'regalo',
      spread: 1,
      title: 'Open me, handsome…',
      blocks: [
        {
          type: 'note',
          text: 'Open me, handsome… I made this whole album just for you.',
          pos: { top: '10%', left: '14%', width: '72%' },
          rotate: 2,
        },
        { type: 'doodle', variant: 'arrow', tone: 'wine', pos: { top: '25%', left: '16%', width: '16%' }, rotate: 22 },
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
            closing: 'All my kisses,',
            signature: 'your Morphi',
          },
        },
        { type: 'ephemera', variant: 'stamp', label: 'OCTOBER', sub: '23 · M&D', motif: 'sun', pos: { top: '74%', left: '14%', width: '13%' }, rotate: -6 },
        { type: 'flower', variant: 'lavender', pos: { top: '74%', left: '68%', width: '18%' }, rotate: -18 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 2 (Págs. 3–4) · Baby Morphi (01-morphine-bebe)
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'infancia',
      spread: 2,
      folder: '01-morphine-bebe',
      blocks: [
        { type: 'chapterTitle', text: 'Once upon a little redhead…', pos: { top: '4%', left: '8%', width: '84%' } },
        {
          type: 'photo',
          src: '/photos/01-morphine-bebe/morphi  bebe flor en la oreja.jpg.jpeg',
          caption: 'A tiny blossom',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '21%', left: '8%', width: '36%' },
          rotate: -4,
        },
        {
          type: 'photo',
          src: '/photos/01-morphine-bebe/morphi chiqui sonrisa.jpg.jpeg',
          caption: 'Already smiling for you',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '22%', left: '54%', width: '36%' },
          rotate: 4,
        },
        { type: 'flower', variant: 'wildflower', pos: { top: '57%', left: '3%', width: '11%' }, rotate: -10 },
        {
          type: 'photo',
          src: '/photos/01-morphine-bebe/morphi  bebe dormida.jpg.jpeg',
          caption: 'Así de chiquita era tu rojita',
          frame: 'corners',
          ratio: '4 / 3',
          pos: { top: '57%', left: '16%', width: '44%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'rose', pos: { top: '60%', left: '68%', width: '17%' }, rotate: 16 },
        { type: 'doodle', variant: 'sparkle', tone: 'gold', pos: { top: '81%', left: '70%', width: '10%' }, rotate: 6 },
      ],
    },
    {
      chapter: 'infancia',
      spread: 2,
      folder: '01-morphine-bebe',
      blocks: [
        {
          type: 'photo',
          src: '/photos/01-morphine-bebe/morphi bebe tocando piano.jpg.jpeg',
          caption: 'Mis primeras melodías',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '9%', left: '8%', width: '37%' },
          rotate: -3,
        },
        {
          type: 'photo',
          src: '/photos/01-morphine-bebe/morphi bebe con gato.jpg.jpeg',
          caption: 'Softest little cuddles',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '10%', left: '54%', width: '37%' },
          rotate: 4,
        },
        { type: 'ephemera', variant: 'scrap', kind: 'music', pos: { top: '43%', left: '13%', width: '26%' }, rotate: -3 },
        {
          type: 'photo',
          src: '/photos/01-morphine-bebe/morphi bebe gordita mimida.jpg.jpeg',
          caption: 'Dormilona desde chiquita',
          frame: 'deckle',
          ratio: '4 / 3',
          pos: { top: '53%', left: '8%', width: '42%' },
          rotate: 3,
        },
        {
          type: 'note',
          text: 'Sigo siendo igual de dormilona y consentida cuando me tienes entre tus brazos, grandulón.',
          pos: { top: '48%', left: '53%', width: '40%' },
          rotate: -2,
        },
        { type: 'ephemera', variant: 'bow', tone: 'blush', pos: { top: '83%', left: '16%', width: '12%' }, rotate: -6 },
        { type: 'doodle', variant: 'moon', tone: 'sepia', pos: { top: '82%', left: '32%', width: '11%' }, rotate: -8 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 3 (Págs. 5–6) · Infancia de Morphine (02-morphine-infancia)
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'infancia',
      spread: 3,
      folder: '02-morphine-infancia',
      blocks: [
        {
          type: 'photo',
          src: '/photos/02-morphine-infancia/morphi pelitorojo.jpg.jpeg',
          caption: 'El pelito rojo que tanto te gusta',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '9%', left: '8%', width: '36%' },
          rotate: -3,
        },
        {
          type: 'photo',
          src: '/photos/02-morphine-infancia/morphi infante puffy dress.jpg.jpeg',
          caption: 'Always a little princess',
          frame: 'corners',
          ratio: '1 / 1',
          pos: { top: '10%', left: '54%', width: '36%' },
          rotate: 3,
        },
        {
          type: 'photo',
          src: '/photos/02-morphine-infancia/morphi infante sonrisota.jpg.jpeg',
          caption: 'Little me, big dreams',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '52%', left: '8%', width: '36%' },
          rotate: 2,
        },
        {
          type: 'photo',
          src: '/photos/02-morphine-infancia/morphi infante leyendo.jpg.jpeg',
          caption: 'Reading fairy tales before living mine',
          frame: 'deckle',
          ratio: '1 / 1',
          pos: { top: '53%', left: '54%', width: '36%' },
          rotate: -3,
        },
        { type: 'flower', variant: 'wildflower', pos: { top: '83%', left: '44%', width: '11%' }, rotate: -6 },
      ],
    },
    {
      chapter: 'infancia',
      spread: 3,
      folder: '02-morphine-infancia',
      blocks: [
        {
          type: 'photo',
          src: '/photos/02-morphine-infancia/morphi infante viendo flores .jpg.jpeg',
          caption: 'Chasing wildflowers',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '9%', left: '8%', width: '36%' },
          rotate: -3,
        },
        {
          type: 'photo',
          src: '/photos/02-morphine-infancia/morphi nature w a flower.jpg.jpeg',
          caption: 'Guardando flores para ti, sol',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '10%', left: '54%', width: '36%' },
          rotate: 3,
        },
        {
          type: 'photo',
          src: '/photos/02-morphine-infancia/morphi infancia desde atras.jpg.jpeg',
          caption: 'Looking toward our future',
          frame: 'corners',
          ratio: '1 / 1',
          pos: { top: '52%', left: '8%', width: '36%' },
          rotate: 2,
        },
        {
          type: 'note',
          text: 'Every wish I made on dandelion seeds was secretly leading me to you, my darling.',
          pos: { top: '48%', left: '51%', width: '42%' },
          rotate: -2,
        },
        { type: 'doodle', variant: 'stars', tone: 'gold', pos: { top: '79%', left: '55%', width: '10%' }, rotate: -6 },
        { type: 'flower', variant: 'tulip', pos: { top: '77%', left: '72%', width: '14%' }, rotate: 14 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 4 (Págs. 7–8) · Ballet y vida antes de Dalliancé (03 y 04)
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'ballet',
      spread: 4,
      folder: '03-morphine-ballet',
      blocks: [
        { type: 'chapterTitle', text: 'A thousand dances…', pos: { top: '4%', left: '8%', width: '84%' } },
        {
          type: 'photo',
          src: '/photos/03-morphine-ballet/morphi chiqui ballet.jpg.jpeg',
          caption: 'Tiny satin ribbons & a ballerina heart',
          frame: 'gold',
          ratio: '4 / 5',
          pos: { top: '21%', left: '8%', width: '37%' },
          rotate: -3,
        },
        {
          type: 'photo',
          src: '/photos/04-antes-de-dalliance/morphi teen leyendo.jpg.jpeg',
          caption: 'Tardes tranquilas',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '21%', left: '55%', width: '34%' },
          rotate: 3,
        },
        {
          type: 'photo',
          src: '/photos/04-antes-de-dalliance/morphi teen pintando.jpg.jpeg',
          caption: 'Pintando sueños despierta',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '55%', left: '55%', width: '34%' },
          rotate: -3,
        },
        {
          type: 'note',
          text: 'Mil bailes ensayados antes de encontrar a mi compañero para toda la eternidad, mi sol.',
          pos: { top: '61%', left: '8%', width: '42%' },
          rotate: 2,
        },
        { type: 'ephemera', variant: 'bow', tone: 'blush', pos: { top: '86%', left: '57%', width: '12%' }, rotate: -6 },
        { type: 'doodle', variant: 'sun', tone: 'gold', pos: { top: '85%', left: '74%', width: '10%' }, rotate: 8 },
      ],
    },
    {
      chapter: 'ballet',
      spread: 4,
      folder: '04-antes-de-dalliance',
      blocks: [
        {
          type: 'photo',
          src: '/photos/04-antes-de-dalliance/morphi teen golden hour.jpg.jpeg',
          caption: 'Golden hour glow',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '9%', left: '8%', width: '36%' },
          rotate: -3,
        },
        {
          type: 'photo',
          src: '/photos/04-antes-de-dalliance/morphi teen w digicam.jpg.jpeg',
          caption: 'Capturing every moment',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '10%', left: '54%', width: '36%' },
          rotate: 3,
        },
        {
          type: 'photo',
          src: '/photos/04-antes-de-dalliance/morphi teen car.jpg.jpeg',
          caption: 'En camino hacia ti',
          frame: 'corners',
          ratio: '1 / 1',
          pos: { top: '52%', left: '8%', width: '36%' },
          rotate: 2,
        },
        {
          type: 'photo',
          src: '/photos/04-antes-de-dalliance/morphi teen yate.jpg.jpeg',
          caption: 'Sea breeze & daydreams',
          frame: 'deckle',
          ratio: '1 / 1',
          pos: { top: '53%', left: '54%', width: '36%' },
          rotate: -3,
        },
        { type: 'ephemera', variant: 'bow', tone: 'wine', pos: { top: '84%', left: '43%', width: '13%' }, rotate: -4 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 5 (Págs. 9–10) · Cómo se conocieron y su primer mes (05-morphine-dalliance)
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'conocimos',
      spread: 5,
      folder: '05-morphine-dalliance',
      blocks: [
        { type: 'chapterTitle', text: 'And then there was you.', pos: { top: '4%', left: '8%', width: '84%' } },
        {
          type: 'photo',
          src: '/photos/05-morphine-dalliance/dallphine first pic.jpg.jpeg',
          caption: 'Our very first photo',
          frame: 'gold',
          ratio: '4 / 5',
          pos: { top: '21%', left: '8%', width: '38%' },
          rotate: -3,
        },
        {
          type: 'photo',
          src: '/photos/05-morphine-dalliance/dallphine date.jpg.jpeg',
          caption: 'Eyes only for you, handsome',
          frame: 'polaroid',
          ratio: '4 / 5',
          pos: { top: '22%', left: '53%', width: '38%' },
          rotate: 3,
        },
        {
          type: 'note',
          text: 'Bastó una sola mirada tuya, mi sol, para saber que mi mundo entero te pertenecía.',
          pos: { top: '62%', left: '10%', width: '68%' },
          rotate: -1,
        },
        { type: 'flower', variant: 'tulip', pos: { top: '63%', left: '81%', width: '13%' }, rotate: 14 },
        { type: 'ephemera', variant: 'waxSeal', emblem: 'M&D', tone: 'gold', pos: { top: '83%', left: '22%', width: '8.5%' }, rotate: -6 },
        { type: 'doodle', variant: 'sunMoon', tone: 'gold', pos: { top: '82%', left: '44%', width: '11%' }, rotate: 4 },
      ],
    },
    {
      chapter: 'conocimos',
      spread: 5,
      folder: '05-morphine-dalliance',
      blocks: [
        {
          type: 'photo',
          src: '/photos/05-morphine-dalliance/dallphine first month.jpg.jpeg',
          caption: 'Our first month of forever',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '9%', left: '8%', width: '37%' },
          rotate: -3,
        },
        {
          type: 'photo',
          src: '/photos/05-morphine-dalliance/dallphine elevator.jpg.jpeg',
          caption: 'Besos robados en el elevador',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '10%', left: '54%', width: '37%' },
          rotate: 3,
        },
        { type: 'flower', variant: 'tulipBud', pos: { top: '56%', left: '3%', width: '10%' }, rotate: -14 },
        {
          type: 'photo',
          src: '/photos/05-morphine-dalliance/dallphine hug.jpg.jpeg',
          caption: 'En tus brazos siempre me siento a salvo, mi grandote',
          frame: 'corners',
          ratio: '4 / 3',
          pos: { top: '53%', left: '16%', width: '54%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'rose', pos: { top: '56%', left: '74%', width: '16%' }, rotate: 18 },
        { type: 'doodle', variant: 'sun', tone: 'gold', pos: { top: '78%', left: '75%', width: '11%' }, rotate: 10 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 6 (Págs. 11–12) · Besos, pasión y mañanas juntos (05-morphine-dalliance)
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'recuerdos',
      spread: 6,
      folder: '05-morphine-dalliance',
      blocks: [
        { type: 'chapterTitle', text: 'Hopelessly in love with you…', pos: { top: '4%', left: '8%', width: '84%' } },
        {
          type: 'photo',
          src: '/photos/05-morphine-dalliance/dallphine kiss in the rain.jpg.jpeg',
          caption: 'Kissing you in the rain',
          frame: 'corners',
          ratio: '4 / 5',
          pos: { top: '21%', left: '8%', width: '38%' },
          rotate: -3,
        },
        {
          type: 'photo',
          src: '/photos/05-morphine-dalliance/dallphine kiss.jpg.jpeg',
          caption: 'Never enough of your lips',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '21%', left: '55%', width: '34%' },
          rotate: 3,
        },
        {
          type: 'photo',
          src: '/photos/05-morphine-dalliance/dallphine goals.jpg.jpeg',
          caption: 'Us against eternity',
          frame: 'tape',
          ratio: '4 / 3',
          pos: { top: '58%', left: '53%', width: '37%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'tulip', pos: { top: '65%', left: '11%', width: '17%' }, rotate: -12 },
        { type: 'ephemera', variant: 'bow', tone: 'wine', pos: { top: '63%', left: '32%', width: '13%' }, rotate: 8 },
        { type: 'doodle', variant: 'sun', tone: 'wine', pos: { top: '76%', left: '33%', width: '11%' }, rotate: -6 },
      ],
    },
    {
      chapter: 'recuerdos',
      spread: 6,
      folder: '05-morphine-dalliance',
      blocks: [
        { type: 'doodle', variant: 'stars', tone: 'gold', pos: { top: '16%', left: '3%', width: '10%' }, rotate: -8 },
        {
          type: 'photo',
          src: '/photos/05-morphine-dalliance/dallphine in bed.jpeg',
          caption: 'Enredada entre tus brazos, sol',
          frame: 'polaroid',
          ratio: '4 / 3',
          pos: { top: '9%', left: '15%', width: '58%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'tulipBud', pos: { top: '12%', left: '77%', width: '12%' }, rotate: 14 },
        {
          type: 'photo',
          src: '/photos/05-morphine-dalliance/dallphine morning after.jpg.jpeg',
          caption: 'Waking up in your arms',
          frame: 'corners',
          ratio: '4 / 3',
          pos: { top: '51%', left: '8%', width: '44%' },
          rotate: 3,
        },
        {
          type: 'note',
          text: 'Despertar acurrucada contra tu pecho es mi lugar favorito del universo, grandulón. Te amo con locura.',
          pos: { top: '50%', left: '54%', width: '39%' },
          rotate: -3,
        },
        { type: 'ephemera', variant: 'waxSeal', emblem: 'SOL', tone: 'wine', pos: { top: '80%', left: '16%', width: '8.5%' }, rotate: -8 },
        { type: 'doodle', variant: 'sun', tone: 'sepia', pos: { top: '79%', left: '30%', width: '11%' }, rotate: 12 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 7 (Págs. 13–14) · Viajes y miradas de enamorada (06-nuestros-recuerdos)
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'recuerdos',
      spread: 7,
      folder: '06-nuestros-recuerdos',
      blocks: [
        { type: 'chapterTitle', text: 'Through my eyes, my love…', pos: { top: '4%', left: '8%', width: '84%' } },
        {
          type: 'photo',
          src: '/photos/06-nuestros-recuerdos/dall by morphi .jpg.jpeg',
          caption: 'Cuando me miras y me dices rojita',
          frame: 'gold',
          ratio: '1 / 1',
          pos: { top: '21%', left: '8%', width: '35%' },
          rotate: -3,
        },
        {
          type: 'photo',
          src: '/photos/06-nuestros-recuerdos/dall bf material .jpg.jpeg',
          caption: 'Mi grandote hermoso',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '22%', left: '55%', width: '35%' },
          rotate: 3,
        },
        {
          type: 'photo',
          src: '/photos/06-nuestros-recuerdos/dallphine frente a un puente .jpg.jpeg',
          caption: 'Always hand in hand',
          frame: 'corners',
          ratio: '4 / 3',
          pos: { top: '57%', left: '8%', width: '38%' },
          rotate: 2,
        },
        {
          type: 'photo',
          src: '/photos/06-nuestros-recuerdos/viaje japon.png',
          caption: 'Our escape to Japan',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '56%', left: '55%', width: '35%' },
          rotate: -3,
        },
        { type: 'ephemera', variant: 'stamp', label: 'NIPPON', sub: 'KYOTO', motif: 'pagoda', pos: { top: '83%', left: '22%', width: '11%' }, rotate: -5 },
      ],
    },
    {
      chapter: 'recuerdos',
      spread: 7,
      folder: '06-nuestros-recuerdos',
      blocks: [
        {
          type: 'photo',
          src: '/photos/06-nuestros-recuerdos/templo japones.png',
          caption: 'Wishing for eternity',
          frame: 'corners',
          ratio: '1 / 1',
          pos: { top: '8%', left: '8%', width: '34%' },
          rotate: -3,
        },
        {
          type: 'photo',
          src: '/photos/06-nuestros-recuerdos/bali beach.jpg.jpeg',
          caption: 'Atardeceres en Bali contigo, sol',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '8%', left: '54%', width: '34%' },
          rotate: 3,
        },
        {
          type: 'photo',
          src: '/photos/06-nuestros-recuerdos/Bali pool.jpg.jpeg',
          caption: 'Consentida en el paraíso',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '42%', left: '6%', width: '31%' },
          rotate: 2,
        },
        {
          type: 'photo',
          src: '/photos/06-nuestros-recuerdos/bali food.jpg.jpeg',
          caption: 'Sweetest mornings',
          frame: 'deckle',
          ratio: '1 / 1',
          pos: { top: '58%', left: '38%', width: '25%' },
          rotate: -3,
        },
        {
          type: 'photo',
          src: '/photos/06-nuestros-recuerdos/bali signal.jpg.jpeg',
          caption: 'Lost in Bali with you',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '42%', left: '64%', width: '29%' },
          rotate: 3,
        },
        { type: 'flower', variant: 'tulip', pos: { top: '76%', left: '12%', width: '14%' }, rotate: -14 },
        { type: 'doodle', variant: 'sun', tone: 'gold', pos: { top: '77%', left: '68%', width: '11%' }, rotate: 8 },
        { type: 'ephemera', variant: 'stamp', label: 'BALI', sub: 'PARADISE', motif: 'sun', pos: { top: '75%', left: '82%', width: '11%' }, rotate: 6 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 8 (Págs. 15–16) · El regalo del corazón de Morphine
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'corazon',
      spread: 8,
      blocks: [
        { type: 'chapterTitle', text: 'The Gift of My Heart', pos: { top: '4%', left: '8%', width: '84%' } },
        { type: 'flower', variant: 'tulipBud', pos: { top: '34%', left: '4%', width: '11%' }, rotate: -12 },
        { type: 'doodle', variant: 'sparkle', tone: 'gold', pos: { top: '66%', left: '5%', width: '10%' }, rotate: -6 },
        {
          type: 'heartRelic',
          src: '/photos/CORAZÓN/HER HEART.png',
          subtitle: 'COR MEUM · YOURS ALONE',
          caption: 'Safe in your sanctuary, still beating only for you. ♡',
          pos: { top: '18%', left: '18%', width: '64%' },
          rotate: -1,
        },
        { type: 'ephemera', variant: 'waxSeal', emblem: 'COR', tone: 'gold', pos: { top: '24%', left: '85%', width: '9%' }, rotate: 8 },
        { type: 'flower', variant: 'fern', pos: { top: '54%', left: '84%', width: '11%' }, rotate: 14 },
      ],
    },
    {
      chapter: 'corazon',
      spread: 8,
      blocks: [
        {
          type: 'note',
          text: 'Ahora late arcilla mágica en mi pecho, porque mi corazón verdadero vive guardado contigo desde aquel octubre, mi sol.',
          pos: { top: '8%', left: '12%', width: '76%' },
          rotate: 2,
        },
        {
          type: 'envelope',
          label: 'My heart, in writing…',
          seal: 'M',
          pos: { top: '36%', left: '12%', width: '76%' },
          rotate: -2,
          letter: {
            title: 'My Heart Is Yours',
            greeting: 'My sweetest love,',
            body: [
              'I wonder if you ever think about it.',
              "That somewhere, tucked away in a place only you know, there's a little piece of me that once beat beneath my ribs.",
              'My heart. Your heart, now.',
              'I remember giving it to you, knowing there was no one else in this world I would ever trust with something so precious. And I would do it all over again, darling. A thousand times, in a thousand lifetimes.',
              "It's funny, isn't it? I have a different heart beating inside me now, and yet it still seems to know your name.",
              'It still races when you kiss me. It still aches when I miss you. And it still finds its way back to you, no matter how far away you are.',
              'So please, keep that little piece of me safe.',
              'And when you miss me, remember that you have something no one else in this universe ever will.',
              'My heart, in every sense of the word.',
            ],
            closing: 'Siempre tuya, mi sol,',
            signature: 'Tu Morphi',
          },
        },
        { type: 'doodle', variant: 'stars', tone: 'wine', pos: { top: '75%', left: '14%', width: '11%' }, rotate: -8 },
        { type: 'ephemera', variant: 'lace', pos: { top: '76%', left: '30%', width: '34%' }, rotate: 1 },
        { type: 'flower', variant: 'tulip', pos: { top: '73%', left: '68%', width: '18%' }, rotate: -20 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 9 (Págs. 17–18) · Los mellizos (únicamente las dos ecografías)
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'mellizos',
      spread: 9,
      folder: '07-mellizos',
      blocks: [
        { type: 'chapterTitle', text: 'Our tiny new secret…', pos: { top: '4%', left: '8%', width: '84%' } },
        { type: 'ephemera', variant: 'bow', tone: 'blush', pos: { top: '52%', left: '3%', width: '10%' }, rotate: -10 },
        {
          type: 'ultrasound',
          src: '/photos/07-mellizos/eco mellizos.jpg',
          caption: 'Two tiny new heartbeats… we are having twins, my love! ♡',
          header: ['TWIN A & B', '~ 2 MONTHS'],
          pos: { top: '22%', left: '15%', width: '62%' },
          rotate: -2,
        },
        { type: 'doodle', variant: 'stars', tone: 'gold', pos: { top: '24%', left: '80%', width: '11%' }, rotate: -6 },
        { type: 'doodle', variant: 'moon', tone: 'gold', pos: { top: '52%', left: '80%', width: '11%' }, rotate: 10 },
        {
          type: 'note',
          text: 'Apenas llevan dos meses creciendo dentro de mí y ya amo a nuestros pequeñitos casi tanto como a su papá.',
          pos: { top: '70%', left: '12%', width: '76%' },
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
          type: 'ultrasound',
          src: '/photos/07-mellizos/eco 2.jpg',
          ratio: '736 / 992',
          fit: 'contain',
          caption: 'Tan chiquitos todavía, empezando a crecer dentro de mí…',
          header: ['OUR LITTLE FOREVER', 'FIRST ULTRASOUND'],
          pos: { top: '8%', left: '7%', width: '44%' },
          rotate: -2,
        },
        { type: 'ephemera', variant: 'lace', pos: { top: '72%', left: '10%', width: '38%' }, rotate: -2 },
        { type: 'doodle', variant: 'moon', tone: 'sepia', pos: { top: '80%', left: '24%', width: '11%' }, rotate: -8 },
        {
          type: 'note',
          text: 'Tus manos enormes sobre mi vientre, hablándoles bajito a nuestros mellizos… vas a ser el papá más dulce de toda la eternidad, mi grandulón.',
          pos: { top: '10%', left: '53%', width: '41%' },
          rotate: 2,
        },
        { type: 'flower', variant: 'tulip', pos: { top: '66%', left: '62%', width: '16%' }, rotate: -12 },
        { type: 'doodle', variant: 'sparkle', tone: 'gold', pos: { top: '68%', left: '81%', width: '10%' }, rotate: 8 },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 10 (Págs. 19–20) · Nuestro futuro juntos y carta final
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'futuro',
      spread: 10,
      folder: '08-nuestro-futuro',
      blocks: [
        { type: 'chapterTitle', text: 'The best is yet to come.', pos: { top: '5%', left: '8%', width: '84%' } },
        {
          type: 'note',
          text: 'Tantas fotografías que aún nos falta tomar, tantos cumpleaños por celebrar y cuatro manitas pequeñas por sostener, mi sol…',
          pos: { top: '20%', left: '12%', width: '76%' },
          rotate: -2,
        },
        {
          type: 'envelope',
          label: 'One last letter…',
          seal: '♡',
          pos: { top: '46%', left: '14%', width: '72%' },
          rotate: 2,
          letter: {
            title: 'One Last Letter…',
            greeting: 'My darling,',
            body: [
              'Right now, two tiny little hearts are just beginning to grow inside me, and a whole life together is waiting for us.',
              "Sometimes I still can't believe that this is our life. That I get to wake up beside you, steal your kisses, fall asleep in your arms, and call you mine.",
              'And now, someday soon, there will be two little ones who get to call you theirs, too.',
              "I wonder what they'll look like. If they'll have your eyes, or my freckles. If they'll be as stubborn as their mommy, or if they'll learn to wrap you around their tiny fingers the way I have.",
              'I hope they know how loved they were, even before we got to meet them.',
              "I left these pages empty on purpose, because the best part of our story hasn't happened yet. There are so many photographs we haven't taken, so many places we haven't visited, and so many birthdays I still want to celebrate with you.",
              "But if there's one thing I already know, it's that I want you in every chapter.",
              'Thank you for loving me, for choosing me, and for making even the simplest moments feel like something worth remembering.',
              'Happy birthday, my beautiful boy.',
              'I love you more than I could ever fit into these pages.',
            ],
            closing: 'Con todo mi amor,',
            signature: 'Tu rojita. ♡',
          },
        },
        { type: 'flower', variant: 'tulipBud', pos: { top: '80%', left: '14%', width: '10%' }, rotate: -14 },
        { type: 'doodle', variant: 'sunMoon', tone: 'wine', pos: { top: '81%', left: '43%', width: '12%' }, rotate: -4 },
        { type: 'ephemera', variant: 'waxSeal', emblem: 'M&D', tone: 'gold', pos: { top: '81%', left: '74%', width: '8.5%' }, rotate: 8 },
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
          text: 'For our future memories',
          pos: { top: '7%', left: '8%', width: '84%' },
        },
        { type: 'doodle', variant: 'stars', tone: 'gold', pos: { top: '84%', left: '15%', width: '11%' }, rotate: -6 },
        { type: 'flower', variant: 'tulip', pos: { top: '83%', left: '75%', width: '12%' }, rotate: 12 },
      ],
    },
  ],
}
