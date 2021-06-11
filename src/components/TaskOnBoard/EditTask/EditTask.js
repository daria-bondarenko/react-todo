import React, {useState} from "react";
import classes from "./EditTask.module.scss";
import axios from "axios";

const EditTask = ({allTasks, setAllTasks, setIsEdit, item, index}) => {

  const [editTask, setEditTask] = useState(item.text);

  const update = e => {
    setEditTask(e.target.value);
  };

  const onDoneClick = async () => {

    await axios.patch('http://localhost:4000/editTask', {
      _id: item._id,
      text: editTask
    }).then(res => {
      setAllTasks(
        res.data.data
      );
    });

    setIsEdit(null);
  };

  const onCancelClick = (e, index) => {
    setIsEdit(null);
  };

  return (
    <div className={classes.task}>
      <input type="text" value={editTask}
             onChange={update}
             className={classes.inputEdit}/>
      <div className={classes.buttonContainer}>
      <button onClick={(e) => onDoneClick()}
              className={classes.button}>
        Yes
      </button>
      <button onClick={onCancelClick}
              className={classes.button}>
        No
      </button>
      </div>
    </div>
  )
};

export default EditTask;