const mongoose = require('mongoose');
const Slot = require('../model/slotSchema');

exports.findAll = async (req,res)=>{
    await Slot.find()
    .then(slots => {
        res.json(slots);
    }).catch(err =>{
        res.status(500).send({
            msg:err.message
        });
    });
};

exports.save=async(req,res)=>{
    const newSlot =new Slot({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        time:req.body.time});


    await newSlot.save()
    .then(message => {
        res.json(message);
    }).catch(err =>{
        res.status(500).send({
            msg:err.message
        });
    });
};