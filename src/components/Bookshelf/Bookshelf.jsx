import { useState } from "react";



const Bookshelf = () => {
 const [books, setBooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);

 const [newBook, setNewBook] = useState({
    title : '',
    author: '',
 })


const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setNewBook({...newBook , [name] : value})
}



const handleSubmit = (event) => {
    // stopping the default form submission action
    event.preventDefault();
    setBooks([...books , newBook])
    // Reset the newBook state to its initial empty values to clear the form fields
    setNewBook ({title:'', author:''})
}

  return (
 <>
   
    <div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    
    <form onSubmit={handleSubmit}>
          <label htmlFor="title"> Title: </label>
          <input type="text" name="title" value={newBook.title} onChange={handleInputChange} />
          
          <label htmlFor="author"> Author: </label>
          <input type="text" name="author" value={newBook.author} onChange={handleInputChange} />
         
          
        <button type="submit">Add</button>
        </form>

  </div>

  <div className="bookCardsDiv">
    {books.map(( book , index)=> (
        //For each book in the array, create a “book card”
       
            <div className="bookCard" key={index}> 
            {book.title} by {book.author}</div>
       
    ))}
   
    </div>
</div>
</>
  )
}

export default Bookshelf;