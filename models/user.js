const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: String,
        unique : true
    },
    password: {
        type: String,
    }
    
    
});

const User = mongoose.model('User',userSchema,'User');

module.exports = User;