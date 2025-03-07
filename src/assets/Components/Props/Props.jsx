import React from "react";
 import "../../CSS/Props.css";

function Student(props){
    return (
        <>  
            <h1>Props</h1>
            <div className="student">
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{props.name}</td>
                        </tr>
                        <tr>
                            <th>Age</th>
                            <td>{props.age}</td>
                        </tr>
                        <tr>
                            <th>Result</th>
                            <td>{props.result ? "Pass": "Fail"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );

};



export default Student;
