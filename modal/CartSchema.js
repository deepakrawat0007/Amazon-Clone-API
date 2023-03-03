const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    user:{type: mongoose.Types.ObjectId,ref:"users"},
    item:{type:String , required:true},
    description:{type:String , required:true},
    price:{type:String , required:true},
    qty:{type:Number , required:true}
},{timestamps:true});

const Cart = mongoose.model("Carts" , CartSchema);

module.exports = Cart;