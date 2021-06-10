import React, {useState} from "react";
import classes from "./CreateTask.module.scss";
import axios from "axios";

const CreateTask = ({setAllTasks, allTasks}) => {

  const [newTask, setNewTask] = useState('');

  const onAddClick = async (e) => {
    await axios.post('http://localhost:4000/createTask', {
      text: newTask,
      isCheck: false
    }).then(res => {
      setAllTasks([
        res.data
      ]);
    });

    setNewTask('');
  };

  const update = e => {
    setNewTask(e.target.value);
  };

  return (
    <div>
      <input type="text" value={newTask} name="task"
             onChange={update} placeholder={'Write your task...'}/>
      <button onClick={onAddClick}>Add</button>
    </div>
  )
}

export default CreateTask;