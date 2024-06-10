const express = require('express');
const router = express.Router();
const {
    getBarang, 
    deleteBarang, 
    updateBarang, 
    tambahBarang
} = require ("../controller/Barang.js");

router.get('/barang', getBarang);
router.post('/tambahBarang', tambahBarang);
router.delete('/:kodebarang', deleteBarang);
router.put('/:kodebarang', updateBarang);

module.exports = router;