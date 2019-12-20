const Thumbnail = require('../models/Thumbnail');

module.exports = {

    async index(req, res) {
        const thumbnails = await Thumbnail.find();
        return res.json(thumbnails);
    },

    async store(req, res) {

        const { filename } = req.file;

        const thumbnail = await Thumbnail.create({
            thumbnail: filename
        })
        return res.json(thumbnail);
    }
};