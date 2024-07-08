//Create web server with express
const express = require('express');
const app = express();
const port = 3000;

//Path to our data model
const Comment = require('./comment');

//Create a new comment
app.get('/comment/create', (req, res) => {
    let comment = new Comment({name: 'Dylan', comment: 'This is a comment'});
    comment.save((err) => {
        if(err) res.status(500).send('Error: '+err);
        res.status(200).send('Comment created successfully');
    });
});

//Find a particular comment
app.get('/comment/read', (req, res) => {
    Comment.find({name: 'Dylan'}, (err, comment) => {
        if(err) res.status(500).send('Error: '+err);
        res.status(200).send(comment);
    });
});

//Update a particular comment
app.get('/comment/update', (req, res) => {
    Comment.updateOne({name: 'Dylan'}, {comment: 'This comment is updated'}, (err, comment) => {
        if(err) res.status(500).send('Error: '+err);
        res.status(200).send(comment);
    });
});

//Delete a particular comment
app.get('/comment/delete', (req, res) => {
    Comment.deleteOne({name: 'Dylan'}, (err) => {
        if(err) res.status(500).send('Error: '+err);
        res.status(200).send('Comment deleted successfully');
    });
});

//Start server
app.listen(port, () => {
    console.log('Server started on port '+port);
});