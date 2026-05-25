import type { AppData, Card } from './types';

const DummiesBook: Record<string, Card[]> = {
  'Basic Grammar': [
    {
      answer: 'I speak',
      question: 'yo hablo',
      phrases: [
        { answer: 'I speak Spanish', question: 'Yo hablo español' },
        { answer: 'I speak every day', question: 'Yo hablo cada día' },
        { answer: 'I speak with my teacher', question: 'Yo hablo con mi profesor' },
      ],
    },
    {
      answer: 'you (informal, singular) speak',
      question: 'tú hablas',
      phrases: [
        { answer: 'you speak well', question: 'tú hablas bien' },
        { answer: 'do you speak English?', question: '¿tú hablas inglés?' },
        { answer: 'you always speak too fast', question: 'tú siempre hablas demasiado rápido' },
      ],
    },
    {
      answer: 'you (formal, singular) speak',
      question: 'Usted habla',
      phrases: [
        { answer: 'you speak clearly', question: 'Usted habla claramente' },
        { answer: 'do you speak Portuguese?', question: '¿Usted habla portugués?' },
        { answer: 'you speak with an accent', question: 'Usted habla con acento' },
      ],
    },
    {
      answer: 'he/she speaks',
      question: 'él/ella habla',
      phrases: [
        { answer: 'he speaks three languages', question: 'él habla tres idiomas' },
        { answer: 'she speaks softly', question: 'ella habla suavemente' },
        { answer: 'he speaks too much', question: 'él habla demasiado' },
      ],
    },
    {
      answer: 'we speak',
      question: 'nosotros/nosotras hablamos',
      phrases: [
        { answer: 'we speak Spanish in class', question: 'nosotros hablamos español en clase' },
        { answer: 'we speak together every week', question: 'nosotros hablamos juntos cada semana' },
        { answer: 'we speak about many topics', question: 'nosotros hablamos de muchos temas' },
      ],
    },
    {
      answer: 'you/they (formal, plural), speak',
      question: 'Ustedes hablan',
      phrases: [
        { answer: 'you all speak fluently', question: 'Ustedes hablan con fluidez' },
        { answer: 'they speak the same language', question: 'Ustedes hablan el mismo idioma' },
        { answer: 'you speak very well', question: 'Ustedes hablan muy bien' },
      ],
    },
    {
      answer: 'they (informal) speak',
      question: 'ellos/ellas hablan',
      phrases: [
        { answer: 'they speak loudly', question: 'ellos hablan en voz alta' },
        { answer: 'they speak about their families', question: 'ellos hablan de sus familias' },
        { answer: 'they always speak in Spanish', question: 'ellos siempre hablan en español' },
      ],
    },
  ],
  'Easing Into Common Expressions': [
    {
      answer: 'Hello (informal)',
      question: 'Hola',
      phrases: [
        { answer: 'Hello, how are you?', question: 'Hola, ¿cómo estás?' },
        { answer: 'Hello, my friend', question: 'Hola, mi amigo' },
      ],
    },
    {
      answer: 'How are you?',
      question: '¿Cómo estás?',
      phrases: [
        { answer: 'How are you today?', question: '¿Cómo estás hoy?' },
        { answer: 'How are you feeling?', question: '¿Cómo te sientes?' },
      ],
    },
    {
      answer: 'What is your name?',
      question: '¿Cómo te llamas?',
      phrases: [
        { answer: 'What is your full name?', question: '¿Cuál es tu nombre completo?' },
        { answer: 'My name is María', question: 'Me llamo María' },
      ],
    },
    {
      answer: 'Where are you from?',
      question: '¿De dónde eres?',
      phrases: [
        { answer: 'I am from Mexico', question: 'Soy de México' },
        { answer: 'Are you from here?', question: '¿Eres de aquí?' },
      ],
    },
    {
      answer: 'Nice to meet you',
      question: 'Mucho gusto',
      phrases: [
        { answer: 'Nice to meet you too', question: 'Igualmente, mucho gusto' },
        { answer: 'The pleasure is mine', question: 'El placer es mío' },
      ],
    },
    {
      answer: 'Thank you',
      question: 'Gracias',
      phrases: [
        { answer: 'Thank you very much', question: 'Muchas gracias' },
        { answer: 'Thank you for your help', question: 'Gracias por tu ayuda' },
      ],
    },
    {
      answer: "You're welcome",
      question: 'De nada',
      phrases: [
        { answer: "It's nothing, no problem", question: 'No hay problema' },
        { answer: "You're always welcome", question: 'Siempre eres bienvenido' },
      ],
    },
    {
      answer: `Hello, what's happening?`,
      question: 'Hola, ¿qué pasa?',
      phrases: [
        { answer: "What's up with you?", question: '¿Qué tal contigo?' },
        { answer: "What's going on?", question: '¿Qué está pasando?' },
      ],
    },
    {
      answer: `Good-bye`,
      question: 'Adiós',
      phrases: [
        { answer: 'See you later', question: 'Hasta luego' },
        { answer: 'Goodbye, my friends', question: 'Adiós, mis amigos' },
      ],
    },
    {
      answer: `Please`,
      question: 'Por favor',
      phrases: [
        { answer: 'Please sit down', question: 'Por favor, siéntate' },
        { answer: 'Can you help me, please?', question: '¿Puedes ayudarme, por favor?' },
      ],
    },
    {
      answer: `Do you speak English?`,
      question: '¿Habla usted inglés?',
      phrases: [
        { answer: 'Do you speak French?', question: '¿Habla usted francés?' },
        { answer: 'Yes, I speak English', question: 'Sí, hablo inglés' },
      ],
    },
    {
      answer: `I don't speak much Spanish`,
      question: 'No hablo mucho español',
      phrases: [
        { answer: 'I am learning Spanish', question: 'Estoy aprendiendo español' },
        { answer: 'I speak a little Spanish', question: 'Hablo un poco de español' },
      ],
    },
    {
      answer: `I understand`,
      question: 'Entiendo/Claro',
      phrases: [
        { answer: 'I understand you', question: 'Te entiendo' },
        { answer: 'Now I understand', question: 'Ahora entiendo' },
      ],
    },
    {
      answer: `Great! / Superb! / Keep going!`,
      question: 'Genial. Sigue así.',
      phrases: [
        { answer: 'Excellent work!', question: '¡Excelente trabajo!' },
        { answer: 'Keep practicing!', question: '¡Sigue practicando!' },
      ],
    },
    {
      answer: `Really?`,
      question: '¿En serio? / ¿De verdas?',
      phrases: [
        { answer: 'Really? Are you serious?', question: '¿En serio? ¿Estás en broma?' },
        { answer: 'Is that true?', question: '¿Es eso verdad?' },
      ],
    },
    {
      answer: `You don't say!`,
      question: '¡No me digas!',
      phrases: [
        { answer: 'I had no idea!', question: '¡No lo sabía!' },
        { answer: 'That is surprising!', question: '¡Eso es sorprendente!' },
      ],
    },
  ],
  'Expressing Numbers, Time, and Dates': [
    {
      answer: 'What day?',
      question: '¿Qué día?',
      phrases: [
        { answer: 'What day is it?', question: '¿Qué día es hoy?' },
        { answer: 'What day were you born?', question: '¿Qué día naciste?' },
      ],
    },
    {
      answer: 'What time?',
      question: '¿Qué hora es?',
      phrases: [
        { answer: 'What time is it now?', question: '¿Qué hora es ahora?' },
        { answer: 'Do you know what time it is?', question: '¿Sabes qué hora es?' },
      ],
    },
    {
      answer: 'today',
      question: 'hoy',
      phrases: [
        { answer: 'Today is a beautiful day', question: 'Hoy es un día hermoso' },
        { answer: 'What do you want to do today?', question: '¿Qué quieres hacer hoy?' },
      ],
    },
    {
      answer: 'tomorrow',
      question: 'mañana',
      phrases: [
        { answer: 'Tomorrow is Friday', question: 'Mañana es viernes' },
        { answer: 'See you tomorrow', question: 'Hasta mañana' },
      ],
    },
    {
      answer: `Monday`,
      question: 'lunes',
      phrases: [
        { answer: 'Monday is my favorite day', question: 'El lunes es mi día favorito' },
        { answer: 'The class is on Monday', question: 'La clase es el lunes' },
      ],
    },
    {
      answer: `Tuesday`,
      question: 'martes',
      phrases: [
        { answer: 'Tuesday comes after Monday', question: 'El martes viene después del lunes' },
        { answer: 'I work on Tuesdays', question: 'Trabajo los martes' },
      ],
    },
    {
      answer: `Wednesday`,
      question: 'miércoles',
      phrases: [
        { answer: 'On Wednesday we have a meeting', question: 'El miércoles tenemos una reunión' },
        { answer: 'Wednesday is in the middle of the week', question: 'El miércoles es a mitad de semana' },
      ],
    },
    {
      answer: `Thursday`,
      question: 'jueves',
      phrases: [
        { answer: 'Thursday is almost the weekend', question: 'El jueves es casi el fin de semana' },
        { answer: 'I see my friends on Thursday', question: 'Veo a mis amigos el jueves' },
      ],
    },
    {
      answer: `Friday`,
      question: 'viernes',
      phrases: [
        { answer: 'Friday is finally here', question: 'El viernes finalmente llegó' },
        { answer: 'I love Fridays', question: 'Amo los viernes' },
      ],
    },
    {
      answer: `Saturday`,
      question: 'sábado',
      phrases: [
        { answer: 'On Saturday I rest', question: 'El sábado descanso' },
        { answer: 'Saturday is the perfect day for the beach', question: 'El sábado es perfecto para la playa' },
      ],
    },
    {
      answer: `Sunday`,
      question: 'domingo',
      phrases: [
        { answer: 'On Sunday we go to church', question: 'El domingo vamos a la iglesia' },
        { answer: 'I spend Sunday with my family', question: 'Paso el domingo con mi familia' },
      ],
    },
    {
      answer: `one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve`,
      question: 'uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce',
      phrases: [
        { answer: 'Can you count to twelve?', question: '¿Puedes contar hasta doce?' },
        { answer: 'There are twelve months in a year', question: 'Hay doce meses en un año' },
      ],
    },
    {
      answer: `one`,
      question: 'uno',
      phrases: [
        { answer: 'I have one sister', question: 'Tengo una hermana' },
        { answer: 'There is one cat', question: 'Hay un gato' },
      ],
    },
    {
      answer: `two`,
      question: 'dos',
      phrases: [
        { answer: 'I have two brothers', question: 'Tengo dos hermanos' },
        { answer: 'There are two cars', question: 'Hay dos coches' },
      ],
    },
    {
      answer: `three`,
      question: 'tres',
      phrases: [
        { answer: 'Three is my lucky number', question: 'Tres es mi número de la suerte' },
        { answer: 'I see three birds', question: 'Veo tres pájaros' },
      ],
    },
    {
      answer: `four`,
      question: 'cuatro',
      phrases: [
        { answer: 'Four is a good number', question: 'Cuatro es un buen número' },
        { answer: 'The table has four legs', question: 'La mesa tiene cuatro patas' },
      ],
    },
    {
      answer: `five`,
      question: 'cinco',
      phrases: [
        { answer: 'I have five pens', question: 'Tengo cinco bolígrafos' },
        { answer: 'Five times three is fifteen', question: 'Cinco por tres es quince' },
      ],
    },
    {
      answer: `six`,
      question: 'seis',
      phrases: [
        { answer: 'There are six apples', question: 'Hay seis manzanas' },
        { answer: 'I have six friends here', question: 'Tengo seis amigos aquí' },
      ],
    },
    {
      answer: `seven`,
      question: 'siete',
      phrases: [
        { answer: 'Seven days in a week', question: 'Siete días en una semana' },
        { answer: 'There are seven continents', question: 'Hay siete continentes' },
      ],
    },
    {
      answer: `eight`,
      question: 'ocho',
      phrases: [
        { answer: 'Eight is a lucky number', question: 'Ocho es un número afortunado' },
        { answer: 'There are eight students in class', question: 'Hay ocho estudiantes en clase' },
      ],
    },
    {
      answer: `nine`,
      question: 'nueve',
      phrases: [
        { answer: 'I was nine years old', question: 'Tenía nueve años' },
        { answer: 'Nine is almost ten', question: 'Nueve es casi diez' },
      ],
    },
    {
      answer: `ten`,
      question: 'diez',
      phrases: [
        { answer: 'I have ten fingers', question: 'Tengo diez dedos' },
        { answer: 'I grade from ten out of ten', question: 'Le doy un diez de diez' },
      ],
    },
    {
      answer: `eleven`,
      question: 'once',
      phrases: [
        { answer: 'The clock says eleven', question: 'El reloj marca las once' },
        { answer: 'At eleven we have a meeting', question: 'A las once tenemos una reunión' },
      ],
    },
    {
      answer: `twelve`,
      question: 'doce',
      phrases: [
        { answer: 'There are twelve hours', question: 'Hay doce horas' },
        { answer: 'At twelve it is noon', question: 'A las doce es mediodía' },
      ],
    },
    {
      answer: `It's 1 o'clock`,
      question: 'Es la una',
      phrases: [{ answer: `The meeting starts at 1 o'clock`, question: 'La reunión empieza a la una' }],
    },
    {
      answer: `It's 2 o'clock`,
      question: 'Son las dos',
      phrases: [{ answer: `I have lunch at 2 o'clock`, question: 'Como a las dos' }],
    },
    {
      answer: `It's 3 o'clock`,
      question: 'Son las tres',
      phrases: [{ answer: `School ends at 3 o'clock`, question: 'La escuela termina a las tres' }],
    },
    {
      answer: `It's 4 o'clock`,
      question: 'Son las cuatro',
      phrases: [{ answer: `I have a snack at 4 o'clock`, question: 'Meriendo a las cuatro' }],
    },
    {
      answer: `It's 5 o'clock`,
      question: 'Son las cinco',
      phrases: [{ answer: `I leave work at 5 o'clock`, question: 'Salgo del trabajo a las cinco' }],
    },
    {
      answer: `It's 6 o'clock`,
      question: 'Son las seis',
      phrases: [{ answer: `I cook dinner at 6 o'clock`, question: 'Cocino la cena a las seis' }],
    },
    {
      answer: `It's 7 o'clock`,
      question: 'Son las siete',
      phrases: [{ answer: `I wake up at 7 o'clock`, question: 'Me despierto a las siete' }],
    },
    {
      answer: `It's 8 o'clock`,
      question: 'Son las ocho',
      phrases: [{ answer: `I eat breakfast at 8 o'clock`, question: 'Desayuno a las ocho' }],
    },
    {
      answer: `It's 9 o'clock`,
      question: 'Son las nueve',
      phrases: [{ answer: `Work begins at 9 o'clock`, question: 'El trabajo empieza a las nueve' }],
    },
    {
      answer: `It's 10 o'clock`,
      question: 'Son las diez',
      phrases: [{ answer: `The show starts at 10 o'clock`, question: 'El espectáculo comienza a las diez' }],
    },
    {
      answer: `It's 11 o'clock`,
      question: 'Son las once',
      phrases: [{ answer: `I go to bed at 11 o'clock`, question: 'Me acuesto a las once' }],
    },
    {
      answer: `It's 12 o'clock`,
      question: 'Son las doce',
      phrases: [{ answer: `We eat lunch at 12 o'clock`, question: 'Almorzamos a las doce' }],
    },
    {
      answer: `It's noon`,
      question: 'Es mediodía',
      phrases: [{ answer: `At noon I take a break`, question: 'Al mediodía tomo un descanso' }],
    },
    {
      answer: `It's midnight`,
      question: 'Es medianoche',
      phrases: [{ answer: `At midnight the city is quiet`, question: 'A medianoche la ciudad está tranquila' }],
    },
  ],
  'Speaking Spanish around the House': [
    {
      answer: `the refrigerator`,
      question: 'la nevera / el refrigerador',
      phrases: [
        { answer: 'The milk is in the refrigerator', question: 'La leche está en la nevera' },
        { answer: 'Open the refrigerator', question: 'Abre el refrigerador' },
      ],
    },
    {
      answer: `the stove`,
      question: 'la estufa',
      phrases: [
        { answer: 'The stove is hot', question: 'La estufa está caliente' },
        { answer: 'Be careful with the stove', question: 'Ten cuidado con la estufa' },
      ],
    },
    {
      answer: `the sink`,
      question: 'el fregadero',
      phrases: [
        { answer: 'Wash your hands at the sink', question: 'Lávate las manos en el fregadero' },
        { answer: 'The dishes are in the sink', question: 'Los platos están en el fregadero' },
      ],
    },
    {
      answer: `the bed`,
      question: 'la cama',
      phrases: [
        { answer: 'I sleep in the bed', question: 'Duermo en la cama' },
        { answer: 'Make your bed in the morning', question: 'Haz la cama por la mañana' },
      ],
    },
    {
      answer: `the sofa`,
      question: 'el sofá',
      phrases: [
        {
          answer: 'We sit on the sofa to watch television',
          question: 'Nos sentamos en el sofá para ver la televisión',
        },
        { answer: 'The sofa is very comfortable', question: 'El sofá es muy cómodo' },
      ],
    },
    {
      answer: `the table`,
      question: 'la mesa',
      phrases: [
        { answer: 'The food is on the table', question: 'La comida está en la mesa' },
        { answer: 'We eat dinner at the table', question: 'Cenamos en la mesa' },
      ],
    },
    {
      answer: `the chair`,
      question: 'la silla',
      phrases: [
        { answer: 'Please sit in the chair', question: 'Por favor, siéntate en la silla' },
        { answer: 'The chair is next to the table', question: 'La silla está al lado de la mesa' },
      ],
    },
    {
      answer: `the television`,
      question: 'la televisión',
      phrases: [
        { answer: 'I watch television in the evening', question: 'Veo la televisión por la noche' },
        { answer: 'Turn off the television', question: 'Apaga la televisión' },
      ],
    },
    {
      answer: `the lamp`,
      question: 'la lámpara',
      phrases: [
        { answer: 'Turn on the lamp', question: 'Enciende la lámpara' },
        { answer: 'The lamp gives good light', question: 'La lámpara da buena luz' },
      ],
    },
    {
      answer: `the microwave`,
      question: 'el microondas',
      phrases: [
        { answer: 'Heat the food in the microwave', question: 'Calienta la comida en el microondas' },
        { answer: 'The microwave is very fast', question: 'El microondas es muy rápido' },
      ],
    },
    {
      answer: `the remote control`,
      question: 'el mando a distancia',
      phrases: [
        { answer: 'Where is the remote control?', question: '¿Dónde está el mando a distancia?' },
        { answer: 'Change the channel with the remote control', question: 'Cambia de canal con el mando a distancia' },
      ],
    },
    {
      answer: 'Where is the bathroom?',
      question: '¿Dónde está el baño?',
      phrases: [{ answer: 'The bathroom is down the hall', question: 'El baño está al final del pasillo' }],
    },
    {
      answer: 'Where is the kitchen?',
      question: '¿Dónde está la cocina?',
      phrases: [{ answer: 'The kitchen is on the left', question: 'La cocina está a la izquierda' }],
    },
    {
      answer: 'Where is the bedroom?',
      question: '¿Dónde está el dormitorio?',
      phrases: [{ answer: 'The bedroom is upstairs', question: 'El dormitorio está arriba' }],
    },
    {
      answer: 'Where is the living room?',
      question: '¿Dónde está la sala?',
      phrases: [{ answer: 'The living room is next to the kitchen', question: 'La sala está al lado de la cocina' }],
    },
    {
      answer: 'Where is the dining room?',
      question: '¿Dónde está el comedor?',
      phrases: [{ answer: 'The dining room is on the right', question: 'El comedor está a la derecha' }],
    },
    {
      answer: 'Where is the garage?',
      question: '¿Dónde está el garaje?',
      phrases: [{ answer: 'The garage is behind the house', question: 'El garaje está detrás de la casa' }],
    },
    {
      answer: 'Where is the garden?',
      question: '¿Dónde está el jardín?',
      phrases: [{ answer: 'The garden is in front of the house', question: 'El jardín está frente a la casa' }],
    },
  ],
  'Putting Spanish into Action - Making small talk': [
    {
      answer: `What's your name?`,
      question: '¿Cómo te llamas?',
      phrases: [
        { answer: 'My name is Carlos', question: 'Me llamo Carlos' },
        { answer: 'What is your full name?', question: '¿Cuál es tu nombre completo?' },
      ],
    },
    {
      answer: `Where do you live?`,
      question: '¿Dónde vives?',
      phrases: [
        { answer: 'I live in Madrid', question: 'Vivo en Madrid' },
        { answer: 'I live in a small town', question: 'Vivo en un pueblo pequeño' },
        { answer: 'I live in America', question: 'Vivo en América' },
        { answer: 'Do you live here?', question: '¿Vives aquí?' },
      ],
    },
    {
      answer: `What do you do for work?`,
      question: '¿A qué te dedicas?',
      phrases: [
        { answer: 'I am a teacher', question: 'Soy profesor' },
        { answer: 'What is your profession?', question: '¿Cuál es tu profesión?' },
      ],
    },
    {
      answer: 'How are you (formal)?',
      question: '¿Cómo está usted?',
      phrases: [
        { answer: 'I am doing well, thank you', question: 'Estoy bien, gracias' },
        { answer: 'How are you doing?', question: '¿Cómo le va?' },
      ],
    },
    {
      answer: `What do you (formal) do?`,
      question: '¿Qué hace usted?',
      phrases: [
        { answer: 'I am a doctor', question: 'Soy médico' },
        { answer: 'What is your job?', question: '¿Cuál es su trabajo?' },
      ],
    },
    {
      answer: `How old are you (informal)?`,
      question: '¿Cuántos años tienes?',
      phrases: [
        { answer: 'I am 25 years old', question: 'Yo tengo veinticinco años' },
        { answer: 'How old are you?', question: '¿Cuántos años tienes?' },
      ],
    },
    {
      answer: `How old are you (formal)?`,
      question: '¿Cuántos años tiene usted?',
      phrases: [
        { answer: 'I am 30 years old', question: 'Tengo 30 años' },
        { answer: 'May I ask how old you are?', question: '¿Puedo preguntar cuántos años tiene?' },
      ],
    },
  ],
  'Putting Spanish into Action - Asking for directions': [
    {
      answer: `Hello, can you (formal) please tell me how to get to...?`,
      question: `Buenos días, ¿puede por favor decirme cómo llegar a...?`,
      phrases: [],
    },
    { answer: `Please show me on this map.`, question: `Por favor, enséñeme en este mapa.`, phrases: [] },
    { answer: `Where are we now?`, question: `¿Dónde estamos ahora?`, phrases: [] },
    { answer: `How far is it to...?`, question: `¿A cuanto estámos de...?`, phrases: [] },
  ],
  'Putting Spanish into Action - Eating out and buying food': [
    { answer: `I want this one`, question: `Quiero este`, phrases: [] },
    { answer: `the restaurant`, question: `el restaurante`, phrases: [] },
    { answer: `the market`, question: `el mercado`, phrases: [] },
    { answer: `the supermarket`, question: `el supermercado`, phrases: [] },
  ],
  'Putting Spanish into Action - Going shopping': [
    { answer: `the shirt`, question: `la camisa`, phrases: [] },
    { answer: `the shampoo`, question: `el champú`, phrases: [] },
    { answer: `the skirt`, question: `la falda`, phrases: [] },
    { answer: `the soap`, question: `el jabón`, phrases: [] },
    { answer: `the pants`, question: `los pantalones`, phrases: [] },
    { answer: `the toilet paper`, question: `el papel higiénico`, phrases: [] },
    { answer: `the toothpaste`, question: `la pasta de dientes`, phrases: [] },
    { answer: `the toothbrush`, question: `el cepillo de dientes`, phrases: [] },
    { answer: `the dress`, question: `el vestido`, phrases: [] },
    { answer: `the jacket`, question: `la chaqueta`, phrases: [] },
    { answer: `the shoes`, question: `los zapatos`, phrases: [] },
    { answer: `the socks`, question: `los calcetines`, phrases: [] },
  ],
  'Putting Spanish into Action - Heading out on the town': [
    { answer: `to go out`, question: `salir`, phrases: [] },
    { answer: `to leave`, question: `irse`, phrases: [] },
    { answer: `the bar`, question: `el bar`, phrases: [] },
    { answer: `the club`, question: `la discoteca`, phrases: [] },
    { answer: `the concert`, question: `el concierto`, phrases: [] },
    { answer: `the movie theater`, question: `el cine`, phrases: [] },
    { answer: `the restaurant`, question: `el restaurante`, phrases: [] },
    { answer: `the park`, question: `el parque`, phrases: [] },
    { answer: `the museum`, question: `el museo`, phrases: [] },
    { answer: `the beach`, question: `la playa`, phrases: [] },
    { answer: `to invite`, question: `invitar`, phrases: [] },
  ],
  'Putting Spanish into Action - Doing business': [
    // the office
    // the computer
    // the telephone
    // the break room
    // the meeting
    // the presentation
    // the project
    // the report
    // the schedule
    // the deadline
    // the client
    // the boss
    // the coworker
    // the employee
    // the company
  ],
  'Putting Spanish into Action - Enjoying the great outdoors and more': [
    // Do you like to walk (hike)?
    // What do you like to play?
    // Do you play chess?
    // Do you like to read?
  ],
  'Taking Spanish on the Go - Preparing for a trip': [
    // the passport
    // the visa
    // the flight
    // to pack your luggage
  ],
  'Taking Spanish on the Go - Making sense of money': [
    // the money
    // the bill
    // the change
    // the credit card
    // the cash
  ],
  'Taking Spanish on the Go - Navigating airports and travel': [],
  'Taking Spanish on the Go - Getting around with local transportation': [
    // Where is...?
    // the airport
    // the bus
    // the train station
    // the taxi
    // the bus station
    // the car rental office
  ],
  'Taking Spanish on the Go - Securing a place to stay': [
    // Do you have a room available?
    // Is the room large enough for two people?
    // Does it have a private bathroom?
    // Does it have two beds?
    // How much does it cost per night?
    // Do you accept credit cards?
  ],
  'Taking Spanish on the Go - Taking action during emergencies': [
    // Please help me!
  ],
};

const mapRecordToCards = (record: Record<string, Card[]>): AppData['cards'] => {
  return Object.keys(record).flatMap((category) => record[category]!.map((card) => ({ ...card, type: category })));
};

export const source: AppData = {
  language: 'es-ES',
  cards: mapRecordToCards(DummiesBook),
};
