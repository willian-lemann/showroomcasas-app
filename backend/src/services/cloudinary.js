const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'willian-lemann',
    api_key: '934593528622315',
    api_secret: 'FHe98ISK8N1Cp6Ce13DzZoFU558'
});

module.exports = cloudinary;