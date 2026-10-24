/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENIDO DEL ÁLBUM — edita SOLO este archivo
 * ─────────────────────────────────────────────────────────────
 *  · Estructura: 10 dobles páginas (20 páginas interiores).
 *  · Incluye todas las fotografías reales de /public/photos/.
 *  · Los textos de las cartas son marcadores hasta que proporciones
 *    los textos definitivos.
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
        { type: 'chapterTitle', text: 'Happy Birthday, my love. ♡', pos: { top: '8%', left: '8%', width: '84%' } },
        {
          type: 'note',
          text: 'A little something from me to you, my handsome birthday boy… hecho con todo mi amor para mi Eterno favorito. ♡',
          pos: { top: '34%', left: '13%', width: '74%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'rose', pos: { top: '62%', left: '37%', width: '26%' }, rotate: 12 },
      ],
    },
    {
      chapter: 'regalo',
      spread: 1,
      title: 'Open me, handsome…',
      blocks: [
        {
          type: 'note',
          text: 'Open me, handsome… I made this whole album just for you. ♡',
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
          caption: 'A tiny blossom ♡',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '26%', left: '8%', width: '40%' },
          rotate: -5,
        },
        {
          type: 'photo',
          src: '/photos/01-morphine-bebe/morphi chiqui sonrisa.jpg.jpeg',
          caption: 'Already smiling for you',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '27%', left: '53%', width: '39%' },
          rotate: 4,
        },
        {
          type: 'photo',
          src: '/photos/01-morphine-bebe/morphi  bebe dormida.jpg.jpeg',
          caption: "Yes, mi amor, I've always been this adorable ♡",
          frame: 'corners',
          ratio: '4 / 3',
          pos: { top: '61%', left: '16%', width: '48%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'rose', pos: { top: '64%', left: '70%', width: '20%' }, rotate: 16 },
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
          caption: 'My very first melodies',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '8%', left: '8%', width: '41%' },
          rotate: -4,
        },
        {
          type: 'photo',
          src: '/photos/01-morphine-bebe/morphi bebe con gato.jpg.jpeg',
          caption: 'Softest little cuddles',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '10%', left: '53%', width: '39%' },
          rotate: 5,
        },
        {
          type: 'photo',
          src: '/photos/01-morphine-bebe/morphi bebe gordita mimida.jpg.jpeg',
          caption: 'Gordita y mimida ♡',
          frame: 'deckle',
          ratio: '4 / 3',
          pos: { top: '47%', left: '9%', width: '44%' },
          rotate: 3,
        },
        {
          type: 'note',
          text: 'Still the sleepiest, most spoiled little thing in your arms, mi vida. ♡',
          pos: { top: '53%', left: '56%', width: '37%' },
          rotate: -3,
        },
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
          caption: 'Fire in my hair',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '8%', left: '7%', width: '41%' },
          rotate: -4,
        },
        {
          type: 'photo',
          src: '/photos/02-morphine-infancia/morphi infante puffy dress.jpg.jpeg',
          caption: 'Always a little princess ♡',
          frame: 'corners',
          ratio: '4 / 5',
          pos: { top: '8%', left: '53%', width: '40%' },
          rotate: 4,
        },
        {
          type: 'photo',
          src: '/photos/02-morphine-infancia/morphi infante sonrisota.jpg.jpeg',
          caption: 'Little me, big dreams',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '49%', left: '8%', width: '40%' },
          rotate: 3,
        },
        {
          type: 'photo',
          src: '/photos/02-morphine-infancia/morphi infante leyendo.jpg.jpeg',
          caption: 'Reading fairy tales… before living mine with you',
          frame: 'deckle',
          ratio: '1 / 1',
          pos: { top: '51%', left: '52%', width: '40%' },
          rotate: -3,
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
          src: '/photos/02-morphine-infancia/morphi infante viendo flores .jpg.jpeg',
          caption: 'Chasing wildflowers',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '8%', left: '8%', width: '41%' },
          rotate: -3,
        },
        {
          type: 'photo',
          src: '/photos/02-morphine-infancia/morphi nature w a flower.jpg.jpeg',
          caption: 'Saving the prettiest petals for you ♡',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '10%', left: '53%', width: '40%' },
          rotate: 4,
        },
        {
          type: 'photo',
          src: '/photos/02-morphine-infancia/morphi infancia desde atras.jpg.jpeg',
          caption: 'Looking toward our future',
          frame: 'corners',
          ratio: '4 / 5',
          pos: { top: '48%', left: '9%', width: '40%' },
          rotate: 2,
        },
        {
          type: 'note',
          text: 'Every wish I made on dandelion seeds was secretly leading me to you, my darling. ♡',
          pos: { top: '53%', left: '53%', width: '40%' },
          rotate: -3,
        },
        { type: 'flower', variant: 'lavender', pos: { top: '76%', left: '74%', width: '16%' }, rotate: -14 },
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
          pos: { top: '26%', left: '8%', width: '43%' },
          rotate: -3,
        },
        {
          type: 'photo',
          src: '/photos/04-antes-de-dalliance/morphi teen leyendo.jpg.jpeg',
          caption: 'Quiet afternoons',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '24%', left: '55%', width: '37%' },
          rotate: 4,
        },
        {
          type: 'photo',
          src: '/photos/04-antes-de-dalliance/morphi teen pintando.jpg.jpeg',
          caption: 'Painting daydreams',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '58%', left: '54%', width: '38%' },
          rotate: -3,
        },
        {
          type: 'note',
          text: 'A thousand dances before I found my forever partner. ♡',
          pos: { top: '72%', left: '8%', width: '42%' },
          rotate: 2,
        },
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
          pos: { top: '8%', left: '8%', width: '40%' },
          rotate: -4,
        },
        {
          type: 'photo',
          src: '/photos/04-antes-de-dalliance/morphi teen w digicam.jpg.jpeg',
          caption: 'Capturing every little moment',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '9%', left: '53%', width: '39%' },
          rotate: 4,
        },
        {
          type: 'photo',
          src: '/photos/04-antes-de-dalliance/morphi teen car.jpg.jpeg',
          caption: 'On my way to you',
          frame: 'corners',
          ratio: '1 / 1',
          pos: { top: '48%', left: '9%', width: '39%' },
          rotate: 3,
        },
        {
          type: 'photo',
          src: '/photos/04-antes-de-dalliance/morphi teen yate.jpg.jpeg',
          caption: 'Sea breeze & daydreams of you ♡',
          frame: 'deckle',
          ratio: '1 / 1',
          pos: { top: '49%', left: '52%', width: '40%' },
          rotate: -3,
        },
        { type: 'flower', variant: 'fern', pos: { top: '42%', left: '44%', width: '13%' }, rotate: -18 },
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
          caption: 'Our very first photo together ♡',
          frame: 'gold',
          ratio: '4 / 5',
          pos: { top: '26%', left: '8%', width: '43%' },
          rotate: -3,
        },
        {
          type: 'photo',
          src: '/photos/05-morphine-dalliance/dallphine date.jpg.jpeg',
          caption: 'Eyes only for you, handsome',
          frame: 'polaroid',
          ratio: '4 / 5',
          pos: { top: '27%', left: '54%', width: '39%' },
          rotate: 4,
        },
        {
          type: 'note',
          text: 'One look at you, mi amor, and my whole world belonged to you forever. ♡',
          pos: { top: '72%', left: '14%', width: '72%' },
          rotate: -1,
        },
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
          pos: { top: '8%', left: '8%', width: '41%' },
          rotate: -4,
        },
        {
          type: 'photo',
          src: '/photos/05-morphine-dalliance/dallphine elevator.jpg.jpeg',
          caption: 'Stolen kisses in the elevator ♡',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '10%', left: '53%', width: '39%' },
          rotate: 4,
        },
        {
          type: 'photo',
          src: '/photos/05-morphine-dalliance/dallphine hug.jpg.jpeg',
          caption: 'Held in your arms is my safest place in the universe',
          frame: 'corners',
          ratio: '4 / 3',
          pos: { top: '50%', left: '16%', width: '64%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'rose', pos: { top: '62%', left: '78%', width: '16%' }, rotate: 18 },
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
          caption: 'Kissing you in the rain ♡',
          frame: 'corners',
          ratio: '4 / 5',
          pos: { top: '26%', left: '8%', width: '43%' },
          rotate: -3,
        },
        {
          type: 'photo',
          src: '/photos/05-morphine-dalliance/dallphine kiss.jpg.jpeg',
          caption: 'Never enough of your lips',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '25%', left: '54%', width: '39%' },
          rotate: 4,
        },
        {
          type: 'photo',
          src: '/photos/05-morphine-dalliance/dallphine goals.jpg.jpeg',
          caption: 'Us against eternity',
          frame: 'tape',
          ratio: '4 / 3',
          pos: { top: '63%', left: '51%', width: '42%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'lavender', pos: { top: '72%', left: '14%', width: '18%' }, rotate: -14 },
      ],
    },
    {
      chapter: 'recuerdos',
      spread: 6,
      folder: '05-morphine-dalliance',
      blocks: [
        {
          type: 'photo',
          src: '/photos/05-morphine-dalliance/dallphine in bed.jpeg',
          caption: 'Tangled up in you, mi vida',
          frame: 'polaroid',
          ratio: '4 / 3',
          pos: { top: '8%', left: '12%', width: '74%' },
          rotate: -2,
        },
        {
          type: 'photo',
          src: '/photos/05-morphine-dalliance/dallphine morning after.jpg.jpeg',
          caption: 'Waking up in your arms is my favorite part of every day ♡',
          frame: 'corners',
          ratio: '4 / 3',
          pos: { top: '44%', left: '10%', width: '52%' },
          rotate: 3,
        },
        {
          type: 'note',
          text: 'Every morning next to you feels like heaven, handsome. Te amo con locura. ♡',
          pos: { top: '50%', left: '64%', width: '30%' },
          rotate: -4,
        },
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
          caption: 'How you look when I say your name ♡',
          frame: 'gold',
          ratio: '1 / 1',
          pos: { top: '25%', left: '8%', width: '40%' },
          rotate: -4,
        },
        {
          type: 'photo',
          src: '/photos/06-nuestros-recuerdos/dall bf material .jpg.jpeg',
          caption: 'The most handsome man in existence',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '26%', left: '53%', width: '39%' },
          rotate: 4,
        },
        {
          type: 'photo',
          src: '/photos/06-nuestros-recuerdos/dallphine frente a un puente .jpg.jpeg',
          caption: 'Every bridge, every city, always hand in hand',
          frame: 'corners',
          ratio: '4 / 3',
          pos: { top: '61%', left: '10%', width: '44%' },
          rotate: 2,
        },
        {
          type: 'photo',
          src: '/photos/06-nuestros-recuerdos/viaje japon.png',
          caption: 'Our escape to Japan ♡',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '59%', left: '57%', width: '35%' },
          rotate: -3,
        },
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
          caption: 'Wishing for eternity together',
          frame: 'corners',
          ratio: '1 / 1',
          pos: { top: '7%', left: '7%', width: '39%' },
          rotate: -3,
        },
        {
          type: 'photo',
          src: '/photos/06-nuestros-recuerdos/bali beach.jpg.jpeg',
          caption: 'Bali sunsets with you',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '8%', left: '52%', width: '40%' },
          rotate: 4,
        },
        {
          type: 'photo',
          src: '/photos/06-nuestros-recuerdos/Bali pool.jpg.jpeg',
          caption: 'Spoiled in paradise ♡',
          frame: 'tape',
          ratio: '1 / 1',
          pos: { top: '46%', left: '6%', width: '37%' },
          rotate: 3,
        },
        {
          type: 'photo',
          src: '/photos/06-nuestros-recuerdos/bali food.jpg.jpeg',
          caption: 'Sweetest mornings',
          frame: 'deckle',
          ratio: '1 / 1',
          pos: { top: '45%', left: '47%', width: '22%' },
          rotate: -4,
        },
        {
          type: 'photo',
          src: '/photos/06-nuestros-recuerdos/bali signal.jpg.jpeg',
          caption: 'Lost in Bali with my favorite person',
          frame: 'polaroid',
          ratio: '1 / 1',
          pos: { top: '53%', left: '60%', width: '34%' },
          rotate: 3,
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  DOBLE PÁGINA 8 (Págs. 15–16) · El regalo del corazón de Morphine
    // ══════════════════════════════════════════════════════════
    {
      chapter: 'corazon',
      spread: 8,
      blocks: [
        { type: 'chapterTitle', text: 'The Gift of My Heart', pos: { top: '5%', left: '8%', width: '84%' } },
        {
          type: 'heartRelic',
          subtitle: 'COR MEUM · YOURS ALONE',
          caption: 'Safe in your sanctuary, still beating only for you. ♡',
          pos: { top: '26%', left: '17%', width: '66%' },
          rotate: -1,
        },
      ],
    },
    {
      chapter: 'corazon',
      spread: 8,
      blocks: [
        {
          type: 'note',
          text: 'Clay beats in my chest now, mi amor, because my real heart has belonged to you since that October. ♡',
          pos: { top: '10%', left: '12%', width: '76%' },
          rotate: 2,
        },
        {
          type: 'envelope',
          label: 'The secret of my heart…',
          seal: 'M',
          pos: { top: '36%', left: '12%', width: '76%' },
          rotate: -2,
          letter: {
            title: 'The Gift of My Heart',
            greeting: '[Saludo provisional]',
            body: [
              '[Espacio reservado para el texto definitivo de la carta sobre el corazón de Morphine.]',
            ],
            signature: 'Yours in body, soul, and heartbeat, Morphine ♡',
          },
        },
        { type: 'flower', variant: 'rose', pos: { top: '74%', left: '68%', width: '20%' }, rotate: -24 },
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
        { type: 'chapterTitle', text: 'Our tiny new secret…', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'ultrasound',
          src: '/photos/07-mellizos/eco mellizos.jpg',
          caption: 'Two tiny new heartbeats… we are having twins, mi amor! ♡',
          header: ['TWIN A & B', '~ 2 MONTHS'],
          pos: { top: '29%', left: '14%', width: '68%' },
          rotate: -3,
        },
        {
          type: 'note',
          text: 'Just two months along, and I already love our little miracles almost as much as I love their daddy. ♡',
          pos: { top: '72%', left: '12%', width: '76%' },
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
          caption: 'Still so tiny, just beginning to grow inside me… made of our love. ♡',
          header: ['OUR LITTLE FOREVER', 'FIRST ULTRASOUND'],
          pos: { top: '12%', left: '16%', width: '68%' },
          rotate: 3,
        },
        {
          type: 'note',
          text: 'Your hands on my belly, whispering to our two tiny beans… you are already the sweetest father in eternity. ♡',
          pos: { top: '63%', left: '14%', width: '72%' },
          rotate: -2,
        },
        { type: 'flower', variant: 'lavender', pos: { top: '74%', left: '72%', width: '18%' }, rotate: -15 },
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
        { type: 'chapterTitle', text: 'The best is yet to come.', pos: { top: '6%', left: '8%', width: '84%' } },
        {
          type: 'note',
          text: "So many pictures we haven't taken yet, so many birthdays and four tiny hands to hold… ♡",
          pos: { top: '29%', left: '14%', width: '72%' },
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
              '[Espacio reservado para el texto definitivo de la última carta de cumpleaños de Morphine para Dalliancé.]',
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
