var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var tagSchema = new Schema({	'label' : String});

module.exports = mongoose.model('Tag', tagSchema);
