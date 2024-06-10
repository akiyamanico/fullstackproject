const Barang = require('../models/BarangModel');

const getBarang = async (req, res) =>{
    try{
        const barang = await Barang.find();
        res.json(barang);
    }catch(err){
        res.status(500).json({
            message : "Internal Server Error",
        })
        console.log('Barang Not Found', err)
    }
}

const tambahBarang = async (req, res) =>{
    try{
        const barang = new Barang({
            kodebarang : req.body.kodebarang,
            namaBarang : req.body.namaBarang,
            satuan  : req.body.satuan,
            jumlahStok : req.body.jumlahStok,
            hargaJualSatuan : req.body.hargaJualSatuan,
            jumlahPenjualan : req.body.jumlahPenjualan,
        });
        const newBarang  = await barang.save();
        res.json(newBarang);
    }catch(err){
        res.status(500).json({
            message : "Internal Server Error",
        })
        console.log("Error!", err)
    }
}

const updateBarang = async (req, res) => {
    try {
        const { kBarang } = req.params.kodebarang;
        const updateBarang = await Barang.findOneAndUpdate(kBarang, req.body, {new:true, useFindAndModify:false}); 
        res.status(200).json(updateBarang);
    }catch (err) {
        res.status(500).json({
            message : "Internal Server Error",
        });
        console.log(err)
    }
}

const deleteBarang = async (req, res) => {
    try{
        const { kBarang } = req.params.kodebarang;
        const deleteBarang = await Barang.findOneAndDelete(kBarang);
        res.status(200).json(deleteBarang);
        console.log(kBarang)
    }catch(err){
        res.status(500).json({
            message : "Internal Server Error",
        });
        console.log("Error Delete! ", err)
    }
}

module.exports =  {getBarang, deleteBarang, updateBarang, tambahBarang};

