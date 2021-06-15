import React, {useState, useEffect} from "react";
import './App.scss';
import CreateTask from "./components/CreateTask/CreateTask";
import TaskOnBoard from "./components/TaskOnBoard/TaskOnBoard";
import axios from "axios";


function App() {

  const [allTasks, setAllTasks] = useState([]);

  const getAllTasks = async () => {
    const res = await axios.get("http://localhost:4000/allTasks");
    setAllTasks(res.data.data);
  }

  useEffect(() => {
    getAllTasks();
  }, [])

  return (
    <div className="App">
      <h1 className="title">ToDo List</h1>
      <CreateTask setAllTasks={setAllTasks}/>
      <TaskOnBoard setAllTasks={setAllTasks} allTasks={allTasks}/>
    </div>
  );
}

export default App;
