import type { CardCollection } from '../types';

/**
 * Part 3: Getting Around
 */
export const Part3: CardCollection = {
  'Directions': [{ cards: [
    // question: address / answer: địa chỉ / pronunciation: dee-a-chee
    { answer: 'address', question: 'địa chỉ', pronunciation: 'dẹe-a-chẻe', phrases: [ { answer: 'This is the right address.', question: '' }]},
    // approximately, about / pronunciation: 'khwảhng
    // ask for directions - hỏi đường / pronunciation: 'hỏy dùh-ang'
    // city blocks / pronunciation: 'zãh-ee/yãh-ee fóh
    // east - đông / pronunciation: dohng
    // give directions, directions - chỉ đường / pronunciation: 'chẻe dùh-ang'
    // go straight - đi thẳng / pronunciation: 'dee thảng'
    // here - đây / pronunciation: 'day'
    // intersection - ngã tư / pronunciation: 'ngã tuh'
    // lost - lạc đường / pronunciation: 'lạhk dùh-ang'
    // map - bản đồ / pronunciation: 'bảhn dòh'
    // north - bắc / pronunciation: 'bắc'
    // on the left - bên trái, bên tay trái
    // on the right - bên phải, bên tay phải
    // south - nam / pronunciation: 'nahm'
    // turn left - rẽ trái / pronunciation: 'zay chái'
    // turn right - rẽ phải / pronunciation: 'zay phái'
    // west - tây
    // street - đường / pronunciation: 'dùh-ang'
    // over there - 'đằng kia'

    // subTitle: I'm Lost
    // answer: I'm lost. / question: Tôi bị lạc đường. / pronunciation: 'Tôi bị lạhk dùh-ang' (NOTE: The question word "dau" (where) is alwasy put at the end of the question. It is preceded by the word "o" (at) whentalking about a specific location.)
    // answer: We're lost. / question: Chúng tôi bị lạc đường.

    // subTitle: Where do you want to go?
    // answer: Where do you want to go? / pronunciation: 'Kahk aing chee moo-ohn dee doh-oo?' (NOTE: the word "cac" is a plural marker, used when addressing two persons or more.
    // answer: Where is Le Loi Street? / answer: 'Đường Lê Lợi ở đâu?'
    // answer: Where is the Italian restaurant? / question: 'Nhà hàng Ý ở đâu?'
    // answer: Where is the nearest bus stop? / question: 'Trạm xe buýt gần nhất ở đâu?'

    // subTitle: We'd Like To Go To...
    // answer: We'd like to go to this address. / question: Chúng tôi muốn đến địa chỉ này.
    // answer: I'd like to go to the Hotel Rex. / question: Tôi muốn đến Khách Sạn Rex.
    // answer: Could you direct us to Ben Thanh Market, please? / question: Xin chỉ đường toi đến Chợ Bến Thành?

    // subTitle: Giving Directions
    // answer: Go straight down this street. / question: Đi thẳng tren đường này.
    // answer: Go about four blocks. / question: Đi khoảng bốn dãy pho.
    // answer: Go to the intersection over there. / question: Đi đến ngã tư đằng kia.
    // answer: Turn right and go one block. / question: Rẽ phải và đi một dãy phố.
    // answer: Then turn left and go two more blocks. / question: Rồi rẽ trái và đi thêm hai dãy phố.
    // answer: The market will be on the right-hand side. / question: Chợ sẽ ở bên tay phải.

    // subTitle: Which Street Takes You To...?
    // answer: Which street takes you to the post office? / question: Đường nào dẫn đến bưu điện?
    // answer: Which street takes you to the beach? / question: Đường nào di ra bãi biển?

    // subTitle: I Need...
    // answer: I need to buy a street map. / question: Tôi cần mua một bản đồ. / pronunciation: 'Toh-ee kun moo-a moht bahn doh chee duh-ang
    // answer: We need an interpreter. / question: Chúng tôi cần một thông dịch viên. / pronunciation: 'Choong toh-ee kun moht thohng zee/yeek vyen.'
    // answer: Thank you for helping us. / question: Cảm ơn đã giúp chúng tôi.
  ] }],
  'Airports and Airlines': [{ cards: [
    // answer: airlines / question: hãng hàng không
    // answer: airport / question: phi trường
    // answer: boarding pass / question: thẻ lên máy bay
    // answer: arrival time / question: giờ đến
    // answer: arriving flight / question: chuyến bay đến
    // answer: at (a certain time) / question: lúc / pronunciation: 'lóok'
    // baggage, luggage / question: hành lý
    // boarding time / question: giờ lên máy bay
    // carry-on / question: hành lý xách tay
    // departure time / question: giờ đi
    // departing flight / question: chuyến bay đi
    // flight number / question: số chuyến bay
    // gate / question: cổng
    // luggage claim / question: nơi nhận hành lý
    // security checkpoint / question: điểm kiểm tra an ninh
    // security check / question: kiểm soát an ninh
    // terminal / question: nhà ga
    // ticket / question: vé / pronunciation: 'vé'
    // plane ticket / question: vé máy bay
    // passport / question: hộ chiếu
    // price / question: giá / pronunciation: 'giá'
    // round-trip / question: khứ hồi
    // suitcase / question: va-li / pronunciation: 'vah lee'
    // what time? / question: luc mấy giờ?
    // window seat / question: ghe canh cửa sổ / pronunciation: 'geh kaing kua-a soh'
  ] }],
  'Hotels and Resorts': [{ cards: [
    // answer: air conditioning / question: máy lạnh / pronunciation: 'máy lạnh'
    // answer: all the conveniences / question: day du tiện nghi
    // answer: bed and breakfast / question: nhà nghỉ có bữa sáng
    // answer: check in / question: làm thủ tục nhận phòng
    // answer: check out / question: làm thủ tục trả phòng
    // answer: bar / question: quan rượu
    // answer: cancel one's reservation / question: hủy phòng da đặt
    // cash / question: tiền mặt
    // change rooms / question: đổi phòng
    // complaint / question: kiêu nại
    // confirm / question: xác nhận
    // conveniences / question: tiện nghi
    // credit card / question: thẻ tín dụng
    // double room / question: phòng đôi
    // elevator / question: thang máy
    // front desk / question: ban tiếp tân
    // fee / question: phí
    // floor / question: lầu
    // for rent / question: cho thuê
    // have to / question: phải
    // hot water / question: nước nóng
    // hotel / question: khách sạn
    // hotel reservation / question: đặt phòng khách sạn
    // housekeeper / question: người dọn phòng
    // motorboat / ca-no / pronunciation: 'ca-no'
    // on / question: trên
    // pay / question: trả, tra tiền
    // reservation / question: đặt phòng
    // room / question: phòng
    // single room / question: phòng đơn
    // suite / question: phòng hạng sang
    // swimming pool / question: hồ bơi
    // resort / question: khu nghỉ mát
    // room key / question: chìa khóa phòng
    // room rate / question: giá phòng
    // stay / question: ở
    // towel / question: khăn tắm
    // television / question: ti vi
    // vacancy / question: phòng trống
  ] }],
  'Forms of Transport': [{ cards: [] }],
};
