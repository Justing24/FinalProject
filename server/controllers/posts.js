const express = require('express');
const app = express.Router();
const posts = require('../models/posts');


app.get('/', (req, res, next) => {
    posts.getAllPosts()
        .then(posts => {
            res.send(posts);
        })
        .catch(next);
})
    .get('/:title', (req, res, next) => {
        posts.getPostByTitle(req.params.title)
            .then(post => {
                res.send(post);
            })
            .catch(next);
        
    })
    .post('/', (req, res, next) => {
        posts.addPost(req.body)
            .then(post => {
                console.log(post);
                res.status(200).send({});
                
            })
            .catch(next);
    })
    .delete('/:title', (req, res, next) => {

        posts.deletePost(req.params.title)
            .then(post => {
                res.status(200).send({});
            })
            .catch(next);
    });
    
    module.exports = app;