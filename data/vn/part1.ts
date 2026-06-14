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
  'Common Questions and Suggested Responses': [{ cards: [
    // subTitle: Names
    // What's your name? (To a female peer)
    // What's your name? (To a male peer)
    // What's your name? (To a younger person)
    // What's your name? (To a person older than your parents)
    // What's your name? (To a female person younger than your parents)
    // What's your name? (To a male person younger than your parents)

    // subTitle: Nationality
    // country - nước
    // person - người
    // which? - nào?
    // Where are you from, Tom?
    // Where are you from, Penny?

    // subTitle: Countries
    // America
    // Australia
    // Canada
    // China
    // Denmark
    // England
    // France
    // Germany
    // Holland
    // India
    // Indonesia
    // Ireland
    // Italy
    // Japan
    // Malaysia
    // Mexico
    // North Korea
    // Norway
    // Philippines
    // Russia
    // Singapore
    // South Korea
    // Spain
    // Sweden
    // Switzerland
    // Thailand
    // Vietnam
    // I'm American
    // I'm French
    // I'm Japanese
    // I'm Australian, mate
    // I'm Malay, lah
    // I'm Vietnamese

    // subTitle: Talking About Family
    // children - con (pronunciation: kawn)
    // family - gia đình
    // have - có
    // husband - chồng
    // wife - vợ
    // son - con trai
    // daughter - con gái
    // yet? - chưa? (pronunciation: chuh-a?)
    // Are you married, Kim?
    // Are you married, Ken?
    // Do you have a husband yet, Kim?
    // Do you have a husband yet, Ken?
    // Do you have children yet? (To a married couple) - Anh chị đã có con chưa?
    // I'm still single. (To a female peer)
    // I'm still single. (To a male peer)
    // I'm still single. (To a younger person)
    // I'm still single. (To a person older than your parents)
    // No, I'm not married yet. (To a female peer)
    // No, I'm not married yet. (To a male peer)
    // No, I'm not married yet. (To a younger person)
    // No, I'm not married yet. (To a person older than your parents)
    // Yes, I'm married. (To a female peer)
    // Yes, I'm married. (To a male peer)
    // Yes, I'm married. (To a younger person)
    // Yes, I'm married. (To a person older than your parents)
    // Yes, I have a husband already. (To a female peer)
    // Yes, I have a husband already. (To a younger person)
    // Yes, I have a husband already. (To a person older than your parents)
    // Yes, I have a wife already. (To a male peer)
    // Yes, I have a wife already. (To a younger person)
    // Yes, I have a wife already. (To a person older than your parents)
    // Yes, we have children already. (To a female peer)
    // Yes, we have children already. (To a male peer)
    // Yes, we have children already. (To a younger person)
    // Yes, we have children already. (To a person older than your parents)
    // Not yet. We don't have any children yet. (To a female peer)
    // Not yet. We don't have any children yet. (To a male peer)
    // Not yet. We don't have any children yet. (To a younger person)
    // Not yet. We don't have any children yet. (To a person older than your parents)

    // subTitle: What Would You Like to Drink?
    // What would you like to drink? - Bạn muốn uống gì?
    // drink - uống
    // want, would like - muốn
    // What would you like to drink, Joyce? - Bạn muốn uống gì, Joyce?
    // What would you like to drink, Nick? - Bạn muốn uống gì, Nick?
    // ask, please - xin (pronounciation: seen)
    // cold water - nước lạnh
    // iced water - nước đá
    // no, not - không
    // tea - trà
    // thank - cảm ơn
    // thirsty - khát nước
    // water - nước
    // Please give me some iced water. - Xin cho tôi nước đá.
    // Please give me some tea. - Xin cho tôi trà.
    // No, thanks. I'm not thirsty. - Cảm ơn, tôi không khát nước.
    // Thank you. (To a female peer) - Cảm ơn chị.
    // Thank you. (To a male peer) - Cảm ơn anh.
    // Thank you. (To a person older than your parents) - Cảm ơn bác.
    // Thank you. (To a younger person) - Cảm ơn em.

    // subTitle: How Are You?
    // How are you? (To a female peer) - Chị khỏe không?
    // How are you? (To a male peer) - Anh khỏe không?
    // How are you? (To a person older than your parents) - Bác khỏe không?
    // How are you? (To a younger person) - Em khỏe không?
    // I'm fine. Thank you, Ron. - Tôi khỏe. Cảm ơn, Ron.
    // I'm fine. Thank you, Auntie Lien. - Cháu khỏe. Cảm ơn, dì Liên.

    // subTitle: Introducing Others
    // excuse me - xin lỗi
    // introduce - giới thiệu
    // who - ai (pronunciation: ai)
    // Who is this? - Đây là ai?
    // This is Khoa - Đây là Khoa. (pronunciation: Day làh Khwah.)
    // Excuse me. May I introduce my husband? - Xin lỗi. Tôi xin giới thiệu chồng tôi? (pronunciation: "Chồng tôi" (my husband) is the short form of "chồng của tôi" (the husband of mine), with "của" meaning "of". In everyday speech, "của" is often omitted when the meaning is clear. When in doubt, always use "của".)
    // my husband - chồng tôi
    // my wife - vợ của tôi
  ] }],
  // 'Common Expressions and Phrases': [{ cards: [
    // a little - một chút, một ít (pronunciation: moht choot, moht eet)
    // come in - vào
    // currently (happening) - đang
    // difficult - khó
    // easier, more easily - dễ hơn
    // easy - dễ
    // English language - tiếng Anh
    // explain - giải thích
    // follow - đi theo
    // go - đi
    // in (a language) - bằng
    // invite - mời
    // know, can - biết
    // language - tiếng
    // like, enjoy - thích
    // mean (verb) - nghĩa
    // more slowly - chậm hơn
    // need - cần
    // only - chỉ
    // repeat, say again - nói lại
    // sentence - câu
    // sit - ngồi
    // slow, slowly - chậm
    // speak - nói
    // understand - hiểu
    // Please speak more slowly. - Xin nói chậm hơn.
    // I don't understand. - Tôi không hiểu.
    // study, learn - học
    // translate into - dịch sang
    // understand - hiểu
    // very - lắm, rất
    // Vietnamese language - tiếng Việt
    // word - chữ
    // Please come in. - Xin mời vào.
    // Please sit down - Xin mời chị ngồi.
    // Please follow me. - Xin mời anh đi theo tôi.
    // I'm sorry. I don't understand - Xin lỗi. Tôi không hiểu.
    // Please speak more slowly. - Xin nói chậm lại.
    // Please say it again. - Xin nói lại.
    // I can only speak a little Vietnamese. - Tôi chỉ biết nói một chút tiếng Việt.
    // I'm studying Vietnamese. - Tôi đang học tiếng Việt.
    // Vietnamese is very difficult. - Tiếng Việt khó lắm. / Tiếng Việt rất khó. (pronunciation: Both "rất" and "lắm" mean "very" and can be used interchangeably in Vietnamese. Remember that "rất" precedes the word it modifies, while "lắm" follows it. In addition, "lắm" sounds more informal than "rất."
    // English is easier - Tiếng Anh dễ hơn.
    // I really enjoy studying Vietnamese. - Tôi rất thích học tiếng Việt.
    // Please explain it in English. - Xin giải thích bằng tiếng Anh.
    // Please translate this word into English. - Xin dịch chữ này sang tiếng Anh.
    // Please translate this sentence into English. - Xin dịch câu này sang tiếng Anh.
    // What does this word mean? - Chữ này nghĩa là gì?
    // What does this sentence mean? - Câu này nghĩa là gì?

  // 'Key Words (Titles, Family, Occupations)': [{ cards: [] }],
    // subTitle: Forms of Address
    // Mrs. - bà (pronunciation: bah)
    // Mr. - ông (pronunciation: ohng)
    // Miss - cô (pronunciation: koh)
    // you (female peer) - chị (pronunciation: chee)
    // you (a male peer) - anh (pronunciation: aing)
    // you (a younger person) - em (pronunciation: em)
    // you (a person older than your parents) - bác (pronunciation: báhk)
    // you (a female person younger than your parents) - cô (pronunciation: koh)
    // you (a male person younger than your parents) - chú (pronunciation: choo)
    // you (a younger person) - em (pronunciation: em)
    // you (a person as young as your own nieces/nephews) - cháu (pronunciation: chow)
    // you (a female teacher) - cô (pronunciation: koh)
    // you (a male teacher) - thầy (pronunciation: thay)

    // subTitle: Family Members and Loved Ones
    // best friend - bạn thân nhất (pronunciation: bahn thun nyut)
    // boyfriend - (pronunciation: bahn jai)
    // children - (pronunciation: kawn)
    // close friend - (pronunciation: bahn thun)
    // cousins - (pronunciation: aing chee em haw)
    // daughter - con gái (pronunciation: kawn gai)
    // family - gia đình (pronunciation: zah/yah deeng))
    // father - cha, ba, bo (chah, bah, boh)
    // girlfriend - bạn gái (pronunciation: bahn gai)
    // granddaughter - cháu gái (pronunciation: chah-oo gai)
    // grandfather - chau trai (pronunciation: chah-oo jai)
    // husband - chồng (pronunciation: chohng)
    // maternal grandfather - ông nội (pronunciation: ohng ngwai)
    // maternal grandmother - bà nội (pronunciation: bàh ngwai)
    // mother - mẹ, má, mạ (pronunciation: meh, mah, mah)
    // nephew - cháu trai (pronunciation: chah-oo jai)
    // niece - cháu gái (pronunciation: chah-oo gai)
    // older brother - anh (pronunciation: aing)
    // older sister - chị (pronunciation: chee)
    // paternal grandfather - ông noi (pronunciation: ohng noh-ee)
    // paternal grandmother - bà noi (pronunciation: bàh noh-ee)
    // son - con trai (pronunciation: kawn jai)
    // sweetheart - người yêu (pronunciation: nguh-a-ee yew)
    // wife - vợ (pronunciation: vuh)
    // younger brother - em trai (pronunciation: em jai)
    // younger sister - em gái (pronunciation: em gai)

    // subTitle: Occupations
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
};
