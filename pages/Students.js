import React from "react";

const AddStudentData = () => {
    return(
        <div className="add-student-data">
            <input placeholder="Student Name"></input>
            <input placeholder="Student Roll No."></input>
            <input placeholder="Address"></input>
            <input placeholder="Phone No."></input>
            <input placeholder="Branch"></input>
            <input placeholder="Course"></input>
            <input placeholder="Year"></input>
            <input placeholder="Student Barcode"></input>
            <button>Scan Barcode</button>
            <button>Add Student Data</button>
        </div>
    )
}

const Students = () => {
    return(
        <div className="students-main">
            <h1>Add/ Edit/ Remove Student Data</h1>
            <AddStudentData />
            <br />
            <hr />
        </div>
    )
}

export default Students