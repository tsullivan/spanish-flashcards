import type { CardCollection } from '../types';

/**
 * Introduction: Pronunciation Guide,
 */
export const Introduction: CardCollection = {
  'The Tone System': [
    {
      cards: [
        {
          answer: 'ghost',
          question: 'ma',
          phrases: [
            { answer: 'level tone - no symbol - relatively high pitch', question: 'ma' },
            { answer: 'I think I saw a ghost!', question: 'Tôi nghĩ tôi đã nhìn thấy một con ma!' },
            { answer: 'Do you believe in ghosts?', question: 'Bạn có tin vào ma không?' },
            { answer: 'That house has a ghost.', question: 'Ngôi nhà đó có ma.' },
            { answer: "I'm not afraid of ghosts.", question: 'Tôi không sợ ma.' },
          ],
        },
        {
          answer: 'mother',
          question: 'má',
          phrases: [
            { answer: 'rising tone - acute accent - very high pitch', question: 'má' },
            { answer: 'My mother is very kind.', question: 'Má tôi rất hiền.' },
            { answer: 'I love my mom.', question: 'Tôi yêu má.' },
            { answer: 'Where are you, Mom?', question: 'Má ơi, má đâu rồi?' },
            { answer: 'My mom cooks delicious food.', question: 'Má nấu ăn rất ngon.' },
          ],
        },
        {
          answer: 'but; who/that/which',
          question: 'mà',
          phrases: [
            { answer: 'falling tone - grave accent - rather low pitch', question: 'mà' },
            { answer: 'I want to go, but I have to work.', question: 'Tôi muốn đi, mà tôi phải làm việc.' },
            { answer: 'The book that I bought is very interesting.', question: 'Cuốn sách mà tôi mua rất thú vị.' },
            { answer: 'The person who is speaking is my teacher.', question: 'Người mà đang nói là thầy tôi.' },
            { answer: 'She is small but strong.', question: 'Cô ấy nhỏ mà khỏe.' },
          ],
        },
        {
          answer: 'grave, tomb',
          question: 'mả',
          phrases: [
            { answer: 'low-rising tone - question mark minus the dot - starts at a low pitch and then rises', question: 'mả' },
            { answer: "Let's visit the tomb.", question: 'Chúng ta hãy đi thăm mả.' },
            { answer: 'The tomb is very old.', question: 'Mả rất cổ.' },
            { answer: "This is my grandfather's tomb.", question: 'Đây là mả của ông tôi.' },
            { answer: 'They are building a tomb.', question: 'Họ đang xây mả.' },
          ],
        },
        {
          answer: 'horse',
          question: 'mã',
          phrases: [
            { answer: 'broken, low-rising - tilde - starts low and rises abruptly, causing an initial stop in the voice box inside the throat', question: 'mã' },
            { answer: 'I have a horse.', question: 'Tôi có một con mã.' },
            { answer: 'The horse is very fast.', question: 'Con mã rất nhanh.' },
            { answer: "That horse's name is Dash.", question: 'Con mã đó tên là Dash.' },
            { answer: 'Dash is a lazy horse.', question: 'Dash là một con mã lười biếng.' },
          ],
        },
        {
          answer: 'rice seedling',
          question: 'mạ',
          phrases: [
            { answer: 'lowest tone - dot below - lowest possible pitch', question: 'mạ' },
            { answer: 'The rice seedling is green.', question: 'Mạ có màu xanh.' },
            { answer: 'The rice seedling is growing.', question: 'Mạ đang lớn lên.' },
            { answer: 'I bought us a rice seedling.', question: 'Tôi đã mua cho chúng ta một cây mạ.' },
            { answer: 'The farmer plants rice seedlings.', question: 'Người nông dân trồng mạ.' },
          ],
        },
      ],
    },
  ],
  'The Vowel System': [
    {
      showQuestionFirstAlways: true,
      subTitle: 'Single Vowels',
      cards: [
        {
          question: 'a',
          answer: 'as in "calm"',
          phrases: [
            { answer: 'to be', question: 'là' },
            { answer: 'to do', question: 'làm' },
            { answer: 'three; dad', question: 'ba' },
            { answer: 'father', question: 'cha' },
            { answer: 'far', question: 'xa' },
          ],
        },
        {
          question: 'ă',
          answer: 'as in "hot"',
          phrases: [
            { answer: 'to eat', question: 'ăn' },
            { answer: 'blanket', question: 'chăn' },
            { answer: 'towel, scarf', question: 'khăn' },
            { answer: 'salty', question: 'mặn' },
            { answer: 'to hold, to grasp', question: 'nắm' },
          ],
        },
        {
          question: 'â',
          answer: 'as in "run"',
          phrases: [
            { answer: 'foot, leg', question: 'chân' },
            { answer: 'near', question: 'gần' },
            { answer: 'heart, mind', question: 'tâm' },
            { answer: 'to need', question: 'cần' },
            { answer: 'busy', question: 'bận' },
          ],
        },
        {
          question: 'e',
          answer: 'as in "bed"',
          phrases: [
            { answer: 'younger sibling', question: 'em' },
            { answer: 'vehicle', question: 'xe' },
            { answer: 'to praise', question: 'khen' },
            { answer: 'mother', question: 'mẹ' },
            { answer: 'cricket', question: 'dế' },
          ],
        },
        {
          question: 'ê',
          answer: 'as in "day"',
          phrases: [
            { answer: 'goat', question: 'dê' },
            { answer: 'to come', question: 'đến' },
            { answer: 'name', question: 'tên' },
            { answer: 'night', question: 'đêm' },
            { answer: 'tired', question: 'mệt' },
          ],
        },
        {
          question: 'i',
          answer: 'as in "need"',
          phrases: [
            { answer: 'to go', question: 'đi' },
            { answer: 'when', question: 'khi' },
            { answer: 'to take an exam', question: 'thi' },
            { answer: 'noodles', question: 'mì' },
            { answer: 'wallet', question: 'ví' },
          ],
        },
        {
          question: 'o',
          answer: 'as in "lawn"',
          phrases: [
            { answer: 'to have', question: 'có' },
            { answer: 'child; classifier for animals', question: 'con' },
            { answer: 'big', question: 'to' },
            { answer: 'cow', question: 'bò' },
            { answer: 'they, them', question: 'họ' },
          ],
        },
        {
          question: 'ô',
          answer: 'as in "oh"',
          phrases: [
            { answer: 'aunt; Miss', question: 'cô' },
            { answer: 'number', question: 'số' },
            { answer: 'bowl', question: 'tô' },
            { answer: 'lake', question: 'hồ' },
            { answer: 'to hug', question: 'ôm' },
          ],
        },
        {
          question: 'ơ',
          answer: 'as in "sofa"',
          phrases: [
            { answer: 'to dream', question: 'mơ' },
            { answer: 'butter, avocado', question: 'bơ' },
            { answer: 'silk', question: 'tơ' },
            { answer: 'to wait', question: 'chờ' },
            { answer: 'to open', question: 'mở' },
          ],
        },
        {
          question: 'u',
          answer: 'as in "food"',
          phrases: [
            { answer: 'to sleep', question: 'ngủ' },
            { answer: 'autumn', question: 'thu' },
            { answer: 'blind', question: 'mù' },
            { answer: 'old (used)', question: 'cũ' },
            { answer: 'enough', question: 'đủ' },
          ],
        },
        {
          question: 'ư',
          answer: 'as in "huh"',
          phrases: [
            { answer: 'letter (correspondence)', question: 'thư' },
            { answer: 'fourth; private', question: 'tư' },
            { answer: 'word, written character', question: 'chữ' },
            { answer: 'from; word', question: 'từ' },
            { answer: 'to keep, to hold', question: 'giữ' },
          ],
        },
        {
          question: 'y',
          answer: 'as in "need"',
          phrases: [
            { answer: 'meaning, idea', question: 'ý' },
            { answer: 'to sign', question: 'ký' },
            { answer: 'reason', question: 'lý' },
            { answer: 'period, term', question: 'kỳ' },
            { answer: 'billion', question: 'tỷ' },
          ],
        },
      ],
    },
    {
      showQuestionFirstAlways: true,
      subTitle: 'Vowel Combinations',
      cards: [
        {
          question: 'ai',
          answer: 'as in "Thailand" or "eye"',
          phrases: [
            { answer: 'two', question: 'hai' },
            { answer: 'who', question: 'ai' },
            { answer: 'ear', question: 'tai' },
            { answer: 'long', question: 'dài' },
            { answer: 'wrong, incorrect', question: 'sai' },
          ],
        },
        {
          question: 'ao',
          answer: 'as in "town" or "cow"',
          phrases: [
            { answer: 'tall, high', question: 'cao' },
            { answer: 'star', question: 'sao' },
            { answer: 'bag', question: 'bao' },
            { answer: 'shirt', question: 'áo' },
            { answer: 'knife', question: 'dao' },
          ],
        },
        {
          question: 'au',
          answer: 'a combination of "ah" as in "hot" and "oo" as in "food"',
          phrases: [
            { answer: 'vegetable', question: 'rau' },
            { answer: 'after, behind', question: 'sau' },
            { answer: 'fast', question: 'mau' },
            { answer: 'to hurt, painful', question: 'đau' },
            { answer: 'color', question: 'màu' },
          ],
        },
        {
          question: 'ay',
          answer: 'a combination of "ah" as in "hot" and "ee" as in "need"',
          phrases: [
            { answer: 'to fly', question: 'bay' },
            { answer: 'hand', question: 'tay' },
            { answer: 'good, interesting', question: 'hay' },
            { answer: 'machine', question: 'máy' },
            { answer: 'today', question: 'nay' },
          ],
        },
        {
          question: 'âu',
          answer: 'a combination of "o" as in "oh" and "oo" as in "food"',
          phrases: [
            { answer: 'sentence', question: 'câu' },
            { answer: 'where', question: 'đâu' },
            { answer: 'deep', question: 'sâu' },
            { answer: 'bridge', question: 'cầu' },
            { answer: 'brown', question: 'nâu' },
          ],
        },
        {
          question: 'ây',
          answer: 'as in "may"',
          phrases: [
            { answer: 'tree', question: 'cây' },
            { answer: 'string, wire', question: 'dây' },
            { answer: 'cloud', question: 'mây' },
            { answer: 'to take, to get', question: 'lấy' },
            { answer: 'to see', question: 'thấy' },
          ],
        },
        {
          question: 'eo',
          answer: 'a combination of "e" as in "bed" and "oo" as in "food"',
          phrases: [
            { answer: 'pig', question: 'heo' },
            { answer: 'candy', question: 'kẹo' },
            { answer: 'to climb', question: 'leo' },
            { answer: 'cat', question: 'mèo' },
            { answer: 'to follow', question: 'theo' },
          ],
        },
        {
          question: 'êu',
          answer: 'a combination of "ay" as in "day" and "oo" as in "food"',
          phrases: [
            { answer: 'to call, to shout', question: 'kêu' },
            { answer: 'to state, to raise', question: 'nêu' },
            { answer: 'equal, evenly', question: 'đều' },
            { answer: 'if', question: 'nếu' },
            { answer: 'tent', question: 'lều' },
          ],
        },
        {
          question: 'ia',
          answer: 'as in "dear"',
          phrases: [
            { answer: 'that, over there', question: 'kia' },
            { answer: 'beer', question: 'bia' },
            { answer: 'to divide', question: 'chia' },
            { answer: 'sugarcane', question: 'mía' },
            { answer: 'side, direction', question: 'phía' },
          ],
        },
        {
          question: 'iê',
          answer: 'as in "yes"',
          phrases: [
            { answer: 'to know', question: 'biết' },
            { answer: 'money', question: 'tiền' },
            { answer: 'work, task', question: 'việc' },
            { answer: 'electricity', question: 'điện' },
            { answer: 'classifier for objects', question: 'chiếc' },
          ],
        },
        {
          question: 'iu',
          answer: 'as in "hew"',
          phrases: [
            { answer: 'to endure, to bear', question: 'chịu' },
            { answer: 'gentle, mild', question: 'dịu' },
            { answer: 'axe', question: 'rìu' },
            { answer: 'tiny, a little bit', question: 'xíu' },
            { answer: 'stale, spoiled', question: 'thiu' },
          ],
        },
        {
          question: 'oa',
          answer: '"wa" as in "memoir"',
          phrases: [
            { answer: 'flower', question: 'hoa' },
            { answer: 'faculty, department', question: 'khoa' },
            { answer: 'train car', question: 'toa' },
            { answer: 'lock; course (of study)', question: 'khóa' },
            { answer: 'loudspeaker', question: 'loa' },
          ],
        },
        {
          question: 'oe',
          answer: 'as in "quest"',
          phrases: [
            { answer: 'healthy, well', question: 'khỏe' },
            { answer: 'to spread out, to fan out', question: 'xòe' },
            { answer: 'reddish, bright red', question: 'hoe' },
            { answer: 'to show off, to boast', question: 'khoe' },
            { answer: 'flared, splayed out', question: 'loe' },
          ],
        },
        {
          question: 'oi',
          answer: 'as in "toy"',
          phrases: [
            { answer: 'to say', question: 'nói' },
            { answer: 'to ask', question: 'hỏi' },
            { answer: 'to watch, to look after', question: 'coi' },
            { answer: 'hungry', question: 'đói' },
            { answer: 'to wrap; a package', question: 'gói' },
          ],
        },
        {
          question: 'ôi',
          answer: 'a combination of "o" as in "oh" and "ee" as in "need"',
          phrases: [
            { answer: 'I, me', question: 'tôi' },
            { answer: 'lips', question: 'môi' },
            { answer: 'to stop; enough', question: 'thôi' },
            { answer: 'pair, couple', question: 'đôi' },
            { answer: 'already', question: 'rồi' },
          ],
        },
        {
          question: 'ơi',
          answer: 'a combination of "a" as in "sofa" and "ee" as in "need"',
          phrases: [
            { answer: 'to play', question: 'chơi' },
            { answer: 'sky, heaven', question: 'trời' },
            { answer: 'to swim', question: 'bơi' },
            { answer: 'life', question: 'đời' },
            { answer: 'to invite', question: 'mời' },
          ],
        },
        {
          question: 'ua/uâ',
          answer:
            '"wa" as in "qualm" when preceded by "q"; elsewhere a combination of "oo" as in "food" and "a" as in "sofa"',
          phrases: [
            { answer: 'to buy', question: 'mua' },
            { answer: 'to dance', question: 'múa' },
            { answer: 'spring (season)', question: 'xuân' },
            { answer: 'season', question: 'mùa' },
            { answer: 'week', question: 'tuần' },
          ],
        },
        {
          question: 'uê',
          answer: 'as in "sway"',
          phrases: [
            { answer: 'to rent, to hire', question: 'thuê' },
            { answer: 'hometown, countryside', question: 'quê' },
            { answer: 'Hue (city)', question: 'Huế' },
            { answer: 'wisdom, intellect', question: 'tuệ' },
            { answer: 'lily', question: 'huệ' },
          ],
        },
        {
          question: 'ui',
          answer: 'as in "gooey"',
          phrases: [
            { answer: 'happy, fun', question: 'vui' },
            { answer: 'mountain', question: 'núi' },
            { answer: 'bag, pocket', question: 'túi' },
            { answer: 'dust', question: 'bụi' },
            { answer: 'unlucky', question: 'xui' },
          ],
        },
        {
          question: 'uô',
          answer: 'a combination of "oo" as in "food" and "o" as in "oh"',
          phrases: [
            { answer: 'to want', question: 'muốn' },
            { answer: 'sad', question: 'buồn' },
            { answer: 'bell', question: 'chuông' },
            { answer: 'medicine', question: 'thuốc' },
            { answer: 'to drink', question: 'uống' },
          ],
        },
        {
          question: 'uơ',
          answer: 'as in "twirl"',
          // "uơ" is extremely rare; "thuở" and "huơ" are essentially the only words
          // that use it. Intentionally fewer than five rather than pad with rare words.
          phrases: [
            { answer: 'period, era', question: 'thuở' },
            { answer: 'to wave, to swing', question: 'huơ' },
          ],
        },
        {
          question: 'uy',
          answer: 'as in "tweet"',
          phrases: [
            { answer: 'although', question: 'tuy' },
            { answer: 'to think over; to decline', question: 'suy' },
            { answer: 'jade green', question: 'thúy' },
            { answer: 'danger', question: 'nguy' },
            { answer: 'only, sole', question: 'duy' },
          ],
        },
        {
          question: 'ưa',
          answer: 'a combination of "uh" as in "huh" and "a" as in "sofa"',
          phrases: [
            { answer: 'rain', question: 'mưa' },
            { answer: 'not yet', question: 'chưa' },
            { answer: 'door', question: 'cửa' },
            { answer: 'noon', question: 'trưa' },
            { answer: 'to hand, to give', question: 'đưa' },
          ],
        },
        {
          question: 'ưi',
          answer: 'a combination of "uh" as in "huh" and "ee" as in "need"',
          // "ưi" is rare; gửi, ngửi, chửi, and cửi are about the only common words.
          // Intentionally fewer than five rather than pad with rare words.
          phrases: [
            { answer: 'to send', question: 'gửi' },
            { answer: 'to smell', question: 'ngửi' },
            { answer: 'to curse, to scold', question: 'chửi' },
            { answer: 'loom (for weaving)', question: 'cửi' },
          ],
        },
        {
          question: 'ươ',
          answer: 'a combination of "uh" as in "huh" and "a" as in "sofa"',
          phrases: [
            { answer: 'water', question: 'nước' },
            { answer: 'to be able to; to get', question: 'được' },
            { answer: 'school', question: 'trường' },
            { answer: 'to love, to feel for', question: 'thương' },
            { answer: 'garden', question: 'vườn' },
          ],
        },
        {
          question: 'ưu',
          answer: 'a combination of "uh" as in "huh" and "oo" as in "food"',
          phrases: [
            { answer: 'sheep', question: 'cừu' },
            { answer: 'postal', question: 'bưu' },
            { answer: 'to keep, to retain', question: 'lưu' },
            { answer: 'to retire', question: 'hưu' },
            { answer: 'scheme, plot', question: 'mưu' },
          ],
        },
        {
          question: 'iêu',
          answer: 'as in "yew"',
          phrases: [
            { answer: 'many, much', question: 'nhiều' },
            { answer: 'to understand', question: 'hiểu' },
            { answer: 'afternoon', question: 'chiều' },
            { answer: 'pepper; to spend', question: 'tiêu' },
            { answer: 'thing, matter', question: 'điều' },
          ],
        },
        {
          question: 'oai',
          answer: 'as in "twice" or "why"',
          phrases: [
            { answer: 'outside', question: 'ngoài' },
            { answer: 'potato, yam', question: 'khoai' },
            { answer: 'mango', question: 'xoài' },
            { answer: 'species, kind', question: 'loài' },
            { answer: 'continuously, in vain', question: 'hoài' },
          ],
        },
        {
          question: 'uôi',
          answer: 'a combination of "oo" as in "food" and "ee" as in "need"',
          phrases: [
            { answer: 'age', question: 'tuổi' },
            { answer: 'banana', question: 'chuối' },
            { answer: 'last, final', question: 'cuối' },
            { answer: 'mosquito', question: 'muỗi' },
            { answer: 'to raise, to nurture', question: 'nuôi' },
          ],
        },
        {
          question: 'uya',
          answer: 'a combination of "wee" as in "tweet" and "a" as in "sofa"',
          // "uya" occurs almost exclusively in "khuya"; no other common word uses it.
          // Intentionally a single example rather than pad with rare words.
          phrases: [{ answer: 'late at night', question: 'khuya' }],
        },
        {
          question: 'uyê',
          answer: 'a combination of "wee" as in "tweet" and "ay" as in "may"',
          phrases: [
            { answer: 'story', question: 'chuyện' },
            { answer: 'snow', question: 'tuyết' },
            { answer: 'whole, original', question: 'nguyên' },
            { answer: 'district', question: 'huyện' },
            { answer: 'right, power', question: 'quyền' },
          ],
        },
        {
          question: 'ươi',
          answer: 'a combination of "uh" as in "huh", "a" as in "sofa", and "ee" as in "need"',
          phrases: [
            { answer: 'person', question: 'người' },
            { answer: 'to laugh, to smile', question: 'cười' },
            { answer: 'ten', question: 'mười' },
            { answer: 'fresh', question: 'tươi' },
            { answer: 'pomelo', question: 'bưởi' },
          ],
        },
        {
          question: 'ươu',
          answer: 'a combination of "uh" as in "huh", "a" as in "sofa", and "oo" as in "food"',
          // "ươu" is rare; hươu, rượu, bướu, and khướu are about the only common words.
          // Intentionally fewer than five rather than pad with rare words.
          phrases: [
            { answer: 'deer', question: 'hươu' },
            { answer: 'alcohol, wine', question: 'rượu' },
            { answer: 'lump, tumor, hump', question: 'bướu' },
            { answer: 'laughing thrush (a bird)', question: 'khướu' },
          ],
        },
      ],
    },
  ],
  'The Consonant System': [
    {
      showQuestionFirstAlways: true,
      subTitle: 'Initial Consonants: Single Consonants',
      cards: [
        {
          question: 'b',
          answer: 'as in "bet" but softer',
          phrases: [
            { answer: 'three; dad', question: 'ba' },
            { answer: 'table', question: 'bàn' },
            { answer: 'little; small child', question: 'bé' },
            { answer: 'four', question: 'bốn' },
            { answer: 'sea', question: 'biển' },
          ],
        },
        {
          question: 'c',
          answer: 'as in "can" but softer',
          phrases: [
            { answer: 'fish', question: 'cá' },
            { answer: 'cooked rice', question: 'cơm' },
            { answer: 'child; classifier for animals', question: 'con' },
            { answer: 'tree', question: 'cây' },
            { answer: 'to have', question: 'có' },
          ],
        },
        {
          question: 'd',
          answer: '"z" as in "zenith" (Northern dialects); otherwise, "y" as in "yes"',
          phrases: [
            { answer: 'skin', question: 'da' },
            { answer: 'knife', question: 'dao' },
            { answer: 'long', question: 'dài' },
            { answer: 'easy', question: 'dễ' },
            { answer: 'to use', question: 'dùng' },
          ],
        },
        {
          question: 'đ',
          answer: 'as in "dean" but softer',
          phrases: [
            { answer: 'to go', question: 'đi' },
            { answer: 'beautiful', question: 'đẹp' },
            { answer: 'road; sugar', question: 'đường' },
            { answer: 'to arrive, to come', question: 'đến' },
            { answer: 'red', question: 'đỏ' },
          ],
        },
        {
          question: 'g',
          answer: 'as in "get" but softer',
          pronunciation: 'In the Northern dialects, "gi" is pronounced like "zee" with a falling tone in the question word "gì" (what), and pronounced "z" in other words that begin with "gi", such as "gia", "giờ", and "giấy". In the Southern dialects, "gi" is pronounced like "yee" with a falling tone in the question word "gì", and pronounced "y" in other words that begin with "gi".',
          phrases: [
            { answer: 'station', question: 'ga' },
            { answer: 'chicken', question: 'gà' },
            { answer: 'uncooked rice', question: 'gạo' },
            { answer: 'near', question: 'gần' },
            { answer: 'bear', question: 'gấu' },
          ],
        },
        {
          question: 'h',
          answer: 'as in "how"',
          phrases: [
            { answer: 'two', question: 'hai' },
            { answer: 'to study', question: 'học' },
            { answer: 'flower', question: 'hoa' },
            { answer: 'to ask', question: 'hỏi' },
            { answer: 'to sing', question: 'hát' },
          ],
        },
        {
          question: 'k',
          answer: 'as in "can" but softer',
          phrases: [
            { answer: 'cream, ice cream', question: 'kem' },
            { answer: 'candy', question: 'kẹo' },
            { answer: 'that, over there', question: 'kia' },
            { answer: 'to call, to shout', question: 'kêu' },
            { answer: 'glasses; to respect', question: 'kính' },
          ],
        },
        {
          question: 'l',
          answer: 'as in "loan"',
          phrases: [
            { answer: 'leaf', question: 'lá' },
            { answer: 'to be', question: 'là' },
            { answer: 'to do', question: 'làm' },
            { answer: 'big, large', question: 'lớn' },
            { answer: 'cold', question: 'lạnh' },
          ],
        },
        {
          question: 'm',
          answer: 'as in "mean"',
          phrases: [
            { answer: 'mother', question: 'mẹ' },
            { answer: 'to buy', question: 'mua' },
            { answer: 'rain', question: 'mưa' },
            { answer: 'new', question: 'mới' },
            { answer: 'to want', question: 'muốn' },
          ],
        },
        {
          question: 'n',
          answer: 'as in "new"',
          phrases: [
            { answer: 'it; he', question: 'nó' },
            { answer: 'water', question: 'nước' },
            { answer: 'to say', question: 'nói' },
            { answer: 'hot', question: 'nóng' },
            { answer: 'five; year', question: 'năm' },
          ],
        },
        {
          question: 'q',
          answer: '"kw" as in "quart" (Northern dialects); otherwise, "w" as in "well"',
          phrases: [
            { answer: 'hometown, countryside', question: 'quê' },
            { answer: 'gift', question: 'quà' },
            { answer: 'to forget', question: 'quên' },
            { answer: 'fruit', question: 'quả' },
            { answer: 'pants, trousers', question: 'quần' },
          ],
        },
        {
          question: 'r',
          answer: 'as in "read"; "z" as in "zenith" in some Northern dialects',
          phrases: [
            { answer: 'to go out', question: 'ra' },
            { answer: 'vegetable', question: 'rau' },
            { answer: 'alcohol, wine', question: 'rượu' },
            { answer: 'very', question: 'rất' },
            { answer: 'cheap', question: 'rẻ' },
          ],
        },
        {
          question: 's',
          answer: 'as in "soul"',
          phrases: [
            { answer: 'star', question: 'sao' },
            { answer: 'river', question: 'sông' },
            { answer: 'milk', question: 'sữa' },
            { answer: 'book', question: 'sách' },
            { answer: 'morning', question: 'sáng' },
          ],
        },
        {
          question: 't',
          answer: 'as in "steam"',
          phrases: [
            { answer: 'hand', question: 'tay' },
            { answer: 'good', question: 'tốt' },
            { answer: 'we, I', question: 'ta' },
            { answer: 'I, me', question: 'tôi' },
            { answer: 'name', question: 'tên' },
          ],
        },
        {
          question: 'v',
          answer: 'as in "voice"; "y" as in "young" in some Southern dialects',
          phrases: [
            { answer: 'and', question: 'và' },
            { answer: 'happy, fun', question: 'vui' },
            { answer: 'to return', question: 'về' },
            { answer: 'wife', question: 'vợ' },
            { answer: 'to enter', question: 'vào' },
          ],
        },
        {
          question: 'x',
          answer: '"s" as in "soul"',
          phrases: [
            { answer: 'vehicle', question: 'xe' },
            { answer: 'far', question: 'xa' },
            { answer: 'blue, green', question: 'xanh' },
            { answer: 'to watch, to see', question: 'xem' },
            { answer: 'please; to ask for', question: 'xin' },
          ],
        },
      ],
    },
    {
      showQuestionFirstAlways: true,
      subTitle: 'Initial Consonants: Consonant Combinations',
      cards: [
        {
          question: 'ch',
          answer: 'as in "chain" or "cheese"',
          phrases: [
            { answer: 'father', question: 'cha' },
            { answer: 'dog', question: 'chó' },
            { answer: 'market', question: 'chợ' },
            { answer: 'older sister', question: 'chị' },
            { answer: 'to play', question: 'chơi' },
          ],
        },
        {
          question: 'gh',
          answer: 'as in "get" but softer',
          phrases: [
            { answer: 'chair', question: 'ghế' },
            { answer: 'to note, to record', question: 'ghi' },
            { answer: 'to drop by', question: 'ghé' },
            { answer: 'jealous', question: 'ghen' },
            { answer: 'sea crab', question: 'ghẹ' },
          ],
        },
        {
          question: 'kh',
          answer: 'as in "Bach"',
          phrases: [
            { answer: 'no, not', question: 'không' },
            { answer: 'difficult', question: 'khó' },
            { answer: 'guest', question: 'khách' },
            { answer: 'when', question: 'khi' },
            { answer: 'healthy, well', question: 'khỏe' },
          ],
        },
        {
          question: 'ng/ngh',
          answer: 'as in "longing" or "singing"',
          phrases: [
            { answer: 'day', question: 'ngày' },
            { answer: 'to listen', question: 'nghe' },
            { answer: 'person', question: 'người' },
            { answer: 'delicious', question: 'ngon' },
            { answer: 'to think', question: 'nghĩ' },
          ],
        },
        {
          question: 'nh',
          answer: 'as in "lasagna" or "canyon"',
          phrases: [
            { answer: 'house', question: 'nhà' },
            { answer: 'small', question: 'nhỏ' },
            { answer: 'fast', question: 'nhanh' },
            { answer: 'many, much', question: 'nhiều' },
            { answer: 'to remember, to miss', question: 'nhớ' },
          ],
        },
        {
          question: 'ph',
          answer: 'as in "farmer" or "phone"',
          phrases: [
            { answer: 'pho (noodle soup)', question: 'phở' },
            { answer: 'room', question: 'phòng' },
            { answer: 'right; must', question: 'phải' },
            { answer: 'movie, film', question: 'phim' },
            { answer: 'minute', question: 'phút' },
          ],
        },
        {
          question: 'th',
          answer: 'as in "thank" or "thin"',
          phrases: [
            { answer: 'teacher', question: 'thầy' },
            { answer: 'to like', question: 'thích' },
            { answer: 'letter (correspondence)', question: 'thư' },
            { answer: 'month', question: 'tháng' },
            { answer: 'to try', question: 'thử' },
          ],
        },
        {
          question: 'tr',
          answer: '"j" as in "joy"',
          phrases: [
            { answer: 'tea', question: 'trà' },
            { answer: 'sky, heaven', question: 'trời' },
            { answer: 'school', question: 'trường' },
            { answer: 'young', question: 'trẻ' },
            { answer: 'white', question: 'trắng' },
          ],
        },
      ],
    },
    {
      showQuestionFirstAlways: true,
      subTitle: 'Final Consonants',
      cards: [
        {
          question: '-c',
          answer: 'as in "back" but unreleased',
          pronunciation: 'When the letter "a" is followed by a final "c", it doesn\'t change its quality',
          phrases: [
            { answer: 'plural marker', question: 'các' },
            { answer: 'to study', question: 'học' },
            { answer: 'water', question: 'nước' },
            { answer: 'hair (on the head)', question: 'tóc' },
            { answer: 'to read', question: 'đọc' },
          ],
        },
        {
          question: '-m',
          answer: 'as in "team"',
          phrases: [
            { answer: 'younger sibling', question: 'em' },
            { answer: 'cooked rice', question: 'cơm' },
            { answer: 'five; year', question: 'năm' },
            { answer: 'to do, to make', question: 'làm' },
            { answer: 'shrimp', question: 'tôm' },
          ],
        },
        {
          question: '-n',
          answer: 'as in "tan"',
          phrases: [
            { answer: 'child; classifier for animals', question: 'con' },
            { answer: 'table', question: 'bàn' },
            { answer: 'name', question: 'tên' },
            { answer: 'four', question: 'bốn' },
            { answer: 'to go up', question: 'lên' },
          ],
        },
        {
          question: '-p',
          answer: 'as in "sap" but unreleased',
          phrases: [
            { answer: 'beautiful', question: 'đẹp' },
            { answer: 'to meet (a gathering)', question: 'họp' },
            { answer: 'to meet, to encounter', question: 'gặp' },
            { answer: 'class, grade', question: 'lớp' },
            { answer: 'to practice; notebook', question: 'tập' },
          ],
        },
        {
          question: '-t',
          answer: 'as in "at" but unreleased',
          phrases: [
            { answer: 'good', question: 'tốt' },
            { answer: 'one', question: 'một' },
            { answer: 'to lose', question: 'mất' },
            { answer: 'to write', question: 'viết' },
            { answer: 'few, little', question: 'ít' },
          ],
        },
        {
          question: '-ch',
          answer: 'as in "back" but unreleased',
          pronunciation: 'When the letter "a" is followed by a final "ch", it is pronounced like "ai."',
          phrases: [
            // first two do NOT follow "a" (regular sound); the rest follow "a" (pronounced like "ai")
            { answer: 'to like', question: 'thích' },
            { answer: 'frog', question: 'ếch' },
            { answer: 'book', question: 'sách' },
            { answer: 'guest', question: 'khách' },
            { answer: 'way, method', question: 'cách' },
          ],
        },
        {
          question: '-ng',
          answer: 'as in "long"',
          phrases: [
            { answer: 'come over', question: 'sang' },
            { answer: 'river', question: 'sông' },
            { answer: 'to plant, to grow', question: 'trồng' },
            { answer: 'correct, right', question: 'đúng' },
            { answer: 'heavy', question: 'nặng' },
          ],
        },
        {
          question: '-nh',
          answer: '"ng" as in "long"',
          pronunciation: 'When "a" is followed by a final "nh", it is pronounced like "ai."',
          phrases: [
            { answer: 'be born', question: 'sanh' },
            { answer: 'older brother', question: 'anh' },
            { answer: 'fast', question: 'nhanh' },
            { answer: 'blue, green', question: 'xanh' },
            { answer: 'cold', question: 'lạnh' },
          ],
        },
      ],
    },
  ],
};
