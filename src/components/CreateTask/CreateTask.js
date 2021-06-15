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
      setAllTasks(
        res.data.data
      );
    });
    setNewTask('');
  };

  const update = e => {
    setNewTask(e.target.value);
  };

  return (
    <div className={classes.divAdd}>
      <input type="text"
             value={newTask}
             name="task"
             onChange={update}
             placeholder={'Your task...'}
             className={classes.inputAdd}/>
      <button onClick={onAddClick}
              className={classes.buttonAdd}>
        Add
      </button>
    </div>
  )
}

export default CreateTask;