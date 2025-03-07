import React from 'react'
import Student from './assets/Components/Props/Props.jsx'
 

function App() {

  return (
    <>
      <Student name="kishore" age ={20} result={true} />
      <Student />
    </>
  )
}
Student.defaultProps = {
  name: "No Name",
  age: 0,
  result:  false,
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
export default App
