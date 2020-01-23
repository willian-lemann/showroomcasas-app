const Post = require('../models/Post');
const cloudinary = require('../services/cloudinary');


exports.index = async (request, response) => {

    const posts = await Post.find();
    return response.json(posts); 
};


exports.store = async (request, response) => {
    const file = request.files.file;

    cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
        if (err)
            return response.json({ error: err });

        const post = await Post.create({
            name: file.name.split('.')[0],
            size: file.size,
            key: result.public_id,
            url: result.secure_url,
        });
        return response.json(post);
    });
};
