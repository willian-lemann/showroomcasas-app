const PostService = require('../services/PostService');

module.exports = {

    async index(request, response) {
        await PostService.index(request, response);
    },

    async store(request, response) {
        await PostService.store(request, response);
    },
};