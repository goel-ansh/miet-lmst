import React from "react";
import ReactDOM from "react-dom/client"

SelectStudent = () =>{
    return (
        <div className="select-student">
            <table className="select-student-table">
                <thead>
                    <tr>
                        <th>Roll No.</th>
                        <th>Student Name</th>
                        <th>Address</th>
                        <th>Phone No.</th>
                        <th>Branch</th>
                        <th>Course</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2200680100064</td>
                        <td>Ansh Goel</td>
                        <td>Jagriti Vihar Meerut</td>
                        <td>7599998811</td>
                        <td>CSE</td>
                        <td>BTECH</td>
                        <td>2nd</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SelectStudent