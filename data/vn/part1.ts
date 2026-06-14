import type { CardCollection } from '../types';

/**
 * Part 1: Common Expressions and Keywords
 */
export const Part1: CardCollection = {
  'Titles and Forms of Address': [{ cards: [
    { answer: "Mrs., ma'am", question: 'bà', pronunciation: 'bàh', phrases: [
      { answer: 'Mrs. Betty lives next door.', question: 'Bà Betty sống cạnh nhà tôi.' },
    ] },
    { answer: 'Mr., Sir', question: 'ông', pronunciation: 'ohng', phrases: [
      { answer: 'Mr. John is my teacher.', question: 'Ông John là giáo viên của tôi.' },
    ] },
    { answer: 'Miss', question: 'cô', pronunciation: 'koh', phrases: [
      { answer: 'Miss Linh is a doctor.', question: 'Cô Linh là bác sĩ.' },
    ] },
    { answer: 'you (female peer)', question: 'chị', pronunciation: 'chee', phrases: [
      { answer: 'You have nice shoes', question: 'Chị có đôi giày đẹp.' },
    ] },
    { answer: 'you (male peer)', question: 'anh', pronunciation: 'aing', phrases: [
      { answer: 'You are very tall', question: 'Anh rất cao.' },
    ] },
    { answer: 'you (younger person)', question: 'em', pronunciation: 'em', phrases: [
      { answer: 'You have a big fish', question: 'Em có con cá lớn.' },
    ] },
    { answer: 'you (person older than your parents', question: 'bác', pronunciation: 'báhk', phrases: [
      { answer: 'You are very kind', question: 'Bác rất tốt.' },
    ] },
    // you (female younger than your parents)
    { answer: 'you (female younger than your parents)', question: 'cô', pronunciation: 'koh', phrases: [
      { answer: 'Did you like the movie?', question: 'Cô có thích bộ phim không?' },
    ] },
    // you (male younger than your parents)
    { answer: 'you (male younger than your parents)', question: 'chú', pronunciation: 'choo', phrases: [
      { answer: 'How was your soccer game?', question: 'Chú đá bóng thế nào?' },
    ] },
    // I (speaking to a peer)
    { answer: 'I (speaking to a peer)', question: 'tôi', pronunciation: 'toh-ee', phrases: [
      { answer: 'I am a student.', question: 'Tôi là học sinh.' },
    ] },
    // I (speaking to someone of your parents' generation)
    { answer: 'I (speaking to someone of your parents\' generation)', question: 'cháu', pronunciation: 'chow', phrases: [
      { answer: 'I want you to have this gift.', question: 'Con muốn tặng bác món quà này.' },
    ] },
    // We (speaking to a peer)
    { answer: 'We (speaking to a peer)', question: 'chúng tôi', pronunciation: 'choong toh-ee', phrases: [
      { answer: 'We are going to the park.', question: 'Chúng tôi sẽ đi công viên.' },
    ] },
    // We (speaking to someone of your parents' generation)
    { answer: 'We (speaking to someone of your parents\' generation)', question: 'chúng con', pronunciation: 'choong kawn', phrases: [
      { answer: 'We are grateful for your help.', question: 'Chúng con biết ơn sự giúp đỡ của bác.' },
    ] },
  ] }],
  'Greetings and Partings': [{ cards: [
    // Good morning. / Goodbye. (To a female older than your parents)
    { answer: 'Good morning. / Goodbye. (To a female older than your parents)', question: 'Chào bà', pronunciation: 'chow bàh', phrases: [
      { answer: 'Good morning, ma\'am.', question: 'Chào bà ạ.' },
    ] },
    // Good afternoon. / Goodbye. (To a male older than your parents)
    { answer: 'Good afternoon. / Goodbye. (To a male older than your parents)', question: 'Chào ông', pronunciation: 'chow ohng', phrases: [
      { answer: 'Good afternoon, sir.', question: 'Chào ông ạ.' },
    ] },
    // Good evening. / Goodbye. (To a female younger than your parents)
    { answer: 'Good evening. / Goodbye. (To a female younger than your parents)', question: 'Chào cô', pronunciation: 'chow koh', phrases: [
      { answer: 'Good evening, miss.', question: 'Chào cô ạ.' },
    ] },
    // Hello. / Goodbye. (To a female peer)
    { answer: 'Hello. / Goodbye. (To a female peer)', question: 'Chào chị', pronunciation: 'chow chee', phrases: [
      { answer: 'Hello, how are you?', question: 'Chào chị, chị khỏe không?' },
    ] },
    // Hello. / Goodbye. (To a male peer)
    { answer: 'Hello. / Goodbye. (To a male peer)', question: 'Chào anh', pronunciation: 'chow aing', phrases: [
      { answer: 'Hello, how are you?', question: 'Chào anh, anh khỏe không?' },
    ] },
    // Hello. / Goodbye. (To a younger person)
    { answer: 'Hello. / Goodbye. (To a younger person)', question: 'Chào em', pronunciation: 'chow em', phrases: [
      { answer: 'Hello!', question: 'Chào em!' },
    ] },
    // Hello. / Goodbye. (To a person older than your parents)
    { answer: 'Hello. / Goodbye. (To a person older than your parents)', question: 'Chào bác', pronunciation: 'chow báhk', phrases: [
      { answer: 'Hello.', question: 'Chào bác ạ.' },
    ] },
    // Hello. / Goodbye. (To a female person younger than your parents)
    { answer: 'Hello. / Goodbye. (To a female person younger than your parents)', question: 'Chào cô', pronunciation: 'chow koh', phrases: [
      { answer: 'Hello.', question: 'Chào cô ạ.' },
    ] },
    // Hello. / Goodbye. (To a male person younger than your parents)
    { answer: 'Hello. / Goodbye. (To a male person younger than your parents)', question: 'Chào chú', pronunciation: 'chow choo', phrases: [
      { answer: 'Hello.', question: 'Chào chú ạ.' },
    ] },
    // Goodbye. (More formal, to a female peer especially if you won't see them for a while)
    { answer: 'Goodbye. (More formal, to a female peer especially if you won\'t see them for a while)', question: 'Tạm biệt chị', pronunciation: 'tahm byet chee', phrases: [
      { answer: 'Goodbye, take care.', question: 'Tạm biệt chị, giữ gìn sức khỏe nhé.' },
    ] },
    // Goodbye. (More formal, to a male peer especially if you won't see them for a while)
    { answer: 'Goodbye. (More formal, to a male peer especially if you won\'t see them for a while)', question: 'Tạm biệt anh', pronunciation: 'tahm byet aing', phrases: [
      { answer: 'Goodbye, take care.', question: 'Tạm biệt anh, giữ gìn sức khỏe nhé.' },
    ] },
    // Goodbye. (More formal, to a younger person especially if you won't see them for a while)
    { answer: 'Goodbye. (More formal, to a younger person especially if you won\'t see them for a while)', question: 'Tạm biệt em', pronunciation: 'tahm byet em', phrases: [
      { answer: 'Goodbye, take care.', question: 'Tạm biệt em, giữ gìn sức khỏe nhé.' },
    ] },
    // Goodbye. (More formal, to a person older than your parents, especially if you won't see them for a while)
    { answer: 'Goodbye. (More formal, to a person older than your parents, especially if you won\'t see them for a while)', question: 'Tạm biệt bác', pronunciation: 'tahm byet báhk', phrases: [
      { answer: 'Goodbye, take care.', question: 'Tạm biệt bác, bác giữ gìn sức khỏe ạ.' },
    ] },
    // Goodbye. (More formal, to a female younger than your parents, especially if you won't see them for a while)
    { answer: 'Goodbye. (More formal, to a female younger than your parents, especially if you won\'t see them for a while)', question: 'Tạm biệt cô', pronunciation: 'tahm byet koh', phrases: [
      { answer: 'Goodbye, take care.', question: 'Tạm biệt cô, cô giữ gìn sức khỏe ạ.' },
    ] },
    // Goodbye. (More formal, to a male younger than your parents, especially if you won't see them for a while)
    { answer: 'Goodbye. (More formal, to a male younger than your parents, especially if you won\'t see them for a while)', question: 'Tạm biệt chú', pronunciation: 'tahm byet choo', phrases: [
      { answer: 'Goodbye, take care.', question: 'Tạm biệt chú, chú giữ gìn sức khỏe ạ.' },
    ] },
    // See you again. (To a female peer)
    { answer: 'See you again. (To a female peer)', question: 'Hẹn gặp lại chị', pronunciation: 'hen gahp lie chee', phrases: [
      { answer: 'See you again next week.', question: 'Hẹn gặp lại chị tuần sau.' },
    ] },
    // See you again. (To a male peer)
    { answer: 'See you again. (To a male peer)', question: 'Hẹn gặp lại anh', pronunciation: 'hen gahp lie aing', phrases: [
      { answer: 'See you again next week.', question: 'Hẹn gặp lại anh tuần sau.' },
    ] },
    // See you again. (To a younger person)
    { answer: 'See you again. (To a younger person)', question: 'Hẹn gặp lại em', pronunciation: 'hen gahp lie em', phrases: [
      { answer: 'See you again next week.', question: 'Hẹn gặp lại em tuần sau.' },
    ] },
    // See you again. (To a person older than your parents)
    { answer: 'See you again. (To a person older than your parents)', question: 'Hẹn gặp lại bác', pronunciation: 'hen gahp lie báhk', phrases: [
      { answer: 'See you again next week.', question: 'Hẹn gặp lại bác tuần sau ạ.' },
    ] },
    // See you again. (To a female person younger than your parents)
    { answer: 'See you again. (To a female person younger than your parents)', question: 'Hẹn gặp lại cô', pronunciation: 'hen gahp lie koh', phrases: [
      { answer: 'See you again next week.', question: 'Hẹn gặp lại cô tuần sau ạ.' },
    ] },
    // See you again. (To a male person younger than your parents)
    { answer: 'See you again. (To a male person younger than your parents)', question: 'Hẹn gặp lại chú', pronunciation: 'hen gahp lie choo', phrases: [
      { answer: 'See you again next week.', question: 'Hẹn gặp lại chú tuần sau ạ.' },
    ] },
  ] }],
  'Introductions': [{ cards: [
    // be - là
    { answer: 'to be', question: 'là', pronunciation: 'làh', phrases: [
      { answer: 'I am a teacher.', question: 'Tôi là giáo viên.' },
    ] },
    // this, here - dây, đây là
    { answer: 'this, this is', question: 'đây, đây là', pronunciation: 'day, day làh', phrases: [
      { answer: 'This is my friend.', question: 'Đây là bạn của tôi.' },
    ] },
    // This is Mrs. Clark
    { answer: 'This is Mrs. Clark.', question: 'Đây là bà Clark.', pronunciation: 'day làh bàh Clark', phrases: [
      { answer: 'Mrs. Clark is a teacher.', question: 'Bà Clark là giáo viên.' },
    ] },
    // This is Mr. Cruise
    { answer: 'This is Mr. Cruise.', question: 'Đây là ông Cruise.', pronunciation: 'day làh ohng Cruise', phrases: [
      { answer: 'Mr. Cruise is an actor.', question: 'Ông Cruise là diễn viên.' },
    ] },
    // This is Miss Kim
    { answer: 'This is Miss Kim.', question: 'Đây là cô Kim.', pronunciation: 'day làh koh Kim', phrases: [
      { answer: 'Miss Kim is a doctor.', question: 'Cô Kim là bác sĩ.' },
    ] },
    // This is Sherry
    { answer: 'This is Sherry.', question: 'Đây là Sherry.', pronunciation: 'day làh Sherry', phrases: [
      { answer: 'Sherry is my sister.', question: 'Sherry là chị gái của tôi.' },
    ] },
    // This is Sean
    { answer: 'This is Sean.', question: 'Đây là Sean.', pronunciation: 'day làh Sean', phrases: [
      { answer: 'Sean is my brother.', question: 'Sean là em trai của tôi.' },
    ] },
    // name - tên
    { answer: 'name', question: 'tên', pronunciation: 'tayn', phrases: [
      { answer: 'What is your name?', question: 'Bạn tên là gì?' },
    ] },
    // My name is Mary
    { answer: 'My name is Mary.', question: 'Tên tôi là Mary.', pronunciation: 'tayn toh-ee làh Mary', phrases: [
      { answer: 'Nice to meet you, Mary.', question: 'Rất vui được gặp bạn, Mary.' },
    ] },
    // My name is Tom
    { answer: 'My name is Tom.', question: 'Tên tôi là Tom.', pronunciation: 'tayn toh-ee làh Tom', phrases: [
      { answer: 'Nice to meet you, Tom.', question: 'Rất vui được gặp bạn, Tom.' },
    ] },
    // honored - hân hạnh
    { answer: 'honored', question: 'hân hạnh', pronunciation: 'huhn hahng', phrases: [
      { answer: 'I am honored to meet you.', question: 'Tôi hân hạnh được gặp bạn.' },
    ] },
    // pleased, happy - vui
    { answer: 'pleased, happy', question: 'vui', pronunciation: 'voo-ee', phrases: [
      { answer: 'I am very happy.', question: 'Tôi rất vui.' },
    ] },
    // very - rất
    { answer: 'very', question: 'rất', pronunciation: 'ruht', phrases: [
      { answer: 'It is very good.', question: 'Nó rất tốt.' },
    ] },
    // Very pleased to meet you. (To a female peer.)
    { answer: 'Very pleased to meet you. (To a female peer.)', question: 'Rất vui được gặp chị.', pronunciation: 'ruht voo-ee duhk gahp chee', phrases: [
      { answer: 'Very pleased to meet you (female peer) too.', question: 'Tôi cũng rất vui được gặp chị.' },
    ] },
    // Very pleased to meet you. (To a male peer.)
    { answer: 'Very pleased to meet you. (To a male peer.)', question: 'Rất vui được gặp anh.', pronunciation: 'ruht voo-ee duhk gahp aing', phrases: [
      { answer: 'Very pleased to meet you (male peer) too.', question: 'Tôi cũng rất vui được gặp anh.' },
    ] },
    // Very pleased to meet you. (To a younger person.)
    { answer: 'Very pleased to meet you. (To a younger person.)', question: 'Rất vui được gặp em.', pronunciation: 'ruht voo-ee duhk gahp em', phrases: [
      { answer: 'Very pleased to meet you (the older person) too.', question: 'Em cũng rất vui được gặp anh chị.' },
    ] },
    // Very pleased to meet you. (To a person older than your parents.)
    { answer: 'Very pleased to meet you. (To a person older than your parents.)', question: 'Rất vui được gặp bác.', pronunciation: 'ruht voo-ee duhk gahp báhk', phrases: [
      { answer: 'Very pleased to meet you (the much younger person) too.', question: 'Bác cũng rất vui được gặp cháu.' },
    ] },
    // Very pleased to meet you. (To a female person younger than your parents.)
    { answer: 'Very pleased to meet you. (To a female person younger than your parents.)', question: 'Rất vui được gặp cô.', pronunciation: 'ruht voo-ee duhk gahp koh', phrases: [
      { answer: 'Very pleased to meet you (the much younger person) too.', question: 'Cô cũng rất vui được gặp cháu.' },
    ] },
    // Very pleased to meet you. (To a male person younger than your parents.)
    { answer: 'Very pleased to meet you. (To a male person younger than your parents.)', question: 'Rất vui được gặp chú.', pronunciation: 'ruht voo-ee duhk gahp choo', phrases: [
      { answer: 'Very pleased to meet you (the much younger person) too.', question: 'Chú cũng rất vui được gặp cháu.' },
    ] },
  ] }],
  // 'Common Questions and Suggested Responses': [{ cards: [] }],
  // 'Common Expressions and Phrases': [{ cards: [] }],
  // 'Key Words (Titles, Family, Occupations)': [{ cards: [] }],
};
