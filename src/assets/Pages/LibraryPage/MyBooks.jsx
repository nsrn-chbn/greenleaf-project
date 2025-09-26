import React, { useState } from "react";
import '../LibraryPage/MyBooks.css'

function Library() {
    const [books, setBooks] = useState([
        {title: "Book 1", author: "Author of book 1" },
        {title: "Book 2", author: "Author of book 2" },
        {title: "Book 3", author: "Author of book 3" },
    ]);

    function editBook(){
    // add function to edit book info in local storage
    };

    function addToFavourite() {
    // add function to label book as 'favourite' in local storage

    };

    function deleteBook() {
    // add function to delete book from local storage
    };

    function addBook() {
    // add link that takes you to book adding page
    };
    
return (

    <>
        <div className="library">

            <h2 className= "MyPlantLibrary" >📚 My Plant Library 🌱</h2>

            {books.map((book) => (

                <div className="book-card">

                    <div className="book-info">
                        <p className= "book-title" >{book.title}</p>
                        <p>{book.author}</p>
                    </div>

                    <div className="book-actions">
                        <button onClick={() => addToFavourite(book)} > ⭐ Favourite </button>
                        <button onClick={() => editBook(book)} > ✏️ Edit </button>
                        <button onClick={() => deleteBook(book)} > 🗑️ Delete </button>
                    </div>

                </div>
            ))}

          <button className='addBookBtn' onClick={() => addBook(book)} > ➕ Add Book </button>


        </div>


    </>
    
        
    );
}

export default Library;
