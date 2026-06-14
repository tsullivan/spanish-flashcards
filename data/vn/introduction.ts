import type { CardCollection } from '../types';

/**
 * Introduction: Pronunciation Guide,
 */
export const Introduction: CardCollection = {
  'The Tone System': [
    {
      cards: [
        // ghost - ma
        {
          answer: 'ghost',
          question: 'ma',
          phrases: [{ answer: 'level tone - no symbol - relatively high pitch', question: 'ma' }],
        },
        // mother - má
        {
          answer: 'mother',
          question: 'má',
          phrases: [{ answer: 'rising tone - acute accent - very high pitch', question: 'má' }],
        },
        // but; who/that/which - mà
        {
          answer: 'but; who/that/which',
          question: 'mà',
          phrases: [{ answer: 'falling tone - grave accent - rather low pitch', question: 'mà' }],
        },
        // tomb - mả
        {
          answer: 'grave, tomb',
          question: 'mả',
          phrases: [
            {
              answer: 'low-rising tone - question mark minus the dot - starts at a low pitch and then rises',
              question: 'mả',
            },
          ],
        },
        // horse - mã
        {
          answer: 'horse',
          question: 'mã',
          phrases: [
            {
              answer:
                'broken, low-rising - tilde - starts low and rises abruptly, causing an initial stop in the voice box inside the throat',
              question: 'mã',
            },
          ],
        },
        // rice seedling - mạ
        {
          answer: 'rice seedling',
          question: 'mạ',
          phrases: [{ answer: 'lowest tone - dot below - lowest possible pitch', question: 'mạ' }],
        },
      ],
    },
  ],
  'The Vowel System': [
    {
      showQuestionFirstAlways: true,
      subTitle: 'Single Vowels',
      cards: [
        // a - as in calm
        {
          question: 'a',
          answer: 'as in "calm"',
          phrases: [
            { answer: 'grandmother; she (older woman)', question: 'bà' },
            { answer: 'to be', question: 'là' },
            { answer: 'to do', question: 'làm' },
          ],
        },
        // ă - as in hot
        {
          question: 'ă',
          answer: 'as in "hot"',
          phrases: [
            { answer: 'to eat', question: 'ăn' },
            { answer: 'blanket', question: 'chăn' },
            { answer: 'towel, scarf', question: 'khăn' },
          ],
        },
        // â - as in run
        {
          question: 'â',
          answer: 'as in "run"',
          phrases: [
            { answer: 'foot, leg', question: 'chân' },
            { answer: 'near', question: 'gần' },
            { answer: 'heart, mind', question: 'tâm' },
          ],
        },
        // e - as in bed
        {
          question: 'e',
          answer: 'as in "bed"',
          phrases: [
            { answer: 'younger sibling', question: 'em' },
            { answer: 'vehicle', question: 'xe' },
            { answer: 'to praise', question: 'khen' },
          ],
        },
        // ê - as in day
        {
          question: 'ê',
          answer: 'as in "day"',
          phrases: [
            { answer: 'goat', question: 'dê' },
            { answer: 'to come', question: 'đến' },
            { answer: 'name', question: 'tên' },
          ],
        },
        // i - as in need
        {
          question: 'i',
          answer: 'as in "need"',
          phrases: [
            { answer: 'to go', question: 'đi' },
            { answer: 'when', question: 'khi' },
            { answer: 'to take an exam', question: 'thi' },
          ],
        },
        // o as in lawn
        {
          question: 'o',
          answer: 'as in "lawn"',
          phrases: [
            { answer: 'to have', question: 'có' },
            { answer: 'child; classifier for animals', question: 'con' },
            { answer: 'big', question: 'to' },
          ],
        },
        // ô - as in oh
        {
          question: 'ô',
          answer: 'as in "oh"',
          phrases: [
            { answer: 'aunt; Miss', question: 'cô' },
            { answer: 'number', question: 'số' },
            { answer: 'bowl', question: 'tô' },
          ],
        },
        // ơ - as in sofa
        {
          question: 'ơ',
          answer: 'as in "sofa"',
          phrases: [
            { answer: 'to dream', question: 'mơ' },
            { answer: 'butter, avocado', question: 'bơ' },
            { answer: 'silk', question: 'tơ' },
          ],
        },
        // u - as in food
        {
          question: 'u',
          answer: 'as in "food"',
          phrases: [
            { answer: 'to sleep', question: 'ngủ' },
            { answer: 'autumn', question: 'thu' },
            { answer: 'blind', question: 'mù' },
          ],
        },
        // ư - as in huh
        {
          question: 'ư',
          answer: 'as in "huh"',
          phrases: [
            { answer: 'letter (correspondence)', question: 'thư' },
            { answer: 'fourth; private', question: 'tư' },
            { answer: 'word, written character', question: 'chữ' },
          ],
        },
        // y - as in need
        {
          question: 'y',
          answer: 'as in "need"',
          phrases: [
            { answer: 'America', question: 'Mỹ' },
            { answer: 'to sign', question: 'ký' },
            { answer: 'reason', question: 'lý' },
          ],
        },
      ],
    },
    {
      showQuestionFirstAlways: true,
      subTitle: 'Vowel Combinations',
      cards: [
        // ai - as in "Thailand" or "eye"
        {
          question: 'ai',
          answer: 'as in "Thailand" or "eye"',
          phrases: [
            { answer: 'two', question: 'hai' },
            { answer: 'who', question: 'ai' },
            { answer: 'ear', question: 'tai' },
          ],
        },
        // ao - as in "town" or "cow"
        {
          question: 'ao',
          answer: 'as in "town" or "cow"',
          phrases: [
            { answer: 'tall, high', question: 'cao' },
            { answer: 'star', question: 'sao' },
            { answer: 'bag', question: 'bao' },
          ],
        },
        // au - a combination of "ah" as in "hot" and "oo" as in "food"
        {
          question: 'au',
          answer: 'a combination of "ah" as in "hot" and "oo" as in "food"',
          phrases: [
            { answer: 'vegetable', question: 'rau' },
            { answer: 'after, behind', question: 'sau' },
            { answer: 'fast', question: 'mau' },
          ],
        },
        // ay - a combination of "ah" as in "hot" and "ee" as in "need"
        {
          question: 'ay',
          answer: 'a combination of "ah" as in "hot" and "ee" as in "need"',
          phrases: [
            { answer: 'to fly', question: 'bay' },
            { answer: 'hand', question: 'tay' },
            { answer: 'good, interesting', question: 'hay' },
          ],
        },
        // âu - a combination of "o" as in "oh" and "oo" as in "food"
        {
          question: 'âu',
          answer: 'a combination of "o" as in "oh" and "oo" as in "food"',
          phrases: [
            { answer: 'sentence', question: 'câu' },
            { answer: 'where', question: 'đâu' },
            { answer: 'deep', question: 'sâu' },
          ],
        },
        // ây - as in "may"
        {
          question: 'ây',
          answer: 'as in "may"',
          phrases: [
            { answer: 'tree', question: 'cây' },
            { answer: 'string, wire', question: 'dây' },
            { answer: 'cloud', question: 'mây' },
          ],
        },
        // eo - a combination of "e" as in "bed" and "oo" as in "food"
        {
          question: 'eo',
          answer: 'a combination of "e" as in "bed" and "oo" as in "food"',
          phrases: [
            { answer: 'pig', question: 'heo' },
            { answer: 'candy', question: 'kẹo' },
            { answer: 'to climb', question: 'leo' },
          ],
        },
        // êu - a combination of "ay" as in "day" and "oo" as in "food"
        {
          question: 'êu',
          answer: 'a combination of "ay" as in "day" and "oo" as in "food"',
          phrases: [
            { answer: 'to call, to shout', question: 'kêu' },
            { answer: 'to state, to raise', question: 'nêu' },
            { answer: 'equal, evenly', question: 'đều' },
          ],
        },
        // ia - as in "dear"
        {
          question: 'ia',
          answer: 'as in "dear"',
          phrases: [
            { answer: 'that, over there', question: 'kia' },
            { answer: 'beer', question: 'bia' },
            { answer: 'to divide', question: 'chia' },
          ],
        },
        // iê - as in "yes"
        {
          question: 'iê',
          answer: 'as in "yes"',
          phrases: [
            { answer: 'to know', question: 'biết' },
            { answer: 'money', question: 'tiền' },
            { answer: 'work, task', question: 'việc' },
          ],
        },
        // iu - as in "hew"
        {
          question: 'iu',
          answer: 'as in "hew"',
          phrases: [
            { answer: 'to endure, to bear', question: 'chịu' },
            { answer: 'gentle, mild', question: 'dịu' },
            { answer: 'axe', question: 'rìu' },
          ],
        },
        // oa - "wa" as in "memoir"
        {
          question: 'oa',
          answer: '"wa" as in "memoir"',
          phrases: [
            { answer: 'flower', question: 'hoa' },
            { answer: 'faculty, department', question: 'khoa' },
            { answer: 'train car', question: 'toa' },
          ],
        },
        // oe - as in "quest"
        {
          question: 'oe',
          answer: 'as in "quest"',
          phrases: [
            { answer: 'healthy, well', question: 'khỏe' },
            { answer: 'to spread out, to fan out', question: 'xòe' },
            { answer: 'reddish, bright red', question: 'hoe' },
          ],
        },
        // oi - as in "toy"
        {
          question: 'oi',
          answer: 'as in "toy"',
          phrases: [
            { answer: 'to say', question: 'nói' },
            { answer: 'to ask', question: 'hỏi' },
            { answer: 'to watch, to look after', question: 'coi' },
          ],
        },
        // ôi - a combination of "o" as in "oh" and "ee" as in "need"
        {
          question: 'ôi',
          answer: 'a combination of "o" as in "oh" and "ee" as in "need"',
          phrases: [
            { answer: 'I, me', question: 'tôi' },
            { answer: 'lips', question: 'môi' },
            { answer: 'to stop; enough', question: 'thôi' },
          ],
        },
        // ơi - a combination of "a" as in "sofa" and "ee" as in "need"
        {
          question: 'ơi',
          answer: 'a combination of "a" as in "sofa" and "ee" as in "need"',
          phrases: [
            { answer: 'to play', question: 'chơi' },
            { answer: 'sky, heaven', question: 'trời' },
            { answer: 'to swim', question: 'bơi' },
          ],
        },
        // ua/uâ - "wa" as in "qualm" when preceded by "q"; elsewhere a combination of "oo" as in "food" and "a" as in "sofa"
        {
          question: 'ua/uâ',
          answer:
            '"wa" as in "qualm" when preceded by "q"; elsewhere a combination of "oo" as in "food" and "a" as in "sofa"',
          phrases: [
            { answer: 'to buy', question: 'mua' },
            { answer: 'to dance', question: 'múa' },
            { answer: 'spring (season)', question: 'xuân' },
          ],
        },
        // uê - as in "sway"
        {
          question: 'uê',
          answer: 'as in "sway"',
          phrases: [
            { answer: 'to rent, to hire', question: 'thuê' },
            { answer: 'hometown, countryside', question: 'quê' },
            { answer: 'Hue (city)', question: 'Huế' },
          ],
        },
        // ui - as in "gooey"
        {
          question: 'ui',
          answer: 'as in "gooey"',
          phrases: [
            { answer: 'happy, fun', question: 'vui' },
            { answer: 'mountain', question: 'núi' },
            { answer: 'bag, pocket', question: 'túi' },
          ],
        },
        // uô - a combination of "oo" as in "food" and "o" as in "oh"
        {
          question: 'uô',
          answer: 'a combination of "oo" as in "food" and "o" as in "oh"',
          phrases: [
            { answer: 'to want', question: 'muốn' },
            { answer: 'sad', question: 'buồn' },
            { answer: 'bell', question: 'chuông' },
          ],
        },
        // uơ - as in "twirl"
        {
          question: 'uơ',
          answer: 'as in "twirl"',
          phrases: [
            { answer: 'period, era', question: 'thuở' },
            { answer: 'to wave, to swing', question: 'huơ' },
          ],
        },
        // uy - as in "tweet"
        {
          question: 'uy',
          answer: 'as in "tweet"',
          phrases: [
            { answer: 'although', question: 'tuy' },
            { answer: 'to think over; to decline', question: 'suy' },
            { answer: 'jade green', question: 'thúy' },
          ],
        },
        // ưa - a combination of "uh" as in "huh" and "a" as in "sofa"
        {
          question: 'ưa',
          answer: 'a combination of "uh" as in "huh" and "a" as in "sofa"',
          phrases: [
            { answer: 'rain', question: 'mưa' },
            { answer: 'not yet', question: 'chưa' },
            { answer: 'door', question: 'cửa' },
          ],
        },
        // ưi - a combination of "uh" as in "huh" and "ee" as in "need"
        {
          question: 'ưi',
          answer: 'a combination of "uh" as in "huh" and "ee" as in "need"',
          phrases: [
            { answer: 'to send', question: 'gửi' },
            { answer: 'to smell', question: 'ngửi' },
          ],
        },
        // ươ - a combination of "uh" as in "huh" and "a" as in "sofa"
        {
          question: 'ươ',
          answer: 'a combination of "uh" as in "huh" and "a" as in "sofa"',
          phrases: [
            { answer: 'water', question: 'nước' },
            { answer: 'to be able to; to get', question: 'được' },
            { answer: 'school', question: 'trường' },
          ],
        },
        // ưu - a combination of "uh" as in "huh" and "oo" as in "food"
        {
          question: 'ưu',
          answer: 'a combination of "uh" as in "huh" and "oo" as in "food"',
          phrases: [
            { answer: 'sheep', question: 'cừu' },
            { answer: 'postal', question: 'bưu' },
            { answer: 'to keep, to retain', question: 'lưu' },
          ],
        },
        // iêu - as in "yew"
        {
          question: 'iêu',
          answer: 'as in "yew"',
          phrases: [
            { answer: 'many, much', question: 'nhiều' },
            { answer: 'to understand', question: 'hiểu' },
            { answer: 'afternoon', question: 'chiều' },
          ],
        },
        // oai - as in "twice" or "why"
        {
          question: 'oai',
          answer: 'as in "twice" or "why"',
          phrases: [
            { answer: 'outside', question: 'ngoài' },
            { answer: 'potato, yam', question: 'khoai' },
            { answer: 'mango', question: 'xoài' },
          ],
        },
        // uôi - a combination of "oo" as in "food" and "ee" as in "need"
        {
          question: 'uôi',
          answer: 'a combination of "oo" as in "food" and "ee" as in "need"',
          phrases: [
            { answer: 'age', question: 'tuổi' },
            { answer: 'banana', question: 'chuối' },
            { answer: 'last, final', question: 'cuối' },
          ],
        },
        // uya - a combination of "wee" as in "tweet" and "a" as in "sofa"
        {
          question: 'uya',
          answer: 'a combination of "wee" as in "tweet" and "a" as in "sofa"',
          phrases: [{ answer: 'late at night', question: 'khuya' }],
        },
        // uyê - a combination of "wee" as in "tweet" and "ay" as in "may"
        {
          question: 'uyê',
          answer: 'a combination of "wee" as in "tweet" and "ay" as in "may"',
          phrases: [
            { answer: 'story', question: 'chuyện' },
            { answer: 'snow', question: 'tuyết' },
            { answer: 'whole, original', question: 'nguyên' },
          ],
        },
        // ươi - a combination of "uh" as in "huh", "a" as in "sofa", and "ee" as in "need"
        {
          question: 'ươi',
          answer: 'a combination of "uh" as in "huh", "a" as in "sofa", and "ee" as in "need"',
          phrases: [
            { answer: 'person', question: 'người' },
            { answer: 'to laugh, to smile', question: 'cười' },
            { answer: 'ten', question: 'mười' },
          ],
        },
        // ươu - a combination of "uh" as in "huh", "a" as in "sofa", and "oo" as in "food"
        {
          question: 'ươu',
          answer: 'a combination of "uh" as in "huh", "a" as in "sofa", and "oo" as in "food"',
          phrases: [
            { answer: 'deer', question: 'hươu' },
            { answer: 'alcohol, wine', question: 'rượu' },
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
          ],
        },
        {
          question: 'c',
          answer: 'as in "can" but softer',
          phrases: [
            { answer: 'fish', question: 'cá' },
            { answer: 'cooked rice', question: 'cơm' },
            { answer: 'child; classifier for animals', question: 'con' },
          ],
        },
        {
          question: 'd',
          answer: '"z" as in "zenith" (Northern dialects); otherwise, "y" as in "yes"',
          phrases: [
            { answer: 'skin', question: 'da' },
            { answer: 'knife', question: 'dao' },
            { answer: 'long', question: 'dài' },
          ],
        },
        {
          question: 'đ',
          answer: 'as in "dean" but softer',
          phrases: [
            { answer: 'to go', question: 'đi' },
            { answer: 'beautiful', question: 'đẹp' },
            { answer: 'road; sugar', question: 'đường' },
          ],
        },
        {
          question: 'g',
          answer: 'as in "get" but softer',
          pronunciation: 'In the Northern dialects, "gi" is pronounced like "zee" with a falling tone in the question word "gì" (what), and prounounced "z" in other words that begin with "gi", such as "gia", "giờ", and "giấy". In the Southern dialects, "gi" is pronounced like "yee" with a falling tone in the question word "gì", and pronounced "y" in other words that begin with "gi".',
          phrases: [
            { answer: 'station', question: 'ga' },
            { answer: 'chicken', question: 'gà' },
            { answer: 'uncooked rice', question: 'gạo' },
          ],
        },
        {
          question: 'h',
          answer: 'as in "how"',
          phrases: [
            { answer: 'two', question: 'hai' },
            { answer: 'to study', question: 'học' },
            { answer: 'flower', question: 'hoa' },
          ],
        },
        {
          question: 'k',
          answer: 'as in "can" but softer',
          phrases: [
            { answer: 'cream, ice cream', question: 'kem' },
            { answer: 'candy', question: 'kẹo' },
            { answer: 'that, over there', question: 'kia' },
          ],
        },
        {
          question: 'l',
          answer: 'as in "loan"',
          phrases: [
            { answer: 'leaf', question: 'lá' },
            { answer: 'to be', question: 'là' },
            { answer: 'to do', question: 'làm' },
          ],
        },
        {
          question: 'm',
          answer: 'as in "mean"',
          phrases: [
            { answer: 'mother', question: 'mẹ' },
            { answer: 'to buy', question: 'mua' },
            { answer: 'rain', question: 'mưa' },
          ],
        },
        {
          question: 'n',
          answer: 'as in "new"',
          phrases: [
            { answer: 'it; he', question: 'nó' },
            { answer: 'water', question: 'nước' },
            { answer: 'to say', question: 'nói' },
          ],
        },
        {
          question: 'q',
          answer: '"kw" as in "quart" (Northern dialects); otherwise, "w" as in "well"',
          phrases: [
            { answer: 'hometown, countryside', question: 'quê' },
            { answer: 'gift', question: 'quà' },
            { answer: 'to forget', question: 'quên' },
          ],
        },
        {
          question: 'r',
          answer: 'as in "read"; "z" as in "zenith" in some Northern dialects',
          phrases: [
            { answer: 'to go out', question: 'ra' },
            { answer: 'vegetable', question: 'rau' },
            { answer: 'alcohol, wine', question: 'rượu' },
          ],
        },
        {
          question: 's',
          answer: 'as in "soul"',
          phrases: [
            { answer: 'star', question: 'sao' },
            { answer: 'river', question: 'sông' },
            { answer: 'milk', question: 'sữa' },
          ],
        },
        {
          question: 't',
          answer: 'as in "steam"',
          phrases: [
            { answer: 'hand', question: 'tay' },
            { answer: 'good', question: 'tốt' },
            { answer: 'we, I', question: 'ta' },
          ],
        },
        {
          question: 'v',
          answer: 'as in "voice"; "y" as in "young" in some Southern dialects',
          phrases: [
            { answer: 'and', question: 'và' },
            { answer: 'happy, fun', question: 'vui' },
            { answer: 'to return', question: 'về' },
          ],
        },
        {
          question: 'x',
          answer: '"s" as in "soul"',
          phrases: [
            { answer: 'vehicle', question: 'xe' },
            { answer: 'far', question: 'xa' },
            { answer: 'blue, green', question: 'xanh' },
          ],
        },
      ],
    },
    {
      showQuestionFirstAlways: true,
      subTitle: 'Initial Consonants: Consonant Combinations',
      cards: [
        // ch - as in "chain" or "cheese"
        {
          question: 'ch',
          answer: 'as in "chain" or "cheese"',
          phrases: [
            { answer: 'father', question: 'cha' },
            { answer: 'dog', question: 'chó' },
            { answer: 'market', question: 'chợ' },
          ],
        },
        // gh - as in "get" but softer
        {
          question: 'gh',
          answer: 'as in "get" but softer',
          phrases: [
            { answer: 'chair', question: 'ghế' },
            { answer: 'to note, to record', question: 'ghi' },
            { answer: 'to drop by', question: 'ghé' },
          ],
        },
        // kh - as in "Bach"
        {
          question: 'kh',
          answer: 'as in "Bach"',
          phrases: [
            { answer: 'no, not', question: 'không' },
            { answer: 'difficult', question: 'khó' },
            { answer: 'guest', question: 'khách' },
          ],
        },
        // ng/ngh - as in "longing" or "singing"
        {
          question: 'ng/ngh',
          answer: 'as in "longing" or "singing"',
          phrases: [
            { answer: 'day', question: 'ngày' },
            { answer: 'to listen', question: 'nghe' },
            { answer: 'person', question: 'người' },
          ],
        },
        // nh - as in "lasagna" or "canyon"
        {
          question: 'nh',
          answer: 'as in "lasagna" or "canyon"',
          phrases: [
            { answer: 'house', question: 'nhà' },
            { answer: 'small', question: 'nhỏ' },
            { answer: 'fast', question: 'nhanh' },
          ],
        },
        // ph - as in "farmer" or "phone"
        {
          question: 'ph',
          answer: 'as in "farmer" or "phone"',
          phrases: [
            { answer: 'pho (noodle soup)', question: 'phở' },
            { answer: 'room', question: 'phòng' },
            { answer: 'right; must', question: 'phải' },
          ],
        },
        // th - as in "thank" or "thin"
        {
          question: 'th',
          answer: 'as in "thank" or "thin"',
          phrases: [
            { answer: 'teacher', question: 'thầy' },
            { answer: 'to like', question: 'thích' },
            { answer: 'letter (correspondence)', question: 'thư' },
          ],
        },
        // tr - "j" as in "joy"
        {
          question: 'tr',
          answer: '"j" as in "joy"',
          phrases: [
            { answer: 'tea', question: 'trà' },
            { answer: 'sky, heaven', question: 'trời' },
            { answer: 'school', question: 'trường' },
          ],
        },
      ],
    },
    {
      showQuestionFirstAlways: true,
      subTitle: 'Final Consonants',
      cards: [
        // -c (final consonant) - as in "back" but unreleased
        {
          question: '-c',
          answer: 'as in "back" but unreleased',
          pronunciation: 'When the letter "a" is followed by a final "c", it doesn\'t change its quality',
          phrases: [
            { answer: 'plural marker', question: 'các' },
            { answer: 'to study', question: 'học' },
            { answer: 'water', question: 'nước' },
          ],
        },
        // -m (final consonant) - as in "team"
        {
          question: '-m',
          answer: 'as in "team"',
          phrases: [
            { answer: 'younger sibling', question: 'em' },
            { answer: 'cooked rice', question: 'cơm' },
            { answer: 'five; year', question: 'năm' },
          ],
        },
        // -n (final consonant) - as in "tan"
        {
          question: '-n',
          answer: 'as in "tan"',
          phrases: [
            { answer: 'child; classifier for animals', question: 'con' },
            { answer: 'table', question: 'bàn' },
            { answer: 'name', question: 'tên' },
          ],
        },
        // -p (final consonant) - as in "sap" but unreleased
        {
          question: '-p',
          answer: 'as in "sap" but unreleased',
          phrases: [
            { answer: 'beautiful', question: 'đẹp' },
            { answer: 'to meet (a gathering)', question: 'họp' },
            { answer: 'to meet, to encounter', question: 'gặp' },
          ],
        },
        // -t (final consonant) - as in "at" but unreleased
        {
          question: '-t',
          answer: 'as in "at" but unreleased',
          phrases: [
            { answer: 'good', question: 'tốt' },
            { answer: 'one', question: 'một' },
            { answer: 'to lose', question: 'mất' },
          ],
        },
        // -ch (final consonant) - as in "back" but unreleased
        {
          question: '-ch',
          answer: 'as in "back" but unreleased',
          pronunciation: 'When the letter "a" is followed by a final "ch", it is pronounced like "ai."',
          phrases: [
            { answer: 'book', question: 'sách' },
            { answer: 'guest', question: 'khách' },
            { answer: 'way, method', question: 'cách' },
          ],
        },
        // -ng (final consonant) - as in "long"
        {
          question: '-ng',
          answer: 'as in "long"',
          phrases: [
            { answer: 'come over', question: 'sang' },
            { answer: 'river', question: 'sông' },
            { answer: 'to plant, to grow', question: 'trồng' },
          ],
        },
        // -nh (final consonant) - "ng" as in "long"
        {
          question: '-nh',
          answer: '"ng" as in "long"',
          pronunciation: 'When "a" is followed by a final "nh", it is pronounced like "ai."',
          phrases: [
            { answer: 'be born', question: 'sanh' },
            { answer: 'older brother', question: 'anh' },
            { answer: 'fast', question: 'nhanh' },
          ],
        },
      ],
    },
  ],
};
