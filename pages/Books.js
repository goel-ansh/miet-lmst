import React from "react";

const AddBookData = () => {
    return(
        <div className="add-book-data">
            <input placeholder="Book Name"></input>
            <input placeholder="Book Serial No."></input>
            <input placeholder="Author"></input>
            <input placeholder="Branch"></input>
            <input placeholder="Course"></input>
            <input placeholder="Year"></input>
            <input placeholder="Book Barcode"></input>
            <button>Scan Barcode</button>
            <button>Add Book Data</button>
        </div>
    )
}

Books = () => {
    return(
        <div className="books-mains">
            <h1>Add/ Edit/ Remove Book Data</h1>
            <AddBookData />
            <br />
            <hr />
        </div>
    )
}

export default Books
