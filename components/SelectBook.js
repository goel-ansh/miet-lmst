import React from "react";
import ReactDOM from "react-dom/client"

SelectBook = () =>{
    return (
        <div className="select-book">
            <table className="select-book-table">
                <thead>
                    <tr>
                        <th>Book S No.</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Branch</th>
                        <th>Course</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1449</td>
                        <td>How Web Works?</td>
                        <td>Ansh Goel</td>
                        <td>CSE</td>
                        <td>BTECH</td>
                        <td>2nd</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SelectBook