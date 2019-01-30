const books = []
const id = 0

module.exports = {
  read: (req,res)=>{
    res.status(200).send(books)
  },

  create: (req,res)=>{
    //data will come in with the request and will be in request.body. the data should then be destructured
    const {title,author} = req.body;
    //create a new object to store the book's details and assign an id to it. Id is gotten from above
    let book ={ id:id, title:title, author:author}

    //push the new book object into the books array declared above
    books.push(book);

    //increase the id by 1
    id++

    //send the books object
    res.status(200).send(books);
  },

  update: (req,res)=>{
    //initialise an index to a null value
    let index = null;
    //for each book object in the books array, if the id of the book object(book.id) is equal to the id coming in through the request parameter, Number(req.params.id), set the index that was initialised to the index of the book object.
    books.forEach((book,i)=>{
      if(book.id === Number(req.params.id)){
        index = i
      }
    })

    //at the location of the book in the array, books[index], keep the id the same, and set the author and title to be either the values coming in from the request, req.body.title/req.body.author or their initial values
    books[index] = {
      id: books[index].id,
      title: req.body.title||books[index].title,
      author:req.body.author||books[index].author
    };

    //send back the updated books object
    res.status(200).send(books);
  },

  delete: (req,res)=>{
    //initialise an index value and set it to null. 
    let index = null;

    //for each book object in the book array with an index of i, if the book id(book.id) is equal to the id coming in from the request parameter, Number(req.params.id), set the value of the initialised index to the index of the book object in the array(i). 
    books.forEach((book,i)=>{
      if(book.id === Number(req.params.id)){
        index = i;
      }
    })

    //splice the books array at the index of the book item to delete it
    books.splice(index,1);

    //return the new books array
    res.status(200).send(books)
  }
};