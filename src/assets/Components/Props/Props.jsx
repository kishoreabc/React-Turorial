import React from "react";
import "../../CSS/Props.css";
import PropTypes from "prop-types";
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

Student.defaultProps = {
    name: "No Name",
    age: 0,
    result:  false,
};
Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    result: PropTypes.bool,
};

export default Student;
