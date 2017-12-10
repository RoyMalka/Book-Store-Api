var mongoose = require('mongoose');

//genre schema 

var bookSchema = mongoose.Schema({
    title:{
        type: String ,
        require: true
    },
    genre:{
        type: String ,
        require: true
    },
    description:{
        type: String ,
        require: true
    },
    name:{
        type: String ,
        require: true
    },
    author:{
        type: String ,
        require: true
    },
    pages:{
        type: Date,
        default: Date.now
    },
    publisher:{
        type: String ,
        require: true
    },
    image_url:{
        type: String ,
        require: true
    },
    buy_url:{
        type: String ,
        require: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

//get Books

module.exports.getBooks = function(callback , Limit){
    Book.find(callback).limit(Limit);
}

module.exports.getBookById = function(id,callback){
    Book.findById(id,callback);
}


//Add Book

module.exports.addBook = function(book,callback){
    Book.create(book,callback);   
}

//Update Book

module.exports.updateBook = function(id,book,options,callback){
    var query = {_id : id};
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url
    }
    Book.findOneAndUpdate(query,update,options,callback);   
}


//Delete Genre

module.exports.deleteBook = function(id,callback){
    var query = { _id: id}
    Book.remove(query,callback);   
}