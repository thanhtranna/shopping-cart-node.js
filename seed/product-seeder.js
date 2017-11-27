const Product = require('../models/product');

const config = require("config");

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/nodejs_shoppingcart");
// mongoose.connect(process.env.MONGO_DB_URI);

var products = [
    new Product({
        imagePath: 'http://orig06.deviantart.net/befd/f/2012/316/b/2/naruto_chibi_by_kirin_48-d5ku8vp.png',
        title: 'Uzumaki Naruto',
        description: 'Naruto (—ナルト— NARUTO?) là loạt manga Nhật Bản bằng văn bản và minh họa bởi tác giả Kishimoto Masashi, đã được dựng thành anime (phim hoạt hình Nhật). Nhân vật chính là Uzumaki Naruto, một thiếu niên ồn ào, hiếu động, một ninja luôn muốn tìm cách khẳng định mình để được mọi người công nhận, rất muốn trở thành Hokage (Hỏa Ảnh) - người lãnh đạo ninja cả làng, được tất cả mọi người kính trọng.',
        price: 269
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwRAXIwhU3XwDp8e6dFeyE5xBRh3zEmzVDuTwB8VUsVZ2Q3wn',
        title: 'Uzumaki Naruto',
        description: 'Naruto (—ナルト— NARUTO?) là loạt manga Nhật Bản bằng văn bản và minh họa bởi tác giả Kishimoto Masashi, đã được dựng thành anime (phim hoạt hình Nhật). Nhân vật chính là Uzumaki Naruto, một thiếu niên ồn ào, hiếu động, một ninja luôn muốn tìm cách khẳng định mình để được mọi người công nhận, rất muốn trở thành Hokage (Hỏa Ảnh) - người lãnh đạo ninja cả làng, được tất cả mọi người kính trọng.',
        price: 209
    }),
    new Product({
        imagePath: 'https://nhacchokpop.files.wordpress.com/2013/11/eunhyuk_1383000018_male6b.jpg',
        title: 'Uzumaki Naruto',
        description: 'Naruto (—ナルト— NARUTO?) là loạt manga Nhật Bản bằng văn bản và minh họa bởi tác giả Kishimoto Masashi, đã được dựng thành anime (phim hoạt hình Nhật). Nhân vật chính là Uzumaki Naruto, một thiếu niên ồn ào, hiếu động, một ninja luôn muốn tìm cách khẳng định mình để được mọi người công nhận, rất muốn trở thành Hokage (Hỏa Ảnh) - người lãnh đạo ninja cả làng, được tất cả mọi người kính trọng.',
        price: 169
    }),
    new Product({
        imagePath: 'http://genknews.genkcdn.vn/thumb_w/640/2017/photo-4-1490329998183.jpg',
        title: 'Uzumaki Naruto',
        description: 'Naruto (—ナルト— NARUTO?) là loạt manga Nhật Bản bằng văn bản và minh họa bởi tác giả Kishimoto Masashi, đã được dựng thành anime (phim hoạt hình Nhật). Nhân vật chính là Uzumaki Naruto, một thiếu niên ồn ào, hiếu động, một ninja luôn muốn tìm cách khẳng định mình để được mọi người công nhận, rất muốn trở thành Hokage (Hỏa Ảnh) - người lãnh đạo ninja cả làng, được tất cả mọi người kính trọng.',
        price: 79
    }),
    new Product({
        imagePath: 'https://pbs.twimg.com/media/CX-2uICW8AAVZ4f.jpg',
        title: "Uzumaki Naruto",
        description: "Naruto (—ナルト— NARUTO?) là loạt manga Nhật Bản bằng văn bản và minh họa bởi tác giả Kishimoto Masashi, đã được dựng thành anime (phim hoạt hình Nhật). Nhân vật chính là Uzumaki Naruto, một thiếu niên ồn ào, hiếu động, một ninja luôn muốn tìm cách khẳng định mình để được mọi người công nhận, rất muốn trở thành Hokage (Hỏa Ảnh) - người lãnh đạo ninja cả làng, được tất cả mọi người kính trọng.",
        price: 108
    }),
    new Product({
        imagePath: 'http://ibdp.huluim.com/video/60771877?size=960x540',
        title: "Uzumaki Naruto",
        description: "Naruto (—ナルト— NARUTO?) là loạt manga Nhật Bản bằng văn bản và minh họa bởi tác giả Kishimoto Masashi, đã được dựng thành anime (phim hoạt hình Nhật). Nhân vật chính là Uzumaki Naruto, một thiếu niên ồn ào, hiếu động, một ninja luôn muốn tìm cách khẳng định mình để được mọi người công nhận, rất muốn trở thành Hokage (Hỏa Ảnh) - người lãnh đạo ninja cả làng, được tất cả mọi người kính trọng.",
        price: 99
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}