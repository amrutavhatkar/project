const mongoose=require('mongoose');

const slotbookSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    time:{
        type:String,
        required:true
    }

})

const Slot = mongoose.model('SLOTBOOK',slotbookSchema);

module.exports = Slot;