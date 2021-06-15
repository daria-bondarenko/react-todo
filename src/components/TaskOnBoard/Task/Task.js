import React, {useState} from "react";
import classes from './Task.module.scss';
import axios from "axios";

const Task = ({item, setAllTasks, setIsEdit, index}) => {

  const onChangeCheckbox = async () => {

    await axios.patch('http://localhost:4000/editTask', {
      _id: item._id,
      isCheck: !item.isCheck
    }).then(res => {
      setAllTasks(
        res.data.data
      );
    });
  };

  const onEditClick = (e, index) => {
    setIsEdit(index);
  };

  const onDeleteClick = async () => {
    const res = await axios.delete(`http://localhost:4000/deleteTask?_id=${item._id}`);
      setAllTasks(res.data.data)
    }

  return (
    <div className={classes.task}>
      <input type="checkbox"
             checked={item.isCheck}
             onChange={onChangeCheckbox}
             className={classes.checkbox}/>
      <p className={classes.taskText}>{item.text}</p>
      <div className={classes.buttonContainer}>
      <button onClick={(e) => onEditClick(e, index)}
              className={classes.button}>
        Edit
      </button>
      <button onClick={(e) => onDeleteClick(e, index)}
              className={classes.button}>
        Del
      </button>
      </div>
    </div>
  )
};

export default Task;