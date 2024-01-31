const mongoose = require('mongoose');

main()
.then((res)=>{console.log(`Connection Success! ${res}`)})
.catch((err) => {console.log(err)});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})
const teacherSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    salary:Number,
    subject:String
})
const User = mongoose.model("User", userSchema);
const Teacher = mongoose.model("Teacher", teacherSchema);

const user1 = new User({
    name:"Adam",
    email:"adam123@gmail.com",
    age:23
})
/* const user2 = new User({ name:"Eve", email:"eve123@gmail.com", age:24 })
user2.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)}); */

/* User.insertMany([
    { name:"Tony", email:"tony123@gmail.com", age:24 },
    { name:"Bruce", email:"bruce123@gmail.com", age:21 },
    { name:"Peter", email:"peter123@gmail.com", age:22 }
]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)}); */

// User.find().then((data)=>{console.log(data)});
// User.find({age:22}).then((data)=>{console.log(data)});
// User.find({age:{$gt:22}}).then((data)=>{console.log(data)});
// User.findOne({age:{$gt:22}}).then((data)=>{console.log(data)});
// User.findById("658afc9bd3ccab9fa317f4b9").then((data)=>{console.log(data)});

// User.updateOne({age:{$gt:20}},{name:"Tony"}).then((data)=>{console.log(data)}).catch((err)=>{console.log(err)});
// User.updateMany({age:{$gt:20}},{name:"Tony"}).then((data)=>{console.log(data)}).catch((err)=>{console.log(err)});

// User.findOneAndUpdate({age:22},{name:"Adam"}).then((data)=>{console.log(data)}).catch((err)=>{console.log(err)}) // show old and update
// User.findOneAndUpdate({age:22},{name:"Adam"},{new:true}).then((data)=>{console.log(data)}).catch((err)=>{console.log(err)}) // update and show new 
// User.findByIdAndUpdate("658afc9bd3ccab9fa317f4b9",{name:"Eve"},{new:true}).then((data)=>{console.log(data)}).catch((err)=>{console.log(err)}) //fint by id and update and show new 

// User.deleteOne({age:24}).then((data)=>{console.log(data)}).catch((err)=>{console.log(err)});
// User.deleteMany({name:"Tony"}).then((data)=>{console.log(data)}).catch((err)=>{console.log(err)});
// User.findByIdAndDelete("658afc9bd3ccab9fa317f4ba").then((data)=>{console.log(data)}).catch((err)=>{console.log(err)});
// User.findOneAndDelete({name:"Eve"}).then((data)=>{console.log(data)}).catch((err)=>{console.log(err)});

