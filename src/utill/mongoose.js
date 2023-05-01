module.exports = {
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map(mongoose=>mongoose.toObject())
    },
    mongooToObject: function (mongoose) {
        return mongoose? mongoose.toObject() : mongoose
    }
}