import type { CardCollection } from '../types';

/**
 * Part 1: Common Expressions and Keywords
 */
export const Part1: CardCollection = {
  'Titles and Forms of Address': [
    {
      cards: [],
    },
  ],
  'Greetings and Partings': [
    {
      cards: []
    },
  ],
  'Introductions': [
    {
      cards: [],
    },
  ],
  'Speaking Spanish around the House': [
    {
      cards: [
        {
          answer: `the refrigerator`,
          question: 'la nevera',
          phrases: [
            { answer: 'The milk is in the refrigerator', question: 'La leche está en la nevera' },
            { answer: 'Open the refrigerator (informal command)', question: 'Abre la nevera' },
          ],
        },
        {
          answer: `the stove`,
          question: 'la cocina',
          phrases: [
            { answer: 'The stove is hot', question: 'La cocina está caliente' },
            { answer: 'Be careful with the stove (informal command)', question: 'Ten cuidado con la cocina' },
          ],
        },
        {
          answer: `the sink`,
          question: 'el fregadero',
          phrases: [
            { answer: 'Wash your hands at the sink (informal command)', question: 'Lávate las manos en el fregadero' },
            { answer: 'The dishes are in the sink', question: 'Los platos están en el fregadero' },
          ],
        },
        {
          answer: `the bed`,
          question: 'la cama',
          phrases: [
            { answer: 'I sleep in the bed', question: 'Duermo en la cama' },
            { answer: 'Make your bed in the morning (informal command)', question: 'Haz la cama por la mañana' },
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
            { answer: 'Please sit in the chair (informal command)', question: 'Por favor, siéntate en la silla' },
            { answer: 'The chair is next to the table', question: 'La silla está al lado de la mesa' },
          ],
        },
        {
          answer: `the television`,
          question: 'la televisión',
          phrases: [
            { answer: 'I watch television in the evening', question: 'Veo la televisión por la noche' },
            { answer: 'Turn off the television (informal command)', question: 'Apaga la televisión' },
          ],
        },
        {
          answer: `the lamp`,
          question: 'la lámpara',
          phrases: [
            { answer: 'Turn on the lamp (informal command)', question: 'Enciende la lámpara' },
            { answer: 'The lamp gives good light', question: 'La lámpara da buena luz' },
          ],
        },
        {
          answer: `the microwave`,
          question: 'el microondas',
          phrases: [
            {
              answer: 'Heat the food in the microwave (informal command)',
              question: 'Calienta la comida en el microondas',
            },
            { answer: 'The microwave is very fast', question: 'El microondas es muy rápido' },
          ],
        },
        {
          answer: `the remote control`,
          question: 'el mando a distancia',
          phrases: [
            { answer: 'Where is the remote control?', question: '¿Dónde está el mando a distancia?' },
            {
              answer: 'Change the channel with the remote (informal command)',
              question: 'Cambia de canal con el mando a distancia',
            },
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
          phrases: [
            { answer: 'The living room is next to the kitchen', question: 'La sala está al lado de la cocina' },
          ],
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
    },
  ],
  'Putting Spanish into Action': [
    {
      subTitle: 'Making small talk',
      cards: [
        {
          answer: `What's your (informal) name?`,
          question: '¿Cómo te llamas?',
          phrases: [
            { answer: 'My name is Carlos', question: 'Me llamo Carlos' },
            { answer: 'What is your (informal) full name?', question: '¿Cuál es tu nombre completo?' },
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
          answer: `What do you (informal) do for work?`,
          question: '¿A qué te dedicas?',
          phrases: [
            { answer: 'I am a teacher', question: 'Soy profesor' },
            { answer: 'What is your (informal) profession?', question: '¿Cuál es tu profesión?' },
          ],
        },
        {
          answer: 'How are you (formal)?',
          question: '¿Cómo está usted?',
          phrases: [
            { answer: 'I am doing well, thank you', question: 'Estoy bien, gracias' },
            { answer: 'How are you (formal) doing?', question: '¿Cómo le va?' },
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
    },
    {
      subTitle: `Asking for directions`,
      cards: [
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
    },
    {
      subTitle: `Eating out and buying food`,
      cards: [
        {
          answer: `I want this one`,
          question: `Quiero este`,
          phrases: [{ answer: 'I want this one instead', question: 'Prefiero este' }],
        },
        {
          answer: `the restaurant`,
          question: `el restaurante`,
          phrases: [
            { answer: 'I ate at that restaurant last week', question: 'Comí en ese restaurante la semana pasada' },
          ],
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
    },

    {
      subTitle: `Going shopping`,
      cards: [
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
          phrases: [
            { answer: 'She wore a red skirt to the party', question: 'Ella llevaba una falda roja a la fiesta' },
          ],
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
          phrases: [
            { answer: 'I wore a beautiful dress to the wedding', question: 'Usé un vestido hermoso en la boda' },
          ],
        },
        {
          answer: `the jacket`,
          question: `la chaqueta`,
          phrases: [{ answer: 'I left my jacket at the office', question: 'Dejé mi chaqueta en la oficina' }],
        },
        {
          answer: `the shoes`,
          question: `los zapatos`,
          phrases: [
            { answer: 'I walked so much that my shoes hurt', question: 'Caminé tanto que me duelen los zapatos' },
          ],
        },
        {
          answer: `the socks`,
          question: `los calcetines`,
          phrases: [
            { answer: 'I could not find matching socks', question: 'No pude encontrar calcetines que combinaran' },
          ],
        },
      ],
    },
    {
      subTitle: `Heading out on the town`,
      cards: [
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
            { answer: 'They danced at the club all night', question: 'Bailaron en la discoteca toda la noche' },
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
          phrases: [
            { answer: 'I went to the beach during vacation', question: 'Fui a la playa durante las vacaciones' },
          ],
        },
        {
          answer: `to invite`,
          question: `invitar`,
          phrases: [
            {
              answer: 'I invited my coworkers to the party',
              question: 'Invité a mis compañeros de trabajo a la fiesta',
            },
          ],
        },
      ],
    },

    {
      subTitle: `Doing business`,
      cards: [
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
          phrases: [
            { answer: 'I take a break in the break room', question: 'Tomo un descanso en la sala de descanso' },
          ],
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
          phrases: [
            { answer: 'The employee was hired last month', question: 'El empleado fue contratado el mes pasado' },
          ],
        },
        {
          answer: 'the company',
          question: 'la empresa',
          phrases: [{ answer: 'The company grows every year', question: 'La empresa crece cada año' }],
        },
      ],
    },

    {
      subTitle: `Enjoying the great outdoors and more`,
      cards: [
        {
          answer: 'Do you (informal) like to walk or hike?',
          question: '¿Te gusta caminar o hacer senderismo?',
          phrases: [{ answer: 'I liked to hike in the mountains', question: 'Me gustaba caminar en las montañas' }],
        },
        {
          answer: 'What games do you (informal) like to play?',
          question: '¿Qué juegos te gusta jugar?',
          phrases: [{ answer: 'I used to play soccer', question: 'Solía jugar al fútbol' }],
        },
        {
          answer: 'Do you (informal) play chess?',
          question: '¿Juegas al ajedrez?',
          phrases: [
            { answer: 'I played chess when I was younger', question: 'Jugaba al ajedrez cuando era más joven' },
          ],
        },
        {
          answer: 'Do you (informal) like to read?',
          question: '¿Te gusta leer?',
          phrases: [{ answer: 'I read books every evening', question: 'Leo libros cada noche' }],
        },
      ],
    },
  ],
  'Taking Spanish on the Go': [
    {
      subTitle: `Preparing for a trip`,
      cards: [
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
    },

    {
      subTitle: `Making sense of money`,
      cards: [
        {
          answer: 'the money',
          question: 'el dinero',
          phrases: [{ answer: 'I spent all my money on vacation', question: 'Gasté todo mi dinero en las vacaciones' }],
        },
        {
          answer: 'the bill',
          question: 'la factura',
          phrases: [
            { answer: 'Can you (informal) pay the bill please?', question: '¿Puedes pagar la factura por favor?' },
          ],
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
    },

    {
      subTitle: `Navigating airports and travel`,
      cards: [
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
          question: 'la cinta de equipajes',
          phrases: [
            { answer: 'My luggage is at baggage claim', question: 'Mi equipaje está en la cinta de equipajes' },
          ],
        },
      ],
    },

    {
      subTitle: `Getting around with local transportation`,
      cards: [
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
          phrases: [
            { answer: 'I took the bus to work this morning', question: 'Tomé el autobús al trabajo esta mañana' },
          ],
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
            {
              answer: 'I rented a car at the car rental office',
              question: 'Alquilé un coche en la oficina de alquiler',
            },
          ],
        },
      ],
    },

    {
      subTitle: `Securing a place to stay`,
      cards: [
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
            {
              answer: 'We accept all types of credit cards',
              question: 'Aceptamos todos los tipos de tarjetas de crédito',
            },
          ],
        },
      ],
    },

    {
      subTitle: `Taking action during emergencies`,
      cards: [
        {
          answer: 'Please help me!',
          question: '¡Por favor, ayúdame!',
          phrases: [
            { answer: 'I called for help because I was lost', question: 'Llamé pidiendo ayuda porque estaba perdido' },
          ],
        },
      ],
    },
  ],
};
