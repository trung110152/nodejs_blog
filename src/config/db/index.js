const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/f8_laptrinh',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect successfylly!!!');
    } catch (err) {
        // timeout 30s
        console.log('COnnect falure')
    }
}

module.exports = {connect};