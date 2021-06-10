import React, {useState, useEffect} from "react";
import './App.css';
import CreateTask from "./components/CreateTask/CreateTask";
import TaskOnBoard from "./components/TaskOnBoard/TaskOnBoard";
import axios from "axios";


function App() {

  const [allTasks, setAllTasks] = useState([]);

  useEffect(async () => {
    await axios.get('http://localhost:4000/allTasks').then(res => {
      setAllTasks(res.data.data);
    });
  })

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <CreateTask setAllTasks={setAllTasks} allTasks={allTasks}/>
      <TaskOnBoard setAllTasks={setAllTasks} allTasks={allTasks}/>
    </div>
  );
}

export default App;
