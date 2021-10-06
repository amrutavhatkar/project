module.exports=(app) => {
    const express = require('express');
    const router = express.Router();
    
    const SlotController = require('../controller/slot.controller');
router.get('/',(req,res)=>{
    res.send('/myapp/ working');
})

router.get('/all',SlotController.findAll);
router.post('/add',SlotController.save);





    app.use('/myapp',router);
}