var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Counter = require('./Counter');

var UrlSchema = new Schema({
  _id: {
    type: String,
    require: true,
  },
  long_url: {
    type: String,
  },
  created_at: {
    type: Date,
  }
});

UrlSchema.pre('save', function (next) {
  var doc = this;
  Counter.findByIdAndUpdate({ _id: 'url_count'}, {$inc: { seq: 1 }}, function (err, counter) {
    if (err) return next(err);
    doc.created_at = new Date();
    doc._id = counter.seq;
    next();
  });
})

module.exports = mongoose.model('Url', UrlSchema);