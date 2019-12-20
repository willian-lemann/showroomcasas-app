const mongoose = require('mongoose');

const Thumbnail = new mongoose.Schema({
    Thumbnail: String,
}, {
    toJSON: {
        virtuals: true,
    },
});

Thumbnail.virtual('thumbnail_url').get(function () {
    return `http://localhost:3333/files/${this.Thumbnail}`
})

module.exports = mongoose.model('Thumbnail', Thumbnail);