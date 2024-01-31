const mongoose = require("mongoose");
const { Schema } = mongoose;


main().then(() => { console.log("connectiont successfull") }).catch((err) => { console.log(err) });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
    item:String,
    price:Number
})

const customerSchema = new Schema({
    name:String,
    order:[
        {type:Schema.Types.ObjectId, ref:"Order"}
    ]
})

customerSchema.post("findOneAndDelete", async(customer)=>{
    if(customer.order.length){
        let res = await Order.deleteMany({_id:{$in:customer.order}});
        console.log(res);
    }
})

const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);

const addCustomer = async()=>{
     let cus = new Customer({
        name:"Jitu Kumar"
     })
     let order1 = new Order({
        item:"samosa",
        price:12
     })
     let order2 = new Order({
        item:"patise",
        price:22
     })
     
     let orderRes1 = await order1.save();
     let orderRes2 = await order2.save();

     cus.order.push(orderRes1);
     cus.order.push(orderRes2);
     let res = cus.save();
     console.log(res);
}
// addCustomer();

// let getData = async()=>{
//     let result = await Customer.find({name:"Ram Kumar"});
//     console.log(result);
// }

// getData();
const delCus = async()=>{
    let data = await Customer.findByIdAndDelete("659840cfd40e6ea189b7c3a1");
    console.log(data);
}
delCus();