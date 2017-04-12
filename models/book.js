var mongoose = require('mongoose');

//Genre Schema

var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    author:{
        type: String,
        required: true
    },
    pages:{
        type: String,
    },
    image_url:{
        type: String,
    },
    buy_url:{
        type: String,

    },
    create_date:{
        type: Date,
        default: Date.now()
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

//get Books

module.exports.getBooks = function (callback, limit) {
    Book.find(callback).limit(limit);
}


//add Book By Id

module.exports.addBook = function (book, callback) {
    Book.create(book,callback);
}

module.exports.removeBook = function (id, callback) {
    var query = {_id: id};
    Book.remove(query,callback);
}


//Update Book
module.exports.updateBook = function (id, book, options, callback) {
    var query = {_id: id};
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url
    }
    Book.findOneAndUpdate(query, update, options, callback);
}