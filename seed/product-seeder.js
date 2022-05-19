var Product = require('../models/product');
var mongoose = require('mongoose');
const product = require('../models/product');
const { exists } = require('../models/product');
mongoose.connect('mongodb://localhost:27017/shop',{ useNewUrlParser: true });
var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/180717_%EC%97%B4%EB%A6%B0%EC%9D%8C%EC%95%85%ED%9A%8C_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_02.jpg',
        title: 'Twice',
        description: 'Kpop',
        price: 10
    }),
    new Product({
        imagePath: 'https://www.allkpop.com/upload/2021/11/content/081453/web_data/allkpop_1636401262_20211108-ive.jpeg',
        title: 'IVE',
        description: 'Kpop',
        price: 15
    }),
    new Product({
        imagePath: 'https://www.fajarpendidikan.co.id/wp-content/uploads/2022/02/bp.jpg',
        title: 'Blackpink',
        description: 'Kpop',
        price: 20
    }),
];
var done = 0;
for (var i=0; i<products.length; i++) {
    products[i].save(function(err, result){
        done++;
        if (done==products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}