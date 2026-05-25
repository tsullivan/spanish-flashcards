import type { AppData, Card } from './types';

const Chapter1: Record<string, Card[]> = {
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
        { answer: 'you (informal) speak well', question: 'tú hablas bien' },
        { answer: 'do you (informal) speak English?', question: '¿tú hablas inglés?' },
        { answer: 'you (informal) always speak too fast', question: 'tú siempre hablas demasiado rápido' },
      ],
    },
    {
      answer: 'you (formal, singular) speak',
      question: 'Usted habla',
      phrases: [
        { answer: 'you (formal) speak clearly', question: 'Usted habla claramente' },
        { answer: 'do you (formal) speak Portuguese?', question: '¿Usted habla portugués?' },
        { answer: 'you (formal) speak with an accent', question: 'Usted habla con acento' },
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
      answer: 'you/they (formal, plural, Latin America), speak',
      question: 'Ustedes hablan',
      phrases: [
        { answer: 'you (formal) all speak fluently', question: 'Ustedes hablan con fluidez' },
        { answer: 'they (formal) speak the same language', question: 'Ustedes hablan el mismo idioma' },
        { answer: 'you (formal) speak very well', question: 'Ustedes hablan muy bien' },
      ],
    },
    {
      answer: 'they (informal) speak',
      question: 'ellos/ellas hablan',
      phrases: [
        { answer: 'they (informal) speak loudly', question: 'ellos hablan en voz alta' },
        { answer: 'they (informal) speak about their families', question: 'ellos hablan de sus familias' },
        { answer: 'they (informal) always speak in Spanish', question: 'ellos siempre hablan en español' },
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
        { answer: 'How are you (informal) today?', question: '¿Cómo estás hoy?' },
        { answer: 'How are you (informal) feeling?', question: '¿Cómo te sientes?' },
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
      answer: 'Where are you (formal) from?',
      question: '¿De dónde eres?',
      phrases: [
        { answer: 'I am from Mexico', question: 'Soy de México' },
        { answer: 'Are you (formal) from here?', question: '¿Eres de aquí?' },
      ],
    },
    {
      answer: 'Nice to meet you',
      question: 'Mucho gusto',
      phrases: [
        { answer: 'Nice to meet you (formal) too', question: 'Igualmente, mucho gusto' },
        { answer: 'The pleasure is mine', question: 'El placer es mío' },
      ],
    },
    {
      answer: 'Thank you',
      question: 'Gracias',
      phrases: [
        { answer: 'Thank you (formal) very much', question: 'Muchas gracias' },
        { answer: 'Thank you (informal) for your help', question: 'Gracias por tu ayuda' },
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
        { answer: 'See you (informal) later', question: 'Hasta luego' },
        { answer: 'Goodbye, my friends', question: 'Adiós, mis amigos' },
      ],
    },
    {
      answer: `Please`,
      question: 'Por favor',
      phrases: [
        { answer: 'Please sit down', question: 'Por favor, siéntate' },
        { answer: 'Can you (formal) help me, please?', question: '¿Puedes ayudarme, por favor?' },
      ],
    },
    {
      answer: `Do you (formal) speak English?`,
      question: '¿Habla usted inglés?',
      phrases: [
        { answer: 'Do you (formal) speak French?', question: '¿Habla usted francés?' },
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
        { answer: 'Really? Are you (informal) serious?', question: '¿En serio? ¿Estás en broma?' },
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
        { answer: 'What day were you (informal) born?', question: '¿Qué día naciste?' },
      ],
    },
    {
      answer: 'What time?',
      question: '¿Qué hora es?',
      phrases: [
        { answer: 'What time is it now?', question: '¿Qué hora es ahora?' },
        { answer: 'Do you (informal) know what time it is?', question: '¿Sabes qué hora es?' },
      ],
    },
    {
      answer: 'today',
      question: 'hoy',
      phrases: [
        { answer: 'Today is a beautiful day', question: 'Hoy es un día hermoso' },
        { answer: 'What do you (informal) want to do today?', question: '¿Qué quieres hacer hoy?' },
      ],
    },
    {
      answer: 'tomorrow',
      question: 'mañana',
      phrases: [
        { answer: 'Tomorrow is Friday', question: 'Mañana es viernes' },
        { answer: 'See you (informal) tomorrow', question: 'Hasta mañana' },
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
        { answer: 'Can you (informal) count to twelve?', question: '¿Puedes contar hasta doce?' },
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
      answer: `Where do you (informal) live?`,
      question: '¿Dónde vives?',
      phrases: [
        { answer: 'I live in Madrid', question: 'Vivo en Madrid' },
        { answer: 'I live in a small town', question: 'Vivo en un pueblo pequeño' },
        { answer: 'I live in America', question: 'Vivo en América' },
        { answer: 'Do you (informal) live here?', question: '¿Vives aquí?' },
      ],
    },
    {
      answer: `What do you (formal) do for work?`,
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
        { answer: 'How are you (informal) doing?', question: '¿Cómo le va?' },
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
        { answer: 'May I ask how old you (formal) are?', question: '¿Puedo preguntar cuántos años tiene?' },
      ],
    },
  ],
  'Putting Spanish into Action - Asking for directions': [
    {
      answer: `Hello, can you (formal) please tell me how to get to...?`,
      question: `Buenos días, ¿puede por favor decirme cómo llegar a...?`,
      phrases: [
        {
          answer: 'Can you (formal) tell me how to get to the museum?',
          question: '¿Puede decirme cómo llegar al museo?',
        },
      ],
    },
    {
      answer: `Please show me on this map.`,
      question: `Por favor, enséñeme en este mapa.`,
      phrases: [
        {
          answer: 'Please show me where we are on this map',
          question: 'Por favor, enséñeme dónde estamos en este mapa',
        },
      ],
    },
    {
      answer: `Where are we now?`,
      question: `¿Dónde estamos ahora?`,
      phrases: [{ answer: 'I do not know where we are now', question: 'No sé dónde estamos ahora' }],
    },
    {
      answer: `How far is it to...?`,
      question: `¿A cuánto estamos de...?`,
      phrases: [{ answer: 'How far is it to the airport?', question: '¿A cuánto estamos del aeropuerto?' }],
    },
  ],
  'Putting Spanish into Action - Eating out and buying food': [
    {
      answer: `I want this one`,
      question: `Quiero este`,
      phrases: [{ answer: 'I want this one instead', question: 'Prefiero este' }],
    },
    {
      answer: `the restaurant`,
      question: `el restaurante`,
      phrases: [{ answer: 'I ate at that restaurant last week', question: 'Comí en ese restaurante la semana pasada' }],
    },
    {
      answer: `the market`,
      question: `el mercado`,
      phrases: [
        { answer: 'I bought fresh vegetables at the market', question: 'Compré vegetales frescos en el mercado' },
      ],
    },
    {
      answer: `the supermarket`,
      question: `el supermercado`,
      phrases: [{ answer: 'I go to the supermarket on Saturday', question: 'Voy al supermercado el sábado' }],
    },
  ],
  'Putting Spanish into Action - Going shopping': [
    {
      answer: `the shirt`,
      question: `la camisa`,
      phrases: [{ answer: 'I bought a blue shirt yesterday', question: 'Compré una camisa azul ayer' }],
    },
    {
      answer: `the shampoo`,
      question: `el champú`,
      phrases: [{ answer: 'I need to buy new shampoo', question: 'Necesito comprar champú nuevo' }],
    },
    {
      answer: `the skirt`,
      question: `la falda`,
      phrases: [{ answer: 'She wore a red skirt to the party', question: 'Ella llevaba una falda roja a la fiesta' }],
    },
    {
      answer: `the soap`,
      question: `el jabón`,
      phrases: [{ answer: 'I use soap to wash my hands', question: 'Uso jabón para lavarme las manos' }],
    },
    {
      answer: `the pants`,
      question: `los pantalones`,
      phrases: [{ answer: 'These pants fit perfectly', question: 'Estos pantalones me quedan perfectos' }],
    },
    {
      answer: `the toilet paper`,
      question: `el papel higiénico`,
      phrases: [{ answer: 'We need to buy toilet paper', question: 'Necesitamos comprar papel higiénico' }],
    },
    {
      answer: `the toothpaste`,
      question: `la pasta de dientes`,
      phrases: [{ answer: 'I forgot my toothpaste at home', question: 'Olvidé mi pasta de dientes en casa' }],
    },
    {
      answer: `the toothbrush`,
      question: `el cepillo de dientes`,
      phrases: [
        {
          answer: 'I brush my teeth with my toothbrush every morning',
          question: 'Me cepillo los dientes con mi cepillo cada mañana',
        },
      ],
    },
    {
      answer: `the dress`,
      question: `el vestido`,
      phrases: [{ answer: 'I wore a beautiful dress to the wedding', question: 'Usé un vestido hermoso en la boda' }],
    },
    {
      answer: `the jacket`,
      question: `la chaqueta`,
      phrases: [{ answer: 'I left my jacket at the office', question: 'Dejé mi chaqueta en la oficina' }],
    },
    {
      answer: `the shoes`,
      question: `los zapatos`,
      phrases: [{ answer: 'I walked so much that my shoes hurt', question: 'Caminé tanto que me duelen los zapatos' }],
    },
    {
      answer: `the socks`,
      question: `los calcetines`,
      phrases: [{ answer: 'I could not find matching socks', question: 'No pude encontrar calcetines que combinaran' }],
    },
  ],
  'Putting Spanish into Action - Heading out on the town': [
    {
      answer: `to go out`,
      question: `salir`,
      phrases: [{ answer: 'I went out with my friends last night', question: 'Salí con mis amigos anoche' }],
    },
    {
      answer: `to leave`,
      question: `irse`,
      phrases: [{ answer: 'I left the party early', question: 'Me fui de la fiesta temprano' }],
    },
    {
      answer: `the bar`,
      question: `el bar`,
      phrases: [{ answer: 'We met at the bar downtown', question: 'Nos encontramos en el bar del centro' }],
    },
    {
      answer: `the club`,
      question: `la discoteca`,
      phrases: [
        { answer: 'They (informal) danced at the club all night', question: 'Bailaron en la discoteca toda la noche' },
      ],
    },
    {
      answer: `the concert`,
      question: `el concierto`,
      phrases: [
        { answer: 'I loved the concert last weekend', question: 'Me encantó el concierto el fin de semana pasado' },
      ],
    },
    {
      answer: `the movie theater`,
      question: `el cine`,
      phrases: [{ answer: 'I saw a great movie at the cinema', question: 'Vi una película excelente en el cine' }],
    },
    {
      answer: `the restaurant`,
      question: `el restaurante`,
      phrases: [{ answer: 'We had dinner at a nice restaurant', question: 'Cenamos en un restaurante agradable' }],
    },
    {
      answer: `the park`,
      question: `el parque`,
      phrases: [{ answer: 'We walked through the park yesterday', question: 'Caminamos por el parque ayer' }],
    },
    {
      answer: `the museum`,
      question: `el museo`,
      phrases: [{ answer: 'I visited the art museum', question: 'Visité el museo de arte' }],
    },
    {
      answer: `the beach`,
      question: `la playa`,
      phrases: [{ answer: 'I went to the beach during vacation', question: 'Fui a la playa durante las vacaciones' }],
    },
    {
      answer: `to invite`,
      question: `invitar`,
      phrases: [
        { answer: 'I invited my coworkers to the party', question: 'Invité a mis compañeros de trabajo a la fiesta' },
      ],
    },
  ],
  'Putting Spanish into Action - Doing business': [
    {
      answer: 'the office',
      question: 'la oficina',
      phrases: [{ answer: 'I work in the office every day', question: 'Trabajo en la oficina cada día' }],
    },
    {
      answer: 'the computer',
      question: 'el ordenador',
      phrases: [{ answer: 'The computer is broken', question: 'El ordenador está roto' }],
    },
    {
      answer: 'the telephone',
      question: 'el teléfono',
      phrases: [{ answer: 'Where is the telephone?', question: '¿Dónde está el teléfono?' }],
    },
    {
      answer: 'the break room',
      question: 'la sala de descanso',
      phrases: [{ answer: 'I take a break in the break room', question: 'Tomo un descanso en la sala de descanso' }],
    },
    {
      answer: 'the meeting',
      question: 'la reunión',
      phrases: [{ answer: 'The meeting is at 2 PM', question: 'La reunión es a las dos de la tarde' }],
    },
    {
      answer: 'the presentation',
      question: 'la presentación',
      phrases: [{ answer: 'I gave a presentation yesterday', question: 'Di una presentación ayer' }],
    },
    {
      answer: 'the project',
      question: 'el proyecto',
      phrases: [{ answer: 'We finished the project on time', question: 'Terminamos el proyecto a tiempo' }],
    },
    {
      answer: 'the report',
      question: 'el informe',
      phrases: [{ answer: 'Did you (informal) read the report?', question: '¿Leíste el informe?' }],
    },
    {
      answer: 'the schedule',
      question: 'el horario',
      phrases: [{ answer: 'What is your work schedule?', question: '¿Cuál es tu horario de trabajo?' }],
    },
    {
      answer: 'the deadline',
      question: 'la fecha límite',
      phrases: [{ answer: 'The deadline is next Friday', question: 'La fecha límite es el próximo viernes' }],
    },
    {
      answer: 'the client',
      question: 'el cliente',
      phrases: [{ answer: 'The client was very satisfied', question: 'El cliente estaba muy satisfecho' }],
    },
    {
      answer: 'the boss',
      question: 'el jefe',
      phrases: [{ answer: 'My boss gave me a raise', question: 'Mi jefe me dio un aumento' }],
    },
    {
      answer: 'the coworker',
      question: 'el compañero de trabajo',
      phrases: [
        {
          answer: 'My coworker helped me with the project',
          question: 'Mi compañero de trabajo me ayudó con el proyecto',
        },
      ],
    },
    {
      answer: 'the employee',
      question: 'el empleado',
      phrases: [{ answer: 'The employee was hired last month', question: 'El empleado fue contratado el mes pasado' }],
    },
    {
      answer: 'the company',
      question: 'la empresa',
      phrases: [{ answer: 'The company grows every year', question: 'La empresa crece cada año' }],
    },
  ],
  'Putting Spanish into Action - Enjoying the great outdoors and more': [
    {
      answer: 'Do you (informal) like to walk or hike?',
      question: '¿Te gusta caminar o hacer senderismo?',
      phrases: [{ answer: 'I liked to hike in the mountains', question: 'Me gustaba caminar en las montañas' }],
    },
    {
      answer: 'What games do you (informal) like to play?',
      question: '¿Qué juegos te gusta jugar?',
      phrases: [{ answer: 'I used to play soccer', question: 'Solía jugar fútbol' }],
    },
    {
      answer: 'Do you (informal) play chess?',
      question: '¿Juegas al ajedrez?',
      phrases: [{ answer: 'I played chess when I was younger', question: 'Jugaba al ajedrez cuando era más joven' }],
    },
    {
      answer: 'Do you (informal) like to read?',
      question: '¿Te gusta leer?',
      phrases: [{ answer: 'I read books every evening', question: 'Leo libros cada noche' }],
    },
  ],
  'Taking Spanish on the Go - Preparing for a trip': [
    {
      answer: 'the passport',
      question: 'el pasaporte',
      phrases: [{ answer: 'I found my passport in the drawer', question: 'Encontré mi pasaporte en el cajón' }],
    },
    {
      answer: 'the visa',
      question: 'el visado',
      phrases: [{ answer: 'Did you (informal) get your visa approved?', question: '¿Te aprobaron el visado?' }],
    },
    {
      answer: 'the flight',
      question: 'el vuelo',
      phrases: [{ answer: 'My flight leaves at 8 AM', question: 'Mi vuelo sale a las 8 de la mañana' }],
    },
    {
      answer: 'to pack your luggage',
      question: 'hacer las maletas',
      phrases: [{ answer: 'I packed my luggage yesterday', question: 'Hice las maletas ayer' }],
    },
  ],
  'Taking Spanish on the Go - Making sense of money': [
    {
      answer: 'the money',
      question: 'el dinero',
      phrases: [{ answer: 'I spent all my money on vacation', question: 'Gasté todo mi dinero en las vacaciones' }],
    },
    {
      answer: 'the bill',
      question: 'la factura',
      phrases: [{ answer: 'Can you (informal) pay the bill please?', question: '¿Puedes pagar la factura por favor?' }],
    },
    {
      answer: 'the change',
      question: 'el cambio',
      phrases: [{ answer: 'Keep the change as a tip', question: 'Guarda el cambio como propina' }],
    },
    {
      answer: 'the credit card',
      question: 'la tarjeta de crédito',
      phrases: [{ answer: 'I paid with my credit card', question: 'Pagué con mi tarjeta de crédito' }],
    },
    {
      answer: 'the cash',
      question: 'el efectivo',
      phrases: [{ answer: 'Do you (informal) have any cash?', question: '¿Tienes efectivo?' }],
    },
  ],
  'Taking Spanish on the Go - Navigating airports and travel': [
    {
      answer: 'the airport',
      question: 'el aeropuerto',
      phrases: [{ answer: 'I arrived at the airport early', question: 'Llegué al aeropuerto temprano' }],
    },
    {
      answer: 'the terminal',
      question: 'la terminal',
      phrases: [{ answer: 'Which terminal is my flight?', question: '¿De qué terminal es mi vuelo?' }],
    },
    {
      answer: 'the food court',
      question: 'la zona de comidas',
      phrases: [{ answer: 'I ate lunch at the food court', question: 'Comí en la zona de comidas' }],
    },
    {
      answer: 'the boarding pass',
      question: 'la tarjeta de embarque',
      phrases: [{ answer: 'Where is my boarding pass?', question: '¿Dónde está mi tarjeta de embarque?' }],
    },
    {
      answer: 'the security checkpoint',
      question: 'el control de seguridad',
      phrases: [{ answer: 'I went through security', question: 'Pasé por el control de seguridad' }],
    },
    {
      answer: 'customs',
      question: 'la aduana',
      phrases: [{ answer: 'I declared my items at customs', question: 'Declaré mis artículos en la aduana' }],
    },
    {
      answer: 'the baggage claim',
      question: 'el mostrador de equipaje',
      phrases: [{ answer: 'My luggage is at baggage claim', question: 'Mi equipaje está en el mostrador de equipaje' }],
    },
  ],
  'Taking Spanish on the Go - Getting around with local transportation': [
    {
      answer: 'Where is...?',
      question: '¿Dónde está...?',
      phrases: [{ answer: 'Where is the train station?', question: '¿Dónde está la estación de tren?' }],
    },
    {
      answer: 'the airport',
      question: 'el aeropuerto',
      phrases: [{ answer: 'The airport is far from here', question: 'El aeropuerto está lejos de aquí' }],
    },
    {
      answer: 'the bus',
      question: 'el autobús',
      phrases: [{ answer: 'I took the bus to work this morning', question: 'Tomé el autobús al trabajo esta mañana' }],
    },
    {
      answer: 'the train station',
      question: 'la estación de tren',
      phrases: [{ answer: 'The train station is downtown', question: 'La estación de tren está en el centro' }],
    },
    {
      answer: 'the taxi',
      question: 'el taxi',
      phrases: [{ answer: 'I called a taxi to get home', question: 'Llamé un taxi para ir a casa' }],
    },
    {
      answer: 'the bus station',
      question: 'la estación de autobús',
      phrases: [
        { answer: 'The bus station is near the market', question: 'La estación de autobús está cerca del mercado' },
      ],
    },
    {
      answer: 'the car rental office',
      question: 'la oficina de alquiler de coches',
      phrases: [
        { answer: 'I rented a car at the car rental office', question: 'Alquilé un coche en la oficina de alquiler' },
      ],
    },
  ],
  'Taking Spanish on the Go - Securing a place to stay': [
    {
      answer: 'Do you (formal) have a room available?',
      question: '¿Tiene una habitación disponible?',
      phrases: [
        {
          answer: 'I looked for a room available in the hotel',
          question: 'Busqué una habitación disponible en el hotel',
        },
      ],
    },
    {
      answer: 'Is the room large enough for two people?',
      question: '¿Es la habitación lo suficientemente grande para dos personas?',
      phrases: [
        {
          answer: 'The room was large enough for our family',
          question: 'La habitación era lo suficientemente grande para nuestra familia',
        },
      ],
    },
    {
      answer: 'Does it have a private bathroom?',
      question: '¿Tiene un baño privado?',
      phrases: [
        {
          answer: 'The room has a private bathroom with a shower',
          question: 'La habitación tiene un baño privado con ducha',
        },
      ],
    },
    {
      answer: 'Does it have two beds?',
      question: '¿Tiene dos camas?',
      phrases: [
        {
          answer: 'I asked if it has two beds for the guests',
          question: 'Pregunté si tiene dos camas para los huéspedes',
        },
      ],
    },
    {
      answer: 'How much does it cost per night?',
      question: '¿Cuánto cuesta por noche?',
      phrases: [{ answer: 'It costs fifty euros per night', question: 'Cuesta cincuenta euros por noche' }],
    },
    {
      answer: 'Do you (formal) accept credit cards?',
      question: '¿Aceptan tarjetas de crédito?',
      phrases: [
        { answer: 'We accept all types of credit cards', question: 'Aceptamos todos los tipos de tarjetas de crédito' },
      ],
    },
  ],
  'Taking Spanish on the Go - Taking action during emergencies': [
    {
      answer: 'Please help me!',
      question: '¡Por favor, ayúdame!',
      phrases: [
        { answer: 'I called for help because I was lost', question: 'Llamé pidiendo ayuda porque estaba perdido' },
      ],
    },
  ],
};

const Chapter2: Record<string, Card[]> = {
  'Breaking Down Simple Sentence Structure': [
    {
      answer: `The house is big.`,
      question: 'La casa es grande.',
      phrases: [{ answer: 'The big house is red', question: 'La casa grande es roja' }],
    },
    {
      answer: 'The woman is beautiful.',
      question: 'La mujer es hermosa.',
      phrases: [{ answer: 'The woman is very beautiful', question: 'La mujer es muy hermosa' }],
    },
    {
      answer: 'The man is tall.',
      question: 'El hombre es alto.',
      phrases: [{ answer: 'The man is very tall', question: 'El hombre es muy alto' }],
    },
    {
      answer: "The car isn't new.",
      question: 'El coche no es nuevo.',
      phrases: [{ answer: 'The car is old', question: 'El coche es viejo' }],
    },
    {
      answer: "The dog isn't good.",
      question: 'El perro no es bueno.',
      phrases: [{ answer: 'The dog is bad', question: 'El perro es malo' }],
    }
  ],
  'Forming Questions: The Basics': [
    {
      answer: `This is...`,
      question: 'Esto es...',
      phrases: [{ answer: 'This is a book.', question: 'Esto es un libro.' }],
    },
    {
      answer: `Is this...?`,
      question: '¿Esto es...?',
      phrases: [{ answer: 'Is this a pen?', question: '¿Esto es un bolígrafo?' }],
    },
    {
      answer: 'This is the door.',
      question: 'Esto es la puerta.',
      phrases: [{ answer: 'Is this the door?', question: '¿Esto es la puerta?' }],
    },
    {
      answer: 'Is the soup good?',
      question: '¿Es buena la sopa?',
      phrases: [{ answer: 'Yes, the soup is good', question: 'Sí, la sopa es buena' }],
    },
    {
      answer: 'Is that the car?',
      question: '¿Eso es el coche?',
      phrases: [{ answer: 'No, that is not the car', question: 'No, eso no es el coche' }],
    },
    {
      answer: 'Is the woman beautiful?',
      question: '¿Es hermosa la mujer?',
      phrases: [{ answer: 'No, the woman is not beautiful', question: 'No, la mujer no es hermosa' }],
    },
    {
      answer: 'Is the man tall?',
      question: '¿Es alto el hombre?',
      phrases: [{ answer: 'No, the man is not tall', question: 'No, el hombre no es alto' }],
    }
  ],
  'Meeting Subject Pronouns Face to Face': [
    {
      answer: 'Lucy fried an egg.',
      question: 'Lucy fríe un huevo.',
      phrases: [{ answer: 'She fried an egg', question: 'Ella fríe un huevo' }],
    },
    {
      answer: 'The dog is barking.',
      question: 'El perro está ladrando.',
      phrases: [{ answer: 'It is barking', question: 'Está ladrando' }],
    },
    {
      answer: 'My friend and I are going to the park.',
      question: 'Mi amigo y yo vamos al parque.',
      phrases: [{ answer: 'We are going to the park', question: 'Nosotros vamos al parque' }],
    },
    {
      answer: 'The teacher is talking to the students.',
      question: 'La maestra está hablando con los estudiantes.',
      phrases: [{ answer: 'They are talking to the students', question: 'Ellos están hablando con los estudiantes' }],
    },
    {
      answer: `I (1st person singular)`,
      question: 'Yo',
      phrases: [{ answer: 'I am learning Spanish', question: 'Yo estoy aprendiendo español' }],
    },
    {
      answer: `You (familiar, 2nd person singular)`,
      question: 'Tú',
      phrases: [{ answer: 'You are my friend', question: 'Tú eres mi amigo' }],
    },
    {
      answer: `You (formal, 2nd person singular)`,
      question: 'Usted',
      phrases: [{ answer: 'You are very kind', question: 'Usted es muy amable' }],
    },
    {
      answer: `he / she (3rd person singular)`,
      question: 'Él / Ella',
      phrases: [
        { answer: 'She is a doctor', question: 'Ella es doctora' },
        { answer: 'He is a teacher', question: 'Él es profesor' },
      ],
    },
    {
      question: '¿Qué es?',
      answer: 'What is it?',
      phrases: [
        { answer: 'What is this?', question: '¿Qué es esto?' },
        { answer: `It is a tool`, question: 'Es una herramienta' },
      ],
    },
  ],
  'A few words about yo / nosotros and nosotras': [
    {
      question: `(Yo) Me voy.`,
      answer: 'I am leaving.',
      phrases: [{ question: 'Nosotros nos vamos.', answer: 'We are leaving.' }],
    },
    {
      question: `Jorge y yo (Nosotros) vamos al cine.`,
      answer: 'Jorge and I are going to the movies.',
      phrases: [{ question: 'Nosotras vamos al cine.', answer: 'We (feminine) are going to the movies.' }],
    },
    {
      answer: `Luz and I (We) play tennis`,
      question: 'Luz y yo (Nosotros) jugamos al tenis',
      phrases: [{ answer: 'We play tennis', question: 'Nosotros jugamos al tenis' }],
    },
  ],
  "It's you, you know: The tù and usted distinction": [
    {
      question: `tutearse`,
      answer: 'to use the tú form',
      phrases: [{ question: 'ustedearse', answer: 'to use the usted form' }],
    },
    {
      answer: `Are you (friendly, informal) coming to the party?`,
      question: '¿Vas a venir a la fiesta?',
      phrases: [{ answer: 'Are you (formal) coming to the party?', question: '¿Va a venir a la fiesta?' }],
    },
    {
      answer: `Do you (friendly, informal) like this restaurant?`,
      question: '¿Te gusta este restaurante?',
      phrases: [{ answer: 'Do you (formal) like this restaurant?', question: '¿Le gusta este restaurante?' }],
    },
    {
      answer: `Where do you (friendly, informal) live?`,
      question: '¿Dónde vives?',
      phrases: [{ answer: 'Where do you (formal) live?', question: '¿Dónde vive usted?' }],
    },
    {
      answer: `You (friendly, informal) have a very beautiful home`,
      question: 'Tienes una casa muy bonita',
      phrases: [{ answer: `You (formal) have a very beautiful home`, question: 'Tiene una casa muy bonita' }],
    },
    {
      answer: `Do you (plural, informal, Spain) dance the tango?`,
      question: '¿Bailáis el tango?',
      phrases: [{ answer: 'No, we (plural, informal) do not dance the tango', question: 'No, no bailamos el tango' }],
    },
  ],
  'Ellos versus ellas': [
    {
      answer: 'Juan and Jorge (They, group of males) listen to music.',
      question: 'Juan y Jorge (Ellos) escuchan música.',
      phrases: [{ answer: 'They listen to music', question: 'Ellos escuchan música' }],
    },
    {
      answer: 'Juan and Luz (They, combined group) listen to music.',
      question: 'Juan y Luz (Ellos) escuchan música.',
      phrases: [{ answer: 'They listen to music', question: 'Ellos escuchan música' }],
    },
    {
      answer: 'The boy and all the girls listen.',
      question: 'El niño y todas las niñas escuchan.',
      phrases: [{ answer: 'They listen', question: 'Ellos escuchan' }],
    },
    {
      answer: 'Luz and Susana (group of females) listen.',
      question: 'Luz y Susana (Ellas) escuchan.',
      phrases: [{ answer: 'They listen', question: 'Ellas escuchan' }],
    },
  ],
};

const mapRecordToCards = (prefix: string, record: Record<string, Card[]>): AppData['cards'] => {
  return Object.keys(record).flatMap((category) =>
    record[category]!.map((card) => ({ ...card, type: `${prefix} - ${category}` })),
  );
};

export const source: AppData = {
  language: 'es-ES',
  cards: [...mapRecordToCards('Chapter 1', Chapter1), ...mapRecordToCards('Chapter 2', Chapter2)],
};
