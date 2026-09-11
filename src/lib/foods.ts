import { priceRarity } from './case-mechanics';
export type Food={customId?:string;name:string;sub:string;price:number;rarity:number;image:number;veg?:boolean;quip:string};
// Approximate lunch portion prices in thousands of VND, not restaurant quotes.
export const foods:Food[]=[
  {
    "name": "Cơm tấm",
    "sub": "Sườn bì chả • Việt Nam",
    "price": 45,
    "image": 0,
    "quip": "Sườn có thể gãy. Kèo này thì không."
  },
  {
    "name": "Phở bò",
    "sub": "Tái nạm • Việt Nam",
    "price": 55,
    "image": 1,
    "quip": "Đời có thể nhạt. Nước phở thì không."
  },
  {
    "name": "Bánh mì",
    "sub": "Thịt nướng • Việt Nam",
    "price": 25,
    "image": 2,
    "quip": "Vũ khí cận chiến của dân văn phòng."
  },
  {
    "name": "Bún chả",
    "sub": "Chả nướng • Việt Nam",
    "price": 50,
    "image": 3,
    "quip": "Một pha gắp chả đi vào lòng người."
  },
  {
    "name": "Sushi cá hồi",
    "sub": "Cá hồi • Nhật Bản",
    "price": 150,
    "image": 4,
    "quip": "Legendary drop. Ví bạn vừa disconnect."
  },
  {
    "name": "Pizza",
    "sub": "Phô mai • Ý",
    "price": 100,
    "image": 5,
    "quip": "Một miếng cho bạn. Phần còn lại cũng vậy."
  },
  {
    "name": "Gà rán",
    "sub": "Giòn cay • Quốc tế",
    "price": 65,
    "image": 6,
    "quip": "Winner winner, chicken lunch."
  },
  {
    "name": "Cơm chay",
    "sub": "Đậu hũ & rau • Việt Nam",
    "price": 35,
    "image": 7,
    "veg": true,
    "quip": "Ăn chay nhưng chiến hết mình."
  },
  {
    "name": "Bibimbap",
    "sub": "Cơm trộn • Hàn Quốc",
    "price": 85,
    "image": 8,
    "quip": "Trộn cơm. Đừng trộn deadline."
  },
  {
    "name": "Cơm gà Hội An",
    "sub": "Món ăn trưa",
    "price": 45,
    "image": 9,
    "veg": false,
    "quip": "Vàng ươm rực rỡ, xua tan muộn phiền."
  },
  {
    "name": "Bún bò Huế",
    "sub": "Món ăn trưa",
    "price": 50,
    "image": 10,
    "veg": false,
    "quip": "Đậm đà chuẩn vị, đánh thức giác quan."
  },
  {
    "name": "Hủ tiếu",
    "sub": "Món ăn trưa",
    "price": 40,
    "image": 11,
    "veg": false,
    "quip": "Nhanh, gọn, lẹ cho một buổi trưa bận rộn."
  },
  {
    "name": "Mì Quảng",
    "sub": "Món ăn trưa",
    "price": 45,
    "image": 12,
    "veg": false,
    "quip": "Nước dùng xâm xấp, đậm đà tình miền Trung."
  },
  {
    "name": "Bún thịt nướng",
    "sub": "Món ăn trưa",
    "price": 40,
    "image": 13,
    "veg": false,
    "quip": "Rưới nước mắm vào và bắt đầu combat."
  },
  {
    "name": "Bánh cuốn",
    "sub": "Món ăn trưa",
    "price": 35,
    "image": 14,
    "veg": false,
    "quip": "Mỏng mỏng êm êm, lướt qua cơn đói."
  },
  {
    "name": "Bún đậu mắm tôm",
    "sub": "Món ăn trưa",
    "price": 55,
    "image": 15,
    "veg": false,
    "quip": "Đam mê đích thực. Chuẩn bị sẵn kẹo gum."
  },
  {
    "name": "Cơm rang dưa bò",
    "sub": "Món ăn trưa",
    "price": 50,
    "image": 16,
    "veg": false,
    "quip": "Hạt cơm săn rỏi, bò dưa đỉnh cao."
  },
  {
    "name": "Bò lúc lắc",
    "sub": "Món ăn trưa",
    "price": 85,
    "image": 17,
    "veg": false,
    "quip": "Lúc lắc cái tay, có ngay bữa xịn."
  },
  {
    "name": "Bánh xèo",
    "sub": "Món ăn trưa",
    "price": 50,
    "image": 18,
    "veg": false,
    "quip": "Giòn rụm âm thanh của sự hạnh phúc."
  },
  {
    "name": "Bánh đa cua",
    "sub": "Món ăn trưa",
    "price": 45,
    "image": 19,
    "veg": false,
    "quip": "Sợi bánh đa đỏ, gạch cua béo ngậy."
  },
  {
    "name": "Mì xào bò",
    "sub": "Món ăn trưa",
    "price": 45,
    "image": 20,
    "veg": false,
    "quip": "Cứu đói cấp tốc, nạp lại năng lượng."
  },
  {
    "name": "Bún cá",
    "sub": "Món ăn trưa",
    "price": 40,
    "image": 21,
    "veg": false,
    "quip": "Chua thanh dịu nhẹ, mát lành buổi trưa."
  },
  {
    "name": "Gỏi cuốn",
    "sub": "Món ăn trưa",
    "price": 35,
    "image": 22,
    "veg": false,
    "quip": "Cuốn nhẹ nhàng, ăn không sợ béo."
  },
  {
    "name": "Cháo sườn",
    "sub": "Món ăn trưa",
    "price": 25,
    "image": 23,
    "veg": false,
    "quip": "Mịn màng êm bụng, xoa dịu tâm hồn."
  },
  {
    "name": "Ramen",
    "sub": "Món ăn trưa",
    "price": 100,
    "image": 24,
    "veg": false,
    "quip": "Húp trọn nước dùng đậm đà phong cách Nhật."
  },
  {
    "name": "Udon",
    "sub": "Món ăn trưa",
    "price": 85,
    "image": 25,
    "veg": false,
    "quip": "Sợi mì dai giòn, ăn là mê ngay."
  },
  {
    "name": "Cơm cà ri Nhật",
    "sub": "Món ăn trưa",
    "price": 90,
    "image": 26,
    "veg": false,
    "quip": "Sốt sánh mịn, thơm lừng vị cà ri."
  },
  {
    "name": "Tteokbokki",
    "sub": "Món ăn trưa",
    "price": 65,
    "image": 27,
    "veg": false,
    "quip": "Cay nồng xuýt xoat, chuẩn vị Seoul."
  },
  {
    "name": "Burger bò",
    "sub": "Món ăn trưa",
    "price": 65,
    "image": 28,
    "veg": false,
    "quip": "Cắn một miếng ngập tràn vị thịt."
  },
  {
    "name": "Mì Ý bò bằm",
    "sub": "Món ăn trưa",
    "price": 80,
    "image": 29,
    "veg": false,
    "quip": "Chuẩn gu Âu Mỹ, ngon khó cưỡng."
  },
  {
    "name": "Pad Thai",
    "sub": "Món ăn trưa",
    "price": 75,
    "image": 30,
    "veg": false,
    "quip": "Chua ngọt hài hòa, đậm đà vị Thái."
  },
  {
    "name": "Mì Tom Yum",
    "sub": "Món ăn trưa",
    "price": 80,
    "image": 31,
    "veg": false,
    "quip": "Chua cay bùng nổ, tỉnh cả người."
  },
  {
    "name": "Lẩu nấm chay",
    "sub": "Chay",
    "price": 120,
    "image": 32,
    "veg": true,
    "quip": "Thanh lọc cơ thể, khỏe mạnh từ bên trong."
  },
  {
    "name": "Mì nấm chay",
    "sub": "Chay",
    "price": 40,
    "image": 33,
    "veg": true,
    "quip": "Món chay thanh nhẹ, ngon miệng bất ngờ."
  },
  {
    "name": "Bánh mì chay",
    "sub": "Chay",
    "price": 25,
    "image": 34,
    "veg": true,
    "quip": "Nhanh gọn, xanh sạch cho ngày chay."
  },
  {
    "name": "Gỏi cuốn chay",
    "sub": "Chay",
    "price": 35,
    "image": 35,
    "veg": true,
    "quip": "Tươi mát dịu nhẹ, ăn hoài không chán."
  },
  {
    "name": "Cơm bình dân",
    "price": 40,
    "image": 36,
    "sub": "Chọn món mặn, rau & canh",
    "quip": "Cứu tinh ví tiền những ngày cuối tháng."
  },
  {
    "name": "Cơm gà xối mỡ",
    "price": 55,
    "image": 39,
    "sub": "Phần ăn trưa / người",
    "quip": "Da gà giòn rụm, vàng ươm hấp dẫn."
  },
  {
    "name": "Bún riêu",
    "price": 45,
    "image": 42,
    "sub": "Phần ăn trưa / người",
    "quip": "Vị chua thanh mát, riêu cua chất lượng."
  },
  {
    "name": "Bánh canh cua",
    "price": 60,
    "image": 43,
    "sub": "Phần ăn trưa / người",
    "quip": "Nước dùng sánh đậm, thịt cua thơm ngon."
  },
  {
    "name": "Bò né",
    "price": 75,
    "image": 44,
    "sub": "Phần ăn trưa / người",
    "quip": "Xèo xèo nóng hổi, né nhanh còn ăn."
  },
  {
    "name": "Cơm gà teriyaki",
    "price": 85,
    "image": 45,
    "sub": "Phần ăn trưa / người",
    "quip": "Sốt đậm đà ngọt dịu, ăn là ghiền."
  },
  {
    "name": "Cơm heo chiên xù",
    "price": 95,
    "image": 46,
    "sub": "Phần ăn trưa / người",
    "quip": "Tonkatsu giòn rụm, ngon đúng điệu."
  },
  {
    "name": "Cơm chiên hải sản",
    "price": 85,
    "image": 47,
    "sub": "Phần ăn trưa / người",
    "quip": "Đầy ắp hải sản, tơi xốp hạt cơm."
  },
  {
    "name": "Mì vịt tiềm",
    "price": 95,
    "image": 48,
    "sub": "Phần ăn trưa / người",
    "quip": "Thịt vịt mềm thơm, bổ dưỡng từng hụm."
  },
  {
    "name": "Kimbap",
    "price": 70,
    "image": 49,
    "sub": "Phần ăn trưa / người",
    "quip": "Cuộn tròn đầy đặn, tiện lợi ăn nhanh."
  },
  {
    "name": "Mì trộn Hàn Quốc",
    "price": 75,
    "image": 50,
    "sub": "Phần ăn trưa / người",
    "quip": "Cay cay ngọt ngọt, trộn đều ăn ngay."
  },
  {
    "name": "Salad ức gà",
    "price": 85,
    "image": 51,
    "sub": "Phần ăn trưa / người",
    "quip": "Eat clean lành mạnh, giữ dáng giữ da."
  },
  {
    "name": "Mì Ý sốt kem bacon",
    "price": 115,
    "image": 52,
    "sub": "Phần ăn trưa / người",
    "quip": "Béo ngậy thơm lừng, chiều chuộng bản thân."
  },
  {
    "name": "Lasagna bò",
    "price": 125,
    "image": 53,
    "sub": "Phần ăn trưa / người",
    "quip": "Từng lớp phô mai và thịt bò đắm đuối."
  },
  {
    "name": "Burger bò phô mai & khoai tây",
    "price": 120,
    "image": 54,
    "sub": "Phần ăn trưa / người",
    "quip": "Combo thần thánh, nạp đầy năng lượng."
  },
  {
    "name": "Pizza pepperoni",
    "price": 120,
    "image": 55,
    "sub": "Phần ăn trưa / người",
    "quip": "Xúc xích đậm vị, phô mai kéo sợi."
  },
  {
    "name": "Cơm bò gyudon",
    "price": 110,
    "image": 56,
    "sub": "Phần ăn trưa / người",
    "quip": "Thịt bò mềm mọng, đậm đà chuẩn Nhật."
  },
  {
    "name": "Cơm cá saba nướng",
    "price": 110,
    "image": 57,
    "sub": "Phần ăn trưa / người",
    "quip": "Cá nướng thơm phức, giàu Omega-3."
  },
  {
    "name": "Mì soba Nhật",
    "price": 110,
    "image": 58,
    "sub": "Phần ăn trưa / người",
    "quip": "Thanh mát nhẹ nhàng, thanh lọc tâm trí."
  },
  {
    "name": "Cơm cà ri Thái",
    "price": 110,
    "image": 59,
    "sub": "Phần ăn trưa / người",
    "quip": "Cà ri xanh đỏ, béo cốt dừa cay nồng."
  },
  {
    "name": "Salad cá ngừ",
    "price": 110,
    "image": 60,
    "sub": "Phần ăn trưa / người",
    "quip": "Tươi ngon nhẹ bụng, chuẩn gu giữ dáng."
  },
  {
    "name": "Salad quinoa đậu gà",
    "price": 115,
    "image": 61,
    "veg": true,
    "sub": "Phần ăn trưa / người",
    "quip": "Siêu thực phẩm chay, năng lượng dồi dào."
  },
  {
    "name": "Bò bít tết",
    "price": 180,
    "image": 62,
    "sub": "Phần ăn trưa / người",
    "quip": "Thịt bò mọng nước, tự thưởng bản thân."
  },
  {
    "name": "Cá hồi áp chảo",
    "price": 190,
    "image": 63,
    "sub": "Phần ăn trưa / người",
    "quip": "Da giòn thịt mềm, bữa trưa thượng hạng."
  },
  {
    "name": "Cơm lươn Nhật",
    "price": 180,
    "image": 64,
    "sub": "Phần ăn trưa / người",
    "quip": "Lươn nướng sốt Unagi, đẳng cấp ẩm thực."
  },
  {
    "name": "Cơm bò nướng Hàn",
    "price": 150,
    "image": 65,
    "sub": "Phần ăn trưa / người",
    "quip": "Bulgogi đậm vị, đưa cơm hết nấc."
  },
  {
    "name": "Cơm cá hồi teriyaki",
    "price": 150,
    "image": 66,
    "sub": "Phần ăn trưa / người",
    "quip": "Cá hồi áp chảo quyện sốt Teriyaki."
  },
  {
    "name": "Poke cá hồi",
    "price": 160,
    "image": 67,
    "sub": "Phần ăn trưa / người",
    "quip": "Tươi ngon chuẩn Hawaii, đủ chất trọn vẹn."
  },
  {
    "name": "Sườn nướng BBQ",
    "price": 230,
    "image": 68,
    "sub": "Kèm cơm hoặc khoai tây • Phần một người",
    "quip": "Đậm đà sốt BBQ, ăn tới đâu mê tới đó."
  },
  {
    "name": "Pizza hải sản",
    "price": 160,
    "image": 69,
    "sub": "Phần ăn trưa / người",
    "quip": "Tôm mực ngập tràn trên nền phô mai."
  },
  {
    "name": "Mì Ý hải sản",
    "price": 160,
    "image": 70,
    "sub": "Phần ăn trưa / người",
    "quip": "Hương vị biển cả quyện trong từng sợi mì."
  },
  {
    "name": "Lẩu bò cá nhân",
    "price": 160,
    "image": 71,
    "sub": "Phần ăn trưa / người",
    "quip": "Một mình vẫn có thể xì xụp lẩu ngon."
  },
  {
    "name": "Phở gà",
    "price": 55,
    "sub": "Tô thường • Việt Nam",
    "veg": false,
    "image": 72,
    "quip": "Nước dùng thanh ngọt, thịt gà dai ngon."
  },
  {
    "name": "Phở cuốn",
    "price": 70,
    "sub": "Phần 10 cuốn • Việt Nam",
    "veg": false,
    "image": 73,
    "quip": "Bánh phở dẻo mát, thịt bò đậm đà."
  },
  {
    "name": "Bún mọc",
    "price": 45,
    "sub": "Tô thường • Việt Nam",
    "veg": false,
    "image": 74,
    "quip": "Viên mọc giòn sần sật, thanh nhẹ dễ ăn."
  },
  {
    "name": "Bún măng vịt",
    "price": 60,
    "sub": "Tô có thịt vịt • Việt Nam",
    "veg": false,
    "image": 75,
    "quip": "Măng giòn chua dịu, thịt vịt béo ngậy."
  },
  {
    "name": "Bún bò Nam Bộ",
    "price": 60,
    "sub": "Bún trộn bò • Việt Nam",
    "veg": false,
    "image": 76,
    "quip": "Trộn đều nước mắm, hành phi thơm phức."
  },
  {
    "name": "Bún mắm",
    "price": 65,
    "sub": "Tô hải sản • Việt Nam",
    "veg": false,
    "image": 77,
    "quip": "Đậm đà vị miền Tây, ăn là nhớ mãi."
  },
  {
    "name": "Bún chay",
    "price": 35,
    "sub": "Đậu hũ & rau • Việt Nam",
    "veg": true,
    "image": 78,
    "quip": "Thanh tịnh nhẹ nhàng, tốt cho sức khỏe."
  },
  {
    "name": "Bánh canh giò heo",
    "price": 50,
    "sub": "Tô thường • Việt Nam",
    "veg": false,
    "image": 79,
    "quip": "Giò heo béo ngậy, sợi bánh canh dẻo mềm."
  },
  {
    "name": "Miến gà",
    "price": 55,
    "sub": "Tô thường • Việt Nam",
    "veg": false,
    "image": 80,
    "quip": "Sợi miến dai trong, nước dùng ngọt thanh."
  },
  {
    "name": "Miến lươn",
    "price": 65,
    "sub": "Tô thường • Việt Nam",
    "veg": false,
    "image": 81,
    "quip": "Lươn giòn hay lươn mềm đều đỉnh cao."
  },
  {
    "name": "Cháo vịt",
    "price": 55,
    "sub": "Phần có thịt vịt • Việt Nam",
    "veg": false,
    "image": 82,
    "quip": "Bát cháo ấm nóng, chấm mắm gừng cay."
  },
  {
    "name": "Cháo lòng",
    "price": 40,
    "sub": "Phần có lòng • Việt Nam",
    "veg": false,
    "image": 83,
    "quip": "Đậm đà dân dã, ấm bụng trưa hè."
  },
  {
    "name": "Bánh hỏi heo quay",
    "price": 50,
    "sub": "Một phần • Việt Nam",
    "veg": false,
    "image": 84,
    "quip": "Heo quay giòn rụm ăn kèm bánh hỏi."
  },
  {
    "name": "Nem nướng",
    "price": 55,
    "sub": "Phần cuốn đủ bữa • Việt Nam",
    "veg": false,
    "image": 85,
    "quip": "Cuốn bánh tráng, chấm sốt béo ngậy."
  },
  {
    "name": "Dimsum",
    "price": 130,
    "sub": "Khoảng 3 xửng / người",
    "veg": false,
    "image": 86,
    "quip": "Nhẹ nhàng tinh tế, chạm tới trái tim."
  },
  {
    "name": "Mì hoành thánh",
    "price": 60,
    "sub": "Tô mì & hoành thánh",
    "veg": false,
    "image": 87,
    "quip": "Hoành thánh nhân thịt, nước dùng ngọt xương."
  },
  {
    "name": "Mì bò Đài Loan",
    "price": 85,
    "sub": "Bò hầm & mì • Đài Loan",
    "veg": false,
    "image": 88,
    "quip": "Thịt bò hầm đậm đà, chuẩn vị Đài Bắc."
  },
  {
    "name": "Mì xào giòn",
    "price": 70,
    "sub": "Hải sản & rau củ",
    "veg": false,
    "image": 89,
    "quip": "Sợi mì giòn tan rưới sốt hải sản."
  },
  {
    "name": "Cơm niêu Singapore",
    "price": 85,
    "sub": "Một niêu / người",
    "veg": false,
    "image": 90,
    "quip": "Lớp cháy giòn rụm, sốt đậm đà."
  },
  {
    "name": "Cơm gà Hải Nam",
    "price": 75,
    "sub": "Gà luộc & cơm thơm",
    "veg": false,
    "image": 91,
    "quip": "Cơm nấu nước luộc gà thơm nức nở."
  },
  {
    "name": "Cơm gà trứng Nhật",
    "price": 100,
    "sub": "Oyakodon • Nhật Bản",
    "veg": false,
    "image": 92,
    "quip": "Trứng mềm béo ngậy quyện thịt gà."
  },
  {
    "name": "Cơm tempura",
    "price": 130,
    "sub": "Tendon • Nhật Bản",
    "veg": false,
    "image": 93,
    "quip": "Hải sản chiên giòn rưới sốt ngọt."
  },
  {
    "name": "Mì cay Hàn Quốc",
    "price": 65,
    "sub": "Một tô • Hàn Quốc",
    "veg": false,
    "image": 94,
    "quip": "Thách thức cấp độ cay, xé lưỡi bùng nổ."
  },
  {
    "name": "Mì tương đen",
    "price": 70,
    "sub": "Jajangmyeon • Hàn Quốc",
    "veg": false,
    "image": 95,
    "quip": "Trộn đều màu đen, ngon chuẩn phim Hàn."
  },
  {
    "name": "Mì lạnh Hàn Quốc",
    "price": 95,
    "sub": "Naengmyeon • Hàn Quốc",
    "veg": false,
    "image": 96,
    "quip": "Sợi mì dai lạnh, đập tan cái nóng."
  },
  {
    "name": "Canh kimchi kèm cơm",
    "price": 85,
    "sub": "Kimchi jjigae • Hàn Quốc",
    "veg": false,
    "image": 97,
    "quip": "Chua cay ấm bụng, ăn cùng cơm nóng."
  },
  {
    "name": "Canh đậu hũ non kèm cơm",
    "price": 85,
    "sub": "Sundubu jjigae • Hàn Quốc",
    "veg": false,
    "image": 98,
    "quip": "Đậu hũ mềm tan, nước canh cay nồng."
  },
  {
    "name": "Gà phô mai Hàn Quốc",
    "price": 120,
    "sub": "Phần một người",
    "veg": false,
    "image": 99,
    "quip": "Gà cay ngập trong biển phô mai kéo sợi."
  },
  {
    "name": "Cơm chiên kimchi",
    "price": 65,
    "sub": "Kimchi bokkeumbap • Hàn Quốc",
    "veg": false,
    "image": 100,
    "quip": "Chua cay mặn ngọt, thêm trứng ốp la."
  },
  {
    "name": "Lẩu Thái một người",
    "price": 130,
    "sub": "Kèm bún hoặc mì",
    "veg": false,
    "image": 101,
    "quip": "Chua cay chuẩn vị, ăn một mình vẫn vui."
  },
  {
    "name": "Lẩu sukiyaki một người",
    "price": 220,
    "sub": "Thịt, rau & mì • Nhật Bản",
    "veg": false,
    "image": 102,
    "quip": "Nhúng thịt bò vào trứng sống béo ngậy."
  },
  {
    "name": "Cà ri Ấn Độ & naan",
    "price": 220,
    "sub": "Cà ri gà kèm bánh naan",
    "veg": false,
    "image": 103,
    "quip": "Xé bánh Naan chấm sốt cà ri đậm đà."
  },
  {
    "name": "Cơm biryani",
    "price": 190,
    "sub": "Cơm gia vị & gà • Ấn Độ",
    "veg": false,
    "image": 104,
    "quip": "Thơm lừng gia vị Ấn, hạt cơm Basmati."
  },
  {
    "name": "Bánh xèo Nhật",
    "price": 110,
    "sub": "Okonomiyaki • Nhật Bản",
    "veg": false,
    "image": 105,
    "quip": "Sốt Okonomi thơm lừng, cá bào nhảy múa."
  },
  {
    "name": "Sandwich",
    "price": 80,
    "sub": "Phần bánh kẹp đủ bữa",
    "veg": false,
    "image": 106,
    "quip": "Nhanh gọn tiện lợi, đầy đủ dinh dưỡng."
  },
  {
    "name": "Bánh mì kebab",
    "price": 35,
    "sub": "Doner kebab • Thổ Nhĩ Kỳ",
    "veg": false,
    "image": 107,
    "quip": "Bánh tam giác nướng giòn, thịt nướng thơm phức."
  },
  {
    "name": "Bánh cuộn gà",
    "price": 95,
    "sub": "Chicken wrap",
    "veg": false,
    "image": 108,
    "quip": "Cuộn gọn gàng, ăn không sợ rớt."
  },
  {
    "name": "Burrito",
    "price": 150,
    "sub": "Cuộn cơm, đậu & thịt • Mexico",
    "veg": false,
    "image": 109,
    "quip": "Một cuộn chật nịch, chắc bụng cả ngày."
  },
  {
    "name": "Taco",
    "price": 150,
    "sub": "Phần 3 bánh • Mexico",
    "veg": false,
    "image": 110,
    "quip": "Vỏ giòn rụm, nhân đậm đà phong cách Mexico."
  },
  {
    "name": "Quesadilla",
    "price": 140,
    "sub": "Phô mai & gà • Mexico",
    "veg": false,
    "image": 111,
    "quip": "Bánh kẹp phô mai nướng chảy béo ngậy."
  },
  {
    "name": "Fish & chips",
    "price": 170,
    "sub": "Cá chiên & khoai tây",
    "veg": false,
    "image": 112,
    "quip": "Cá chiên giòn chấm sốt Tartar chuẩn Anh."
  },
  {
    "name": "Gà nướng kèm khoai tây",
    "price": 140,
    "sub": "Phần một người",
    "veg": false,
    "image": 113,
    "quip": "Gà nướng mọng nước kèm khoai tây chiên."
  },
  {
    "name": "Mac & cheese",
    "price": 150,
    "sub": "Nui phô mai • Phần chính",
    "veg": false,
    "image": 114,
    "quip": "Béo ngậy phô mai, món ngon an ủi tâm hồn."
  },
  {
    "name": "Mì Ý pesto",
    "price": 170,
    "sub": "Húng quế & gà • Ý",
    "veg": false,
    "image": 115,
    "quip": "Sốt húng quế xanh mát, thơm dịu béo bùi."
  },
  {
    "name": "Mì Ý cá hồi",
    "price": 230,
    "sub": "Sốt kem cá hồi • Ý",
    "veg": false,
    "image": 116,
    "quip": "Sốt kem béo ngậy quyện miếng cá hồi."
  },
  {
    "name": "Cơm risotto",
    "price": 260,
    "sub": "Cơm Ý • Phần chính",
    "veg": false,
    "image": 117,
    "quip": "Sánh mịn chuẩn phong cách Ý xa xỉ."
  },
  {
    "name": "Gnocchi",
    "price": 250,
    "sub": "Bánh khoai tây kiểu Ý",
    "veg": false,
    "image": 118,
    "quip": "Bánh khoai tây dẻo mềm ngập trong sốt."
  },
  {
    "name": "Falafel kèm pita",
    "price": 150,
    "sub": "Đậu gà, rau & bánh pita",
    "veg": true,
    "image": 119,
    "quip": "Đậu gà chiên giòn, món chay Trung Đông độc đáo."
  },
  {
    "name": "Nui xào bò",
    "price": 50,
    "sub": "Nui, bò & rau • Việt Nam",
    "quip": "Nui deadline lại. Ăn trước đã.",
    "image": 120
  },
  {
    "name": "Cháo gà",
    "price": 45,
    "sub": "Gà xé & hành tiêu • Việt Nam",
    "quip": "Một bát hồi máu giữa giờ làm.",
    "image": 121
  },
  {
    "name": "Bò kho bánh mì",
    "price": 65,
    "sub": "Bò hầm & bánh mì • Việt Nam",
    "quip": "Chấm bánh mì. Đừng chấm công muộn.",
    "image": 122
  },
  {
    "name": "Xôi mặn",
    "price": 35,
    "sub": "Gà, thịt hoặc chả • Việt Nam",
    "quip": "Dẻo dai đến hết ca chiều.",
    "image": 123
  },
  {
    "name": "Bánh mì chảo",
    "price": 45,
    "sub": "Trứng, pa tê & xúc xích • Việt Nam",
    "quip": "Nóng hơn cả nhóm chat công ty.",
    "image": 124
  },
  {
    "name": "Cơm xá xíu",
    "price": 55,
    "sub": "Thịt xá xíu & cơm • Món Hoa",
    "quip": "Xá xíu một chút. No cả buổi.",
    "image": 125
  },
  {
    "name": "Cơm vịt quay",
    "price": 75,
    "sub": "Vịt quay & cơm • Món Hoa",
    "quip": "Da giòn. Tinh thần cũng lên.",
    "image": 126
  },
  {
    "name": "Mì xá xíu",
    "price": 55,
    "sub": "Mì trứng & thịt xá xíu • Món Hoa",
    "quip": "Sợi mì dài hơn thời gian nghỉ trưa.",
    "image": 127
  },
  {
    "name": "Mì udon xào",
    "price": 110,
    "sub": "Hải sản & rau • Nhật Bản",
    "quip": "Sợi to. Kèo thơm.",
    "image": 128
  },
  {
    "name": "Burger gà & khoai tây",
    "price": 80,
    "sub": "Gà giòn & khoai tây • Quốc tế",
    "quip": "Cắn một phát. Hết phân vân.",
    "image": 129
  },
  {
    "name": "Mì Ý sốt cà chua & phô mai",
    "price": 170,
    "sub": "Cà chua & mascarpone • Ý",
    "quip": "Sốt cà chua cứu một ngày nhạt nhẽo.",
    "image": 130
  },
  {
    "name": "Miến xào",
    "price": 55,
    "sub": "Thịt & rau • Việt Nam",
    "quip": "Miến này không phải miếng mồi deadline.",
    "image": 131
  }
].map(food=>({...food,rarity:priceRarity(food.price)}));