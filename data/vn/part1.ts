import type { CardCollection } from '../types';

/**
 * Part 1: Common Expressions and Keywords
 */
export const Part1: CardCollection = {
  'Titles and Forms of Address': [{ cards: [
    { answer: "Mrs., ma'am", question: 'bà', phrases: [
      { answer: 'Mrs. Betty lives next door.', question: 'Bà Betty sống cạnh nhà tôi.' },
    ] },
    { answer: 'Mr., Sir', question: 'ông', phrases: [
      { answer: 'Mr. John is my teacher.', question: 'Ông John là giáo viên của tôi.' },
    ] },
    { answer: 'Miss', question: 'cô', phrases: [
      { answer: 'Miss Linh is a doctor.', question: 'Cô Linh là bác sĩ.' },
    ] },
    { answer: 'you (female peer)', question: 'chị', phrases: [
      { answer: 'You have nice shoes', question: 'Chị có đôi giày đẹp.' },
    ] },
    { answer: 'you (male peer)', question: 'anh', phrases: [
      { answer: 'You are very tall', question: 'Anh rất cao.' },
    ] },
    { answer: 'you (younger person)', question: 'em', phrases: [
      { answer: 'You have a big fish', question: 'Em có con cá lớn.' },
    ] },
    { answer: 'you (person older than your parents', question: 'bác', phrases: [ // NOTE: Tone marks in the pronunciation should always follow the tone marks of the original word. This line implements this rule correctly, whereas most of the data in this file does not.
      { answer: 'You are very kind', question: 'Bác rất tốt.' },
    ] },
    // you (female younger than your parents)
    { answer: 'you (female younger than your parents)', question: 'cô', phrases: [
      { answer: 'Did you like the movie?', question: 'Cô có thích bộ phim không?' },
    ] },
    // you (male younger than your parents)
    { answer: 'you (male younger than your parents)', question: 'chú', phrases: [
      { answer: 'How was your soccer game?', question: 'Chú đá bóng thế nào?' },
    ] },
    // I (speaking to a peer)
    { answer: 'I (speaking to a peer)', question: 'tôi', phrases: [
      { answer: 'I am a student.', question: 'Tôi là học sinh.' },
    ] },
    // I (speaking to someone of your parents' generation)
    { answer: 'I (speaking to someone of your parents\' generation)', question: 'cháu', phrases: [
      { answer: 'I want you to have this gift.', question: 'Con muốn tặng bác món quà này.' },
    ] },
    // We (speaking to a peer)
    { answer: 'We (speaking to a peer)', question: 'chúng tôi', phrases: [
      { answer: 'We are going to the park.', question: 'Chúng tôi sẽ đi công viên.' },
    ] },
    // We (speaking to someone of your parents' generation)
    { answer: 'We (speaking to someone of your parents\' generation)', question: 'chúng cháu', phrases: [
      { answer: 'We are grateful for your help.', question: 'Chúng con biết ơn sự giúp đỡ của bác.' },
    ] },
  ] }],
  'Greetings and Partings': [{ cards: [
    // Good morning. / Goodbye. (To a female older than your parents)
    { answer: 'Good morning. / Goodbye. (To a female older than your parents)', question: 'Chào bà', phrases: [
      { answer: 'Good morning, ma\'am.', question: 'Chào bà ạ.' },
    ] },
    // Good afternoon. / Goodbye. (To a male older than your parents)
    { answer: 'Good afternoon. / Goodbye. (To a male older than your parents)', question: 'Chào ông', phrases: [
      { answer: 'Good afternoon, sir.', question: 'Chào ông ạ.' },
    ] },
    // Good evening. / Goodbye. (To a female younger than your parents)
    { answer: 'Good evening. / Goodbye. (To a female younger than your parents)', question: 'Chào cô', phrases: [
      { answer: 'Good evening, miss.', question: 'Chào cô ạ.' },
    ] },
    // Hello. / Goodbye. (To a female peer)
    { answer: 'Hello. / Goodbye. (To a female peer)', question: 'Chào chị', phrases: [
      { answer: 'Hello, how are you?', question: 'Chào chị, chị khỏe không?' },
    ] },
    // Hello. / Goodbye. (To a male peer)
    { answer: 'Hello. / Goodbye. (To a male peer)', question: 'Chào anh', phrases: [
      { answer: 'Hello, how are you?', question: 'Chào anh, anh khỏe không?' },
    ] },
    // Hello. / Goodbye. (To a younger person)
    { answer: 'Hello. / Goodbye. (To a younger person)', question: 'Chào em', phrases: [
      { answer: 'Hello!', question: 'Chào em!' },
    ] },
    // Hello. / Goodbye. (To a person older than your parents)
    { answer: 'Hello. / Goodbye. (To a person older than your parents)', question: 'Chào bác', phrases: [
      { answer: 'Hello.', question: 'Chào bác ạ.' },
    ] },
    // Hello. / Goodbye. (To a female person younger than your parents)
    { answer: 'Hello. / Goodbye. (To a female person younger than your parents)', question: 'Chào cô', phrases: [
      { answer: 'Hello.', question: 'Chào cô ạ.' },
    ] },
    // Hello. / Goodbye. (To a male person younger than your parents)
    { answer: 'Hello. / Goodbye. (To a male person younger than your parents)', question: 'Chào chú', phrases: [
      { answer: 'Hello.', question: 'Chào chú ạ.' },
    ] },
    // Goodbye. (More formal, to a female peer especially if you won't see them for a while)
    { answer: 'Goodbye. (More formal, to a female peer especially if you won\'t see them for a while)', question: 'Tạm biệt chị', phrases: [
      { answer: 'Goodbye, take care.', question: 'Tạm biệt chị, giữ gìn sức khỏe nhé.' },
    ] },
    // Goodbye. (More formal, to a male peer especially if you won't see them for a while)
    { answer: 'Goodbye. (More formal, to a male peer especially if you won\'t see them for a while)', question: 'Tạm biệt anh', phrases: [
      { answer: 'Goodbye, take care.', question: 'Tạm biệt anh, giữ gìn sức khỏe nhé.' },
    ] },
    // Goodbye. (More formal, to a younger person especially if you won't see them for a while)
    { answer: 'Goodbye. (More formal, to a younger person especially if you won\'t see them for a while)', question: 'Tạm biệt em', phrases: [
      { answer: 'Goodbye, take care.', question: 'Tạm biệt em, giữ gìn sức khỏe nhé.' },
    ] },
    // Goodbye. (More formal, to a person older than your parents, especially if you won't see them for a while)
    { answer: 'Goodbye. (More formal, to a person older than your parents, especially if you won\'t see them for a while)', question: 'Tạm biệt bác', phrases: [
      { answer: 'Goodbye, take care.', question: 'Tạm biệt bác, bác giữ gìn sức khỏe ạ.' },
    ] },
    // Goodbye. (More formal, to a female younger than your parents, especially if you won't see them for a while)
    { answer: 'Goodbye. (More formal, to a female younger than your parents, especially if you won\'t see them for a while)', question: 'Tạm biệt cô', phrases: [
      { answer: 'Goodbye, take care.', question: 'Tạm biệt cô, cô giữ gìn sức khỏe ạ.' },
    ] },
    // Goodbye. (More formal, to a male younger than your parents, especially if you won't see them for a while)
    { answer: 'Goodbye. (More formal, to a male younger than your parents, especially if you won\'t see them for a while)', question: 'Tạm biệt chú', phrases: [
      { answer: 'Goodbye, take care.', question: 'Tạm biệt chú, chú giữ gìn sức khỏe ạ.' },
    ] },
    // See you again. (To a female peer)
    { answer: 'See you again. (To a female peer)', question: 'Hẹn gặp lại chị', phrases: [
      { answer: 'See you again next week.', question: 'Hẹn gặp lại chị tuần sau.' },
    ] },
    // See you again. (To a male peer)
    { answer: 'See you again. (To a male peer)', question: 'Hẹn gặp lại anh', phrases: [
      { answer: 'See you again next week.', question: 'Hẹn gặp lại anh tuần sau.' },
    ] },
    // See you again. (To a younger person)
    { answer: 'See you again. (To a younger person)', question: 'Hẹn gặp lại em', phrases: [
      { answer: 'See you again next week.', question: 'Hẹn gặp lại em tuần sau.' },
    ] },
    // See you again. (To a person older than your parents)
    { answer: 'See you again. (To a person older than your parents)', question: 'Hẹn gặp lại bác', phrases: [
      { answer: 'See you again next week.', question: 'Hẹn gặp lại bác tuần sau ạ.' },
    ] },
    // See you again. (To a female person younger than your parents)
    { answer: 'See you again. (To a female person younger than your parents)', question: 'Hẹn gặp lại cô', phrases: [
      { answer: 'See you again next week.', question: 'Hẹn gặp lại cô tuần sau ạ.' },
    ] },
    // See you again. (To a male person younger than your parents)
    { answer: 'See you again. (To a male person younger than your parents)', question: 'Hẹn gặp lại chú', phrases: [
      { answer: 'See you again next week.', question: 'Hẹn gặp lại chú tuần sau ạ.' },
    ] },
  ] }],
  'Introductions': [{ cards: [
    // be - là
    { answer: 'to be', question: 'là', phrases: [
      { answer: 'I am a teacher.', question: 'Tôi là giáo viên.' },
    ] },
    // this, here - dây, đây là
    { answer: 'this, this is', question: 'đây, đây là', phrases: [
      { answer: 'This is my friend.', question: 'Đây là bạn của tôi.' },
    ] },
    // This is Mrs. Clark
    { answer: 'This is Mrs. Clark.', question: 'Đây là bà Clark.', phrases: [
      { answer: 'Mrs. Clark is a teacher.', question: 'Bà Clark là giáo viên.' },
    ] },
    // This is Mr. Cruise
    { answer: 'This is Mr. Cruise.', question: 'Đây là ông Cruise.', phrases: [
      { answer: 'Mr. Cruise is an actor.', question: 'Ông Cruise là diễn viên.' },
    ] },
    // This is Miss Kim
    { answer: 'This is Miss Kim.', question: 'Đây là cô Kim.', phrases: [
      { answer: 'Miss Kim is a doctor.', question: 'Cô Kim là bác sĩ.' },
    ] },
    // This is Sherry
    { answer: 'This is Sherry.', question: 'Đây là Sherry.', phrases: [
      { answer: 'Sherry is my sister.', question: 'Sherry là chị gái của tôi.' },
    ] },
    // This is Sean
    { answer: 'This is Sean.', question: 'Đây là Sean.', phrases: [
      { answer: 'Sean is my brother.', question: 'Sean là em trai của tôi.' },
    ] },
    // name - tên
    { answer: 'name', question: 'tên', phrases: [
      { answer: 'What is your name?', question: 'Bạn tên là gì?' },
    ] },
    // My name is Mary
    { answer: 'My name is Mary.', question: 'Tên tôi là Mary.', phrases: [
      { answer: 'Nice to meet you, Mary.', question: 'Rất vui được gặp bạn, Mary.' },
    ] },
    // My name is Tom
    { answer: 'My name is Tom.', question: 'Tên tôi là Tom.', phrases: [
      { answer: 'Nice to meet you, Tom.', question: 'Rất vui được gặp bạn, Tom.' },
    ] },
    // honored - hân hạnh
    { answer: 'honored', question: 'hân hạnh', phrases: [
      { answer: 'I am honored to meet you.', question: 'Tôi hân hạnh được gặp bạn.' },
    ] },
    // pleased, happy - vui
    { answer: 'pleased, happy', question: 'vui', phrases: [
      { answer: 'I am very happy.', question: 'Tôi rất vui.' },
    ] },
    // very - rất
    { answer: 'very', question: 'rất', phrases: [
      { answer: 'It is very good.', question: 'Nó rất tốt.' },
    ] },
    // Very pleased to meet you. (To a female peer.)
    { answer: 'Very pleased to meet you. (To a female peer.)', question: 'Rất vui được gặp chị.', phrases: [
      { answer: 'Very pleased to meet you (female peer) too.', question: 'Tôi cũng rất vui được gặp chị.' },
    ] },
    // Very pleased to meet you. (To a male peer.)
    { answer: 'Very pleased to meet you. (To a male peer.)', question: 'Rất vui được gặp anh.', phrases: [
      { answer: 'Very pleased to meet you (male peer) too.', question: 'Tôi cũng rất vui được gặp anh.' },
    ] },
    // Very pleased to meet you. (To a younger person.)
    { answer: 'Very pleased to meet you. (To a younger person.)', question: 'Rất vui được gặp em.', phrases: [
      { answer: 'Very pleased to meet you (the older person) too.', question: 'Em cũng rất vui được gặp anh chị.' },
    ] },
    // Very pleased to meet you. (To a person older than your parents.)
    { answer: 'Very pleased to meet you. (To a person older than your parents.)', question: 'Rất vui được gặp bác.', phrases: [
      { answer: 'Very pleased to meet you (the much younger person) too.', question: 'Bác cũng rất vui được gặp cháu.' },
    ] },
    // Very pleased to meet you. (To a female person younger than your parents.)
    { answer: 'Very pleased to meet you. (To a female person younger than your parents.)', question: 'Rất vui được gặp cô.', phrases: [
      { answer: 'Very pleased to meet you (the much younger person) too.', question: 'Cô cũng rất vui được gặp cháu.' },
    ] },
    // Very pleased to meet you. (To a male person younger than your parents.)
    { answer: 'Very pleased to meet you. (To a male person younger than your parents.)', question: 'Rất vui được gặp chú.', phrases: [
      { answer: 'Very pleased to meet you (the much younger person) too.', question: 'Chú cũng rất vui được gặp cháu.' },
    ] },
  ] }],
  'Common Questions and Suggested Responses': [
    {
      subTitle: 'Names',
      cards: [
        { answer: "What's your name? (To a female peer)", question: 'Chị tên là gì?', phrases: [{ answer: 'My name is Mary.', question: 'Tôi tên là Mary.' }] },
        { answer: "What's your name? (To a male peer)", question: 'Anh tên là gì?', phrases: [{ answer: 'My name is Tom.', question: 'Tôi tên là Tom.' }] },
        { answer: "What's your name? (To a younger person)", question: 'Em tên là gì?', phrases: [{ answer: 'My name is Linh.', question: 'Em tên là Linh.' }] },
        { answer: "What's your name? (To a person older than your parents)", question: 'Bác tên là gì?', phrases: [{ answer: 'My name is Ba.', question: 'Tôi tên là Ba.' }] },
        { answer: "What's your name? (To a female person younger than your parents)", question: 'Cô tên là gì?', phrases: [{ answer: 'My name is Hoa.', question: 'Tôi tên là Hoa.' }] },
        { answer: "What's your name? (To a male person younger than your parents)", question: 'Chú tên là gì?', phrases: [{ answer: 'My name is Nam.', question: 'Tôi tên là Nam.' }] },
      ],
    },
    {
      subTitle: 'Nationality',
      cards: [
        { answer: 'country', question: 'nước', phrases: [{ answer: 'Which country?', question: 'Nước nào?' }] },
        { answer: 'person', question: 'người', phrases: [{ answer: 'He is a good person.', question: 'Anh ấy là người tốt.' }] },
        { answer: 'which?', question: 'nào?', phrases: [{ answer: 'Which one do you want?', question: 'Bạn muốn cái nào?' }] },
        { answer: 'Where are you from, Tom?', question: 'Tom là người nước nào?', phrases: [{ answer: "I'm American.", question: 'Tôi là người Mỹ.' }] },
        { answer: 'Where are you from, Penny?', question: 'Penny là người nước nào?', phrases: [{ answer: "I'm Australian.", question: 'Tôi là người Úc.' }] },
      ],
    },
    {
      subTitle: 'Countries',
      cards: [
        { answer: 'America', question: 'Mỹ', phrases: [{ answer: 'I want to go to America.', question: 'Tôi muốn đi Mỹ.' }] },
        { answer: 'Australia', question: 'Úc', phrases: [{ answer: 'I want to go to Australia.', question: 'Tôi muốn đi Úc.' }] },
        { answer: 'Canada', question: 'Ca-na-đa', phrases: [{ answer: 'I want to go to Canada.', question: 'Tôi muốn đi Ca-na-đa.' }] },
        { answer: 'China', question: 'Trung Quốc', phrases: [{ answer: 'I want to go to China.', question: 'Tôi muốn đi Trung Quốc.' }] },
        { answer: 'Denmark', question: 'Đan Mạch', phrases: [{ answer: 'I want to go to Denmark.', question: 'Tôi muốn đi Đan Mạch.' }] },
        { answer: 'England', question: 'Anh', phrases: [{ answer: 'I want to go to England.', question: 'Tôi muốn đi Anh.' }] },
        { answer: 'France', question: 'Pháp', phrases: [{ answer: 'I want to go to France.', question: 'Tôi muốn đi Pháp.' }] },
        { answer: 'Germany', question: 'Đức', phrases: [{ answer: 'I want to go to Germany.', question: 'Tôi muốn đi Đức.' }] },
        { answer: 'Holland', question: 'Hà Lan', phrases: [{ answer: 'I want to go to Holland.', question: 'Tôi muốn đi Hà Lan.' }] },
        { answer: 'India', question: 'Ấn Độ', phrases: [{ answer: 'I want to go to India.', question: 'Tôi muốn đi Ấn Độ.' }] },
        { answer: 'Indonesia', question: 'In-đô-nê-xi-a', phrases: [{ answer: 'I want to go to Indonesia.', question: 'Tôi muốn đi In-đô-nê-xi-a.' }] },
        { answer: 'Ireland', question: 'Ai-len', phrases: [{ answer: 'I want to go to Ireland.', question: 'Tôi muốn đi Ai-len.' }] },
        { answer: 'Italy', question: 'Ý', phrases: [{ answer: 'I want to go to Italy.', question: 'Tôi muốn đi Ý.' }] },
        { answer: 'Japan', question: 'Nhật Bản', phrases: [{ answer: 'I want to go to Japan.', question: 'Tôi muốn đi Nhật Bản.' }] },
        { answer: 'Malaysia', question: 'Ma-lai-xi-a', phrases: [{ answer: 'I want to go to Malaysia.', question: 'Tôi muốn đi Ma-lai-xi-a.' }] },
        { answer: 'Mexico', question: 'Mê-hi-cô', phrases: [{ answer: 'I want to go to Mexico.', question: 'Tôi muốn đi Mê-hi-cô.' }] },
        { answer: 'North Korea', question: 'Bắc Triều Tiên', phrases: [{ answer: 'I want to go to North Korea.', question: 'Tôi muốn đi Bắc Triều Tiên.' }] },
        { answer: 'Norway', question: 'Na Uy', phrases: [{ answer: 'I want to go to Norway.', question: 'Tôi muốn đi Na Uy.' }] },
        { answer: 'Philippines', question: 'Phi-líp-pin', phrases: [{ answer: 'I want to go to the Philippines.', question: 'Tôi muốn đi Phi-líp-pin.' }] },
        { answer: 'Russia', question: 'Nga', phrases: [{ answer: 'I want to go to Russia.', question: 'Tôi muốn đi Nga.' }] },
        { answer: 'Singapore', question: 'Xin-ga-po', phrases: [{ answer: 'I want to go to Singapore.', question: 'Tôi muốn đi Xin-ga-po.' }] },
        { answer: 'South Korea', question: 'Hàn Quốc', phrases: [{ answer: 'I want to go to South Korea.', question: 'Tôi muốn đi Hàn Quốc.' }] },
        { answer: 'Spain', question: 'Tây Ban Nha', phrases: [{ answer: 'I want to go to Spain.', question: 'Tôi muốn đi Tây Ban Nha.' }] },
        { answer: 'Sweden', question: 'Thụy Điển', phrases: [{ answer: 'I want to go to Sweden.', question: 'Tôi muốn đi Thụy Điển.' }] },
        { answer: 'Switzerland', question: 'Thụy Sĩ', phrases: [{ answer: 'I want to go to Switzerland.', question: 'Tôi muốn đi Thụy Sĩ.' }] },
        { answer: 'Thailand', question: 'Thái Lan', phrases: [{ answer: 'I want to go to Thailand.', question: 'Tôi muốn đi Thái Lan.' }] },
        { answer: 'Vietnam', question: 'Việt Nam', phrases: [{ answer: 'I want to go to Vietnam.', question: 'Tôi muốn đi Việt Nam.' }] },
        { answer: "I'm American", question: 'Tôi là người Mỹ.', phrases: [{ answer: 'I come from America.', question: 'Tôi đến từ Mỹ.' }] },
        { answer: "I'm French", question: 'Tôi là người Pháp.', phrases: [{ answer: 'I come from France.', question: 'Tôi đến từ Pháp.' }] },
        { answer: "I'm Japanese", question: 'Tôi là người Nhật.', phrases: [{ answer: 'I come from Japan.', question: 'Tôi đến từ Nhật Bản.' }] },
        { answer: "I'm Australian, mate", question: 'Tôi là người Úc.', phrases: [{ answer: 'I come from Australia.', question: 'Tôi đến từ Úc.' }] },
        { answer: "I'm Malay, lah", question: 'Tôi là người Mã Lai.', phrases: [{ answer: 'I come from Malaysia.', question: 'Tôi đến từ Ma-lai-xi-a.' }] },
        { answer: "I'm Vietnamese", question: 'Tôi là người Việt Nam.', phrases: [{ answer: 'I come from Vietnam.', question: 'Tôi đến từ Việt Nam.' }] },
      ],
    },
    {
      subTitle: 'Talking About Family',
      cards: [
        { answer: 'children', question: 'con', phrases: [{ answer: 'I have two children.', question: 'Tôi có hai con.' }] },
        { answer: 'family', question: 'gia đình', phrases: [{ answer: 'My family is big.', question: 'Gia đình tôi lớn.' }] },
        { answer: 'have', question: 'có', phrases: [{ answer: 'I have a car.', question: 'Tôi có xe hơi.' }] },
        { answer: 'husband', question: 'chồng', phrases: [{ answer: 'My husband is a doctor.', question: 'Chồng tôi là bác sĩ.' }] },
        { answer: 'wife', question: 'vợ', phrases: [{ answer: 'My wife is a teacher.', question: 'Vợ tôi là giáo viên.' }] },
        { answer: 'son', question: 'con trai', phrases: [{ answer: 'I have one son.', question: 'Tôi có một con trai.' }] },
        { answer: 'daughter', question: 'con gái', phrases: [{ answer: 'I have one daughter.', question: 'Tôi có một con gái.' }] },
        { answer: 'yet?', question: 'chưa?', phrases: [{ answer: 'Are you done yet?', question: 'Bạn xong chưa?' }] },
        { answer: 'Are you married, Kim?', question: 'Chị đã kết hôn chưa, Kim?', phrases: [{ answer: "Yes, I'm married.", question: 'Vâng, tôi đã kết hôn rồi.' }] },
        { answer: 'Are you married, Ken?', question: 'Anh đã kết hôn chưa, Ken?', phrases: [{ answer: "No, I'm not married yet.", question: 'Chưa, tôi chưa kết hôn.' }] },
        { answer: 'Do you have a husband yet, Kim?', question: 'Chị có chồng chưa, Kim?', phrases: [{ answer: 'Yes, I have a husband already.', question: 'Vâng, tôi đã có chồng rồi.' }] },
        { answer: 'Do you have a wife yet, Ken?', question: 'Anh có vợ chưa, Ken?', phrases: [{ answer: 'No, not yet.', question: 'Chưa, chưa có.' }] },
        { answer: 'Do you have children yet? (To a married couple)', question: 'Anh chị đã có con chưa?', phrases: [{ answer: 'Yes, we have children already.', question: 'Vâng, chúng tôi đã có con rồi.' }] },
        { answer: "I'm still single. (To a female peer)", question: 'Tôi vẫn còn độc thân.', phrases: [{ answer: "I don't have a boyfriend yet.", question: 'Tôi chưa có bạn trai.' }] },
        { answer: "I'm still single. (To a male peer)", question: 'Tôi vẫn còn độc thân.', phrases: [{ answer: "I don't have a girlfriend yet.", question: 'Tôi chưa có bạn gái.' }] },
        { answer: "I'm still single. (To a younger person)", question: 'Tôi vẫn còn độc thân.', phrases: [{ answer: 'I live alone.', question: 'Tôi sống một mình.' }] },
        { answer: "I'm still single. (To a person older than your parents)", question: 'Dạ, cháu vẫn còn độc thân ạ.', phrases: [{ answer: "I'm not married yet.", question: 'Cháu chưa kết hôn ạ.' }] },
        { answer: "No, I'm not married yet. (To a female peer)", question: 'Chưa, tôi chưa kết hôn.', phrases: [{ answer: 'Maybe next year.', question: 'Có lẽ năm sau.' }] },
        { answer: "No, I'm not married yet. (To a male peer)", question: 'Chưa, tôi chưa kết hôn.', phrases: [{ answer: 'Maybe next year.', question: 'Có lẽ năm sau.' }] },
        { answer: "No, I'm not married yet. (To a younger person)", question: 'Chưa, tôi chưa kết hôn.', phrases: [{ answer: 'Not yet.', question: 'Chưa đâu.' }] },
        { answer: "No, I'm not married yet. (To a person older than your parents)", question: 'Dạ chưa, cháu chưa kết hôn ạ.', phrases: [{ answer: "Not yet.", question: 'Dạ chưa ạ.' }] },
        { answer: "Yes, I'm married. (To a female peer)", question: 'Vâng, tôi đã kết hôn rồi.', phrases: [{ answer: 'I have a daughter.', question: 'Tôi có một con gái.' }] },
        { answer: "Yes, I'm married. (To a male peer)", question: 'Vâng, tôi đã kết hôn rồi.', phrases: [{ answer: 'I have a son.', question: 'Tôi có một con trai.' }] },
        { answer: "Yes, I'm married. (To a younger person)", question: 'Vâng, tôi đã kết hôn rồi.', phrases: [{ answer: 'We are very happy.', question: 'Chúng tôi rất hạnh phúc.' }] },
        { answer: "Yes, I'm married. (To a person older than your parents)", question: 'Dạ, cháu đã kết hôn rồi ạ.', phrases: [{ answer: 'Two years ago.', question: 'Cháu kết hôn hai năm trước ạ.' }] },
        { answer: 'Yes, I have a husband already. (To a female peer)', question: 'Vâng, tôi đã có chồng rồi.', phrases: [{ answer: 'His name is Minh.', question: 'Anh ấy tên là Minh.' }] },
        { answer: 'Yes, I have a husband already. (To a younger person)', question: 'Chị đã có chồng rồi.', phrases: [{ answer: 'His name is Minh.', question: 'Anh ấy tên là Minh.' }] },
        { answer: 'Yes, I have a husband already. (To a person older than your parents)', question: 'Dạ, cháu đã có chồng rồi ạ.', phrases: [{ answer: 'My husband is named Minh.', question: 'Chồng cháu tên là Minh ạ.' }] },
        { answer: 'Yes, I have a wife already. (To a male peer)', question: 'Vâng, tôi đã có vợ rồi.', phrases: [{ answer: 'Her name is Lan.', question: 'Cô ấy tên là Lan.' }] },
        { answer: 'Yes, I have a wife already. (To a younger person)', question: 'Anh đã có vợ rồi.', phrases: [{ answer: 'Her name is Lan.', question: 'Cô ấy tên là Lan.' }] },
        { answer: 'Yes, I have a wife already. (To a person older than your parents)', question: 'Dạ, cháu đã có vợ rồi ạ.', phrases: [{ answer: 'My wife is named Lan.', question: 'Vợ cháu tên là Lan ạ.' }] },
        { answer: 'Yes, we have children already. (To a female peer)', question: 'Vâng, chúng tôi đã có con rồi.', phrases: [{ answer: 'We have two children.', question: 'Chúng tôi có hai con.' }] },
        { answer: 'Yes, we have children already. (To a male peer)', question: 'Vâng, chúng tôi đã có con rồi.', phrases: [{ answer: 'We have two children.', question: 'Chúng tôi có hai con.' }] },
        { answer: 'Yes, we have children already. (To a younger person)', question: 'Vâng, chúng tôi đã có con rồi.', phrases: [{ answer: 'A boy and a girl.', question: 'Một trai một gái.' }] },
        { answer: 'Yes, we have children already. (To a person older than your parents)', question: 'Dạ, chúng cháu đã có con rồi ạ.', phrases: [{ answer: 'We have two children.', question: 'Chúng cháu có hai con ạ.' }] },
        { answer: "Not yet. We don't have any children yet. (To a female peer)", question: 'Chưa. Chúng tôi chưa có con.', phrases: [{ answer: 'Maybe in the future.', question: 'Có lẽ trong tương lai.' }] },
        { answer: "Not yet. We don't have any children yet. (To a male peer)", question: 'Chưa. Chúng tôi chưa có con.', phrases: [{ answer: 'Maybe in the future.', question: 'Có lẽ trong tương lai.' }] },
        { answer: "Not yet. We don't have any children yet. (To a younger person)", question: 'Chưa. Chúng tôi chưa có con.', phrases: [{ answer: 'We just got married.', question: 'Chúng tôi mới kết hôn.' }] },
        { answer: "Not yet. We don't have any children yet. (To a person older than your parents)", question: 'Dạ chưa. Chúng cháu chưa có con ạ.', phrases: [{ answer: 'Not yet.', question: 'Dạ chưa ạ.' }] },
      ],
    },
    {
      subTitle: 'What Would You Like to Drink?',
      cards: [
        { answer: 'What would you like to drink?', question: 'Bạn muốn uống gì?', phrases: [{ answer: 'I would like some water.', question: 'Tôi muốn uống nước.' }] },
        { answer: 'drink', question: 'uống', phrases: [{ answer: 'I drink water.', question: 'Tôi uống nước.' }] },
        { answer: 'want, would like', question: 'muốn', phrases: [{ answer: 'I want some tea.', question: 'Tôi muốn trà.' }] },
        { answer: 'What would you like to drink, Joyce?', question: 'Bạn muốn uống gì, Joyce?', phrases: [{ answer: 'I would like some tea.', question: 'Tôi muốn uống trà.' }] },
        { answer: 'What would you like to drink, Nick?', question: 'Bạn muốn uống gì, Nick?', phrases: [{ answer: 'I would like some iced water.', question: 'Tôi muốn uống nước đá.' }] },
        { answer: 'ask, please', question: 'xin', phrases: [{ answer: 'Please give me water.', question: 'Xin cho tôi nước.' }] },
        { answer: 'cold water', question: 'nước lạnh', phrases: [{ answer: 'I want cold water.', question: 'Tôi muốn nước lạnh.' }] },
        { answer: 'iced water', question: 'nước đá', phrases: [{ answer: 'Please give me iced water.', question: 'Xin cho tôi nước đá.' }] },
        { answer: 'no, not', question: 'không', phrases: [{ answer: "I'm not thirsty.", question: 'Tôi không khát nước.' }] },
        { answer: 'tea', question: 'trà', phrases: [{ answer: 'I like tea.', question: 'Tôi thích trà.' }] },
        { answer: 'thank', question: 'cảm ơn', phrases: [{ answer: 'Thank you very much.', question: 'Cảm ơn rất nhiều.' }] },
        { answer: 'thirsty', question: 'khát nước', phrases: [{ answer: 'I am thirsty.', question: 'Tôi khát nước.' }] },
        { answer: 'water', question: 'nước', phrases: [{ answer: 'I want some water.', question: 'Tôi muốn nước.' }] },
        { answer: 'Please give me some iced water.', question: 'Xin cho tôi nước đá.', phrases: [{ answer: 'Thank you.', question: 'Cảm ơn.' }] },
        { answer: 'Please give me some tea.', question: 'Xin cho tôi trà.', phrases: [{ answer: 'Thank you very much.', question: 'Cảm ơn nhiều.' }] },
        { answer: "No, thanks. I'm not thirsty.", question: 'Cảm ơn, tôi không khát nước.', phrases: [{ answer: 'Maybe later.', question: 'Có lẽ lát nữa.' }] },
        { answer: 'Thank you. (To a female peer)', question: 'Cảm ơn chị.', phrases: [{ answer: "You're welcome.", question: 'Không có gì.' }] },
        { answer: 'Thank you. (To a male peer)', question: 'Cảm ơn anh.', phrases: [{ answer: "You're welcome.", question: 'Không có gì.' }] },
        { answer: 'Thank you. (To a person older than your parents)', question: 'Cảm ơn bác.', phrases: [{ answer: "You're welcome.", question: 'Không có gì.' }] },
        { answer: 'Thank you. (To a younger person)', question: 'Cảm ơn em.', phrases: [{ answer: "You're welcome.", question: 'Không có gì.' }] },
      ],
    },
    {
      subTitle: 'How Are You?',
      cards: [
        { answer: 'How are you? (To a female peer)', question: 'Chị khỏe không?', phrases: [{ answer: "I'm fine, thank you.", question: 'Tôi khỏe, cảm ơn.' }] },
        { answer: 'How are you? (To a male peer)', question: 'Anh khỏe không?', phrases: [{ answer: "I'm fine, thank you.", question: 'Tôi khỏe, cảm ơn.' }] },
        { answer: 'How are you? (To a person older than your parents)', question: 'Bác khỏe không?', phrases: [{ answer: "I'm fine, thank you.", question: 'Bác khỏe, cảm ơn cháu.' }] },
        { answer: 'How are you? (To a younger person)', question: 'Em khỏe không?', phrases: [{ answer: "I'm fine, thank you.", question: 'Em khỏe, cảm ơn anh.' }] },
        { answer: "I'm fine. Thank you, Ron.", question: 'Tôi khỏe. Cảm ơn, Ron.', phrases: [{ answer: 'And you?', question: 'Còn bạn?' }] },
        { answer: "I'm fine. Thank you, Auntie Lien.", question: 'Cháu khỏe. Cảm ơn, dì Liên.', phrases: [{ answer: 'And you, auntie?', question: 'Còn dì?' }] },
      ],
    },
    {
      subTitle: 'Introducing Others',
      cards: [
        { answer: 'excuse me', question: 'xin lỗi', phrases: [{ answer: 'Excuse me, may I ask?', question: 'Xin lỗi, cho tôi hỏi?' }] },
        { answer: 'introduce', question: 'giới thiệu', phrases: [{ answer: 'Let me introduce my friend.', question: 'Tôi xin giới thiệu bạn tôi.' }] },
        { answer: 'who', question: 'ai', phrases: [{ answer: 'Who is this?', question: 'Đây là ai?' }] },
        { answer: 'Who is this?', question: 'Đây là ai?', phrases: [{ answer: 'This is my friend.', question: 'Đây là bạn của tôi.' }] },
        { answer: 'This is Khoa', question: 'Đây là Khoa.', phrases: [{ answer: 'Khoa is my younger brother.', question: 'Khoa là em trai tôi.' }] },
        { answer: 'Excuse me. May I introduce my husband?', question: 'Xin lỗi. Tôi xin giới thiệu chồng tôi.', phrases: [{ answer: 'Nice to meet you.', question: 'Rất vui được gặp.' }] },
        { answer: 'my husband', question: 'chồng tôi', phrases: [{ answer: 'My husband is a teacher.', question: 'Chồng tôi là giáo viên.' }] },
        { answer: 'my wife', question: 'vợ của tôi', phrases: [{ answer: 'My wife is a doctor.', question: 'Vợ của tôi là bác sĩ.' }] },
      ],
    },
  ],
  'Common Expressions and Phrases': [{ cards: [
    { answer: 'a little', question: 'một chút, một ít', phrases: [{ answer: 'I speak a little Vietnamese.', question: 'Tôi nói một chút tiếng Việt.' }] },
    { answer: 'come in', question: 'vào', phrases: [{ answer: 'Please come in.', question: 'Xin mời vào.' }] },
    { answer: 'currently (happening)', question: 'đang', phrases: [{ answer: 'I am eating.', question: 'Tôi đang ăn.' }] },
    { answer: 'difficult', question: 'khó', phrases: [{ answer: 'This is difficult.', question: 'Cái này khó.' }] },
    { answer: 'easier, more easily', question: 'dễ hơn', phrases: [{ answer: 'English is easier.', question: 'Tiếng Anh dễ hơn.' }] },
    { answer: 'easy', question: 'dễ', phrases: [{ answer: 'This is easy.', question: 'Cái này dễ.' }] },
    { answer: 'English language', question: 'tiếng Anh', phrases: [{ answer: 'I speak English.', question: 'Tôi nói tiếng Anh.' }] },
    { answer: 'explain', question: 'giải thích', phrases: [{ answer: 'Please explain.', question: 'Xin giải thích.' }] },
    { answer: 'follow', question: 'đi theo', phrases: [{ answer: 'Follow me.', question: 'Đi theo tôi.' }] },
    { answer: 'go', question: 'đi', phrases: [{ answer: 'I go to school.', question: 'Tôi đi học.' }] },
    { answer: 'in (a language)', question: 'bằng', phrases: [{ answer: 'Please explain in English.', question: 'Xin giải thích bằng tiếng Anh.' }] },
    { answer: 'invite', question: 'mời', phrases: [{ answer: 'I invite you to dinner.', question: 'Tôi mời bạn ăn tối.' }] },
    { answer: 'know, can', question: 'biết', phrases: [{ answer: 'I know how to speak Vietnamese.', question: 'Tôi biết nói tiếng Việt.' }] },
    { answer: 'language', question: 'tiếng', phrases: [{ answer: 'Which language?', question: 'Tiếng gì?' }] },
    { answer: 'like, enjoy', question: 'thích', phrases: [{ answer: 'I like coffee.', question: 'Tôi thích cà phê.' }] },
    { answer: 'mean (verb)', question: 'nghĩa', phrases: [{ answer: 'What does it mean?', question: 'Nó nghĩa là gì?' }] },
    { answer: 'more slowly', question: 'chậm hơn', phrases: [{ answer: 'Please speak more slowly.', question: 'Xin nói chậm hơn.' }] },
    { answer: 'need', question: 'cần', phrases: [{ answer: 'I need help.', question: 'Tôi cần giúp đỡ.' }] },
    { answer: 'only', question: 'chỉ', phrases: [{ answer: 'I only speak a little.', question: 'Tôi chỉ nói một chút.' }] },
    { answer: 'repeat, say again', question: 'nói lại', phrases: [{ answer: 'Please say it again.', question: 'Xin nói lại.' }] },
    { answer: 'sentence', question: 'câu', phrases: [{ answer: 'This sentence is long.', question: 'Câu này dài.' }] },
    { answer: 'sit', question: 'ngồi', phrases: [{ answer: 'Please sit down.', question: 'Xin mời ngồi.' }] },
    { answer: 'slow, slowly', question: 'chậm', phrases: [{ answer: 'Please speak slowly.', question: 'Xin nói chậm.' }] },
    { answer: 'speak', question: 'nói', phrases: [{ answer: 'I speak Vietnamese.', question: 'Tôi nói tiếng Việt.' }] },
    { answer: 'understand', question: 'hiểu', phrases: [{ answer: "I don't understand.", question: 'Tôi không hiểu.' }] },
    { answer: 'study, learn', question: 'học', phrases: [{ answer: 'I study Vietnamese.', question: 'Tôi học tiếng Việt.' }] },
    { answer: 'translate into', question: 'dịch sang', phrases: [{ answer: 'Please translate into English.', question: 'Xin dịch sang tiếng Anh.' }] },
    { answer: 'very', question: 'lắm, rất', phrases: [{ answer: 'It is very good.', question: 'Nó rất tốt.' }] },
    { answer: 'Vietnamese language', question: 'tiếng Việt', phrases: [{ answer: 'I am learning Vietnamese.', question: 'Tôi đang học tiếng Việt.' }] },
    { answer: 'word', question: 'chữ', phrases: [{ answer: 'What does this word mean?', question: 'Chữ này nghĩa là gì?' }] },
    { answer: 'Please come in.', question: 'Xin mời vào.', phrases: [{ answer: 'Welcome.', question: 'Chào mừng.' }] },
    { answer: 'Please sit down', question: 'Xin mời chị ngồi.', phrases: [{ answer: 'Thank you.', question: 'Cảm ơn.' }] },
    { answer: 'Please follow me.', question: 'Xin mời anh đi theo tôi.', phrases: [{ answer: 'This way.', question: 'Lối này.' }] },
    { answer: "I'm sorry. I don't understand", question: 'Xin lỗi. Tôi không hiểu.', phrases: [{ answer: 'Please repeat.', question: 'Xin nói lại.' }] },
    { answer: 'Please speak more slowly.', question: 'Xin nói chậm hơn.', phrases: [{ answer: 'Please speak slowly.', question: 'Xin nói chậm lại.' }] },
    { answer: 'Please say it again.', question: 'Xin nói lại.', phrases: [{ answer: 'One more time.', question: 'Một lần nữa.' }] },
    { answer: 'I can only speak a little Vietnamese.', question: 'Tôi chỉ biết nói một chút tiếng Việt.', phrases: [{ answer: 'I am still learning.', question: 'Tôi vẫn đang học.' }] },
    { answer: "I'm studying Vietnamese.", question: 'Tôi đang học tiếng Việt.', phrases: [{ answer: 'It is interesting.', question: 'Nó thú vị.' }] },
    { answer: 'Vietnamese is very difficult.', question: 'Tiếng Việt khó lắm.', phrases: [{ answer: 'Vietnamese is very difficult.', question: 'Tiếng Việt rất khó.' }] },
    { answer: 'English is easier', question: 'Tiếng Anh dễ hơn.', phrases: [{ answer: 'But it is still hard.', question: 'Nhưng vẫn còn khó.' }] },
    { answer: 'I really enjoy studying Vietnamese.', question: 'Tôi rất thích học tiếng Việt.', phrases: [{ answer: 'It is fun.', question: 'Nó vui.' }] },
    { answer: 'Please explain it in English.', question: 'Xin giải thích bằng tiếng Anh.', phrases: [{ answer: "I don't understand Vietnamese.", question: 'Tôi không hiểu tiếng Việt.' }] },
    { answer: 'Please translate this word into English.', question: 'Xin dịch chữ này sang tiếng Anh.', phrases: [{ answer: 'What does it mean?', question: 'Nó nghĩa là gì?' }] },
    { answer: 'Please translate this sentence into English.', question: 'Xin dịch câu này sang tiếng Anh.', phrases: [{ answer: 'Thank you very much.', question: 'Cảm ơn rất nhiều.' }] },
    { answer: 'What does this word mean?', question: 'Chữ này nghĩa là gì?', phrases: [{ answer: "I don't know this word.", question: 'Tôi không biết chữ này.' }] },
    { answer: 'What does this sentence mean?', question: 'Câu này nghĩa là gì?', phrases: [{ answer: 'It is difficult.', question: 'Nó khó.' }] },
  ] }],
  'Key Words (Titles, Family, Occupations)': [
    {
      subTitle: 'Forms of Address',
      cards: [
        { answer: 'Mrs.', question: 'bà', phrases: [{ answer: 'Hello, Mrs. Lan.', question: 'Chào bà Lan.' }] },
        { answer: 'Mr.', question: 'ông', phrases: [{ answer: 'Hello, sir.', question: 'Chào ông.' }] },
        { answer: 'Miss', question: 'cô', phrases: [{ answer: 'Hello, miss.', question: 'Chào cô.' }] },
        { answer: 'you (female peer)', question: 'chị', phrases: [{ answer: 'How are you?', question: 'Chị khỏe không?' }] },
        { answer: 'you (a male peer)', question: 'anh', phrases: [{ answer: 'How are you?', question: 'Anh khỏe không?' }] },
        { answer: 'you (a younger person)', question: 'em', phrases: [{ answer: 'How are you?', question: 'Em khỏe không?' }] },
        { answer: 'you (a person older than your parents)', question: 'bác', phrases: [{ answer: 'How are you?', question: 'Bác khỏe không?' }] },
        { answer: 'you (a female person younger than your parents)', question: 'cô', phrases: [{ answer: 'Hello.', question: 'Chào cô.' }] },
        { answer: 'you (a male person younger than your parents)', question: 'chú', phrases: [{ answer: 'Hello.', question: 'Chào chú.' }] },
        { answer: 'you (a person as young as your own nieces/nephews)', question: 'cháu', phrases: [{ answer: 'What is your name?', question: 'Cháu tên là gì?' }] },
        { answer: 'you (a female teacher)', question: 'cô', phrases: [{ answer: 'Hello, teacher.', question: 'Chào cô.' }] },
        { answer: 'you (a male teacher)', question: 'thầy', phrases: [{ answer: 'Hello, teacher.', question: 'Chào thầy.' }] },
      ],
    },
    {
      subTitle: 'Family Members and Loved Ones',
      cards: [
        { answer: 'best friend', question: 'bạn thân nhất', phrases: [{ answer: 'This is my best friend.', question: 'Đây là bạn thân nhất của tôi.' }] },
        { answer: 'boyfriend', question: 'bạn trai', phrases: [{ answer: 'This is my boyfriend.', question: 'Đây là bạn trai của tôi.' }] },
        { answer: 'children', question: 'con', phrases: [{ answer: 'These are my children.', question: 'Đây là các con của tôi.' }] },
        { answer: 'close friend', question: 'bạn thân', phrases: [{ answer: 'This is my close friend.', question: 'Đây là bạn thân của tôi.' }] },
        { answer: 'cousins', question: 'anh chị em họ', phrases: [{ answer: 'They are my cousins.', question: 'Họ là anh chị em họ của tôi.' }] },
        { answer: 'daughter', question: 'con gái', phrases: [{ answer: 'This is my daughter.', question: 'Đây là con gái của tôi.' }] },
        { answer: 'family', question: 'gia đình', phrases: [{ answer: 'This is my family.', question: 'Đây là gia đình của tôi.' }] },
        { answer: 'father', question: 'cha, ba, bố', phrases: [{ answer: 'This is my father.', question: 'Đây là cha của tôi.' }] },
        { answer: 'girlfriend', question: 'bạn gái', phrases: [{ answer: 'This is my girlfriend.', question: 'Đây là bạn gái của tôi.' }] },
        { answer: 'granddaughter', question: 'cháu gái', phrases: [{ answer: 'This is my granddaughter.', question: 'Đây là cháu gái của tôi.' }] },
        { answer: 'husband', question: 'chồng', phrases: [{ answer: 'This is my husband.', question: 'Đây là chồng của tôi.' }] },
        { answer: 'maternal grandfather', question: 'ông ngoại', phrases: [{ answer: 'This is my maternal grandfather.', question: 'Đây là ông ngoại của tôi.' }] },
        { answer: 'maternal grandmother', question: 'bà ngoại', phrases: [{ answer: 'This is my maternal grandmother.', question: 'Đây là bà ngoại của tôi.' }] },
        { answer: 'mother', question: 'mẹ, má, mạ', phrases: [{ answer: 'This is my mother.', question: 'Đây là mẹ của tôi.' }] },
        { answer: 'nephew', question: 'cháu trai', phrases: [{ answer: 'This is my nephew.', question: 'Đây là cháu trai của tôi.' }] },
        { answer: 'niece', question: 'cháu gái', phrases: [{ answer: 'This is my niece.', question: 'Đây là cháu gái của tôi.' }] },
        { answer: 'older brother', question: 'anh', phrases: [{ answer: 'This is my older brother.', question: 'Đây là anh của tôi.' }] },
        { answer: 'older sister', question: 'chị', phrases: [{ answer: 'This is my older sister.', question: 'Đây là chị của tôi.' }] },
        { answer: 'paternal grandfather', question: 'ông nội', phrases: [{ answer: 'This is my paternal grandfather.', question: 'Đây là ông nội của tôi.' }] },
        { answer: 'paternal grandmother', question: 'bà nội', phrases: [{ answer: 'This is my paternal grandmother.', question: 'Đây là bà nội của tôi.' }] },
        { answer: 'son', question: 'con trai', phrases: [{ answer: 'This is my son.', question: 'Đây là con trai của tôi.' }] },
        { answer: 'sweetheart', question: 'người yêu', phrases: [{ answer: 'This is my sweetheart.', question: 'Đây là người yêu của tôi.' }] },
        { answer: 'wife', question: 'vợ', phrases: [{ answer: 'This is my wife.', question: 'Đây là vợ của tôi.' }] },
        { answer: 'younger brother', question: 'em trai', phrases: [{ answer: 'This is my younger brother.', question: 'Đây là em trai của tôi.' }] },
        { answer: 'younger sister', question: 'em gái', phrases: [{ answer: 'This is my younger sister.', question: 'Đây là em gái của tôi.' }] },
      ],
    },
    {
      subTitle: 'Occupations',
      cards: [
        { answer: 'architect', question: 'kiến trúc sư', phrases: [{ answer: 'I am an architect.', question: 'Tôi là kiến trúc sư.' }] },
        { answer: 'college student', question: 'sinh viên', phrases: [{ answer: 'I am a college student.', question: 'Tôi là sinh viên.' }] },
        { answer: 'dentist', question: 'nha sĩ', phrases: [{ answer: 'I am a dentist.', question: 'Tôi là nha sĩ.' }] },
        { answer: 'director', question: 'giám đốc', phrases: [{ answer: 'I am a director.', question: 'Tôi là giám đốc.' }] },
        { answer: 'doctor', question: 'bác sĩ', phrases: [{ answer: 'I am a doctor.', question: 'Tôi là bác sĩ.' }] },
        { answer: 'elementary/high school student', question: 'học sinh', phrases: [{ answer: 'I am a student.', question: 'Tôi là học sinh.' }] },
        { answer: 'employee', question: 'nhân viên', phrases: [{ answer: 'I am an employee.', question: 'Tôi là nhân viên.' }] },
        { answer: 'employer (female)', question: 'bà chủ', phrases: [{ answer: 'She is my employer.', question: 'Bà ấy là bà chủ của tôi.' }] },
        { answer: 'employer (male)', question: 'ông chủ', phrases: [{ answer: 'He is my employer.', question: 'Ông ấy là ông chủ của tôi.' }] },
        { answer: 'engineer', question: 'kỹ sư', phrases: [{ answer: 'I am an engineer.', question: 'Tôi là kỹ sư.' }] },
        { answer: 'entrepreneur', question: 'doanh nhân', phrases: [{ answer: 'I am an entrepreneur.', question: 'Tôi là doanh nhân.' }] },
        { answer: 'factory worker', question: 'công nhân', phrases: [{ answer: 'I am a factory worker.', question: 'Tôi là công nhân.' }] },
        { answer: 'farmer', question: 'nông dân', phrases: [{ answer: 'I am a farmer.', question: 'Tôi là nông dân.' }] },
        { answer: 'interpreter / translator', question: 'thông dịch viên', phrases: [{ answer: 'I am an interpreter.', question: 'Tôi là thông dịch viên.' }] },
        { answer: 'lawyer', question: 'luật sư', phrases: [{ answer: 'I am a lawyer.', question: 'Tôi là luật sư.' }] },
        { answer: 'nurse', question: 'y tá', phrases: [{ answer: 'I am a nurse.', question: 'Tôi là y tá.' }] },
        { answer: 'pharmacist', question: 'dược sĩ', phrases: [{ answer: 'I am a pharmacist.', question: 'Tôi là dược sĩ.' }] },
        { answer: 'professor', question: 'giáo sư', phrases: [{ answer: 'I am a professor.', question: 'Tôi là giáo sư.' }] },
        { answer: 'reporter', question: 'phóng viên', phrases: [{ answer: 'I am a reporter.', question: 'Tôi là phóng viên.' }] },
        { answer: 'secretary', question: 'thư ký', phrases: [{ answer: 'I am a secretary.', question: 'Tôi là thư ký.' }] },
        { answer: 'teacher (female)', question: 'cô giáo', phrases: [{ answer: 'She is a teacher.', question: 'Cô ấy là cô giáo.' }] },
        { answer: 'teacher (male)', question: 'thầy giáo', phrases: [{ answer: 'He is a teacher.', question: 'Ông ấy là thầy giáo.' }] },
        { answer: 'vice president (of a company)', question: 'phó giám đốc', phrases: [{ answer: 'I am a vice president.', question: 'Tôi là phó giám đốc.' }] },
      ],
    },
  ],
};
