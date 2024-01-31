const mongoose = require('mongoose');

main()
.then((res)=>{console.log(`Connection Success! ${res}`)})
.catch((err) => {console.log(err)});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    author:{
        type:String
    },
    price:{
        type:Number,
        default:200
    }
})
const Book = mongoose.model("Book",bookSchema);
// Book.insertMany([
//     {title:"A Nation of Idiots"},
//     {title:"Don't Believe Everything You Think (English)", author:"Joseph Nguyen"},
//     {title:"The Power of Your Subconscious Mind", author:"Joseph Murphy", price:99}
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

const book1 = new Book({title:"The Power of Your Subconscious Mind", author:"Joseph Murphy", price:99});
book1.save().then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })