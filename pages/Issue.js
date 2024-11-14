import React from "react"
import SelectBook from "../components/SelectBook"
import SelectStudent from "../components/SelectStudent"

const AddStudent = () => {
    return(
        <div>
            <input placeholder="Student Roll No."></input>
            <button>Add Student</button>
        </div>
    )
}

const AddBook = () => {
    return(
        <div>
            <input placeholder="Book Serial No."></input>
            <button>Add Book</button>
            <button>Scan Book</button>
        </div>
    )
}

const Issue = () => {
    return(
        <div className="main">
            <br />
            <AddStudent />
            <SelectStudent />
            <br />
            <AddBook />
            <SelectBook />
        </div>
    )
}

export default Issue