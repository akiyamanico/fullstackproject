const mongoose =  require('mongoose');

const barangSchema = mongoose.Schema({
    kodebarang :{
        type: String,
        required : true,
    },
    namaBarang:{
        type: String,
        required : true,
    },
    satuan:{
        type: String,
        required : true,
    },
    jumlahStok:{
        type: Number,
        required : true,
    },
    hargaJualSatuan:{
        type: Number,
        required : true,
    },
    jumlahPenjualan:{
        type: Number,
    },
})

const Barang = mongoose.model('Barang', barangSchema);

module.exports = Barang;
