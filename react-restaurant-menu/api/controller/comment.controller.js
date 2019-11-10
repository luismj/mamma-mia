const Comment = require('../models/comments');

exports.saveComment = (req, res) => {
    const comment = new Comment(req.body);
    comment.save((err, comment) => {
        if(err) {
            return res.status(500).send({error: err});
        }
        res.status(201).json(comment);
    })
};

exports.getComments = (req, res) => {
    Comment.find({}, (err, comments) => {
        if(err) {
            return res.status(500).send({error: err});
        }
        res.status(200).json(comments);
    });
};