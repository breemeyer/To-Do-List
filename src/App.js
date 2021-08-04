import React, { useState } from "react";
import Employee from './components/Employee'
import "./App.css";

const employees = [
  {
    Task: "make coffee", 
    Description: "choose your flavor and get a cup",
    Duration: "10 minutes",
    Time: "morning"
  },   
  {
    Task: "Go for a walk", 
    Description: "take your coffee or a friend and walk through town",
    Duration:"3 miles or 1 hour",
    Time: "morning and afternoon"
  },
  {
    Task: "Go to the gym", 
    Description: "Plan your workout and pick out a power outfit",
    Duration: "1 to 2 hours",
    Time: "morning"
  }
];

export default function App() {
  return (
    <div className="App">
      {employees.map((employee) => (
      <Employee Task={employee.Task} Description={employee.Description} 
      Duration={employee.Duration} Time={employee.Time}/>
      ))}
    </div>
  );
}

