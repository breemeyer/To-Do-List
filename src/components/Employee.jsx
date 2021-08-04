import React from 'react'

const Employee = (props) => {
 const { Task, Description, Duration, Time} = props;
 return (
     <div>
         <h1> {`Task: ${Task}`} </h1>
         <h2>{`Description: ${Description}`}</h2>
         <h2>{`Duration: ${Duration}`}</h2>
         <h3>{`Time: ${Time}`}</h3>

     </div>
 );
};

export default Employee;