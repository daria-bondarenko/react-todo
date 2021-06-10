import React, {useState} from "react";
import classes from './Task.module.scss';
import axios from "axios";

const Task = ({item, allTasks, setAllTasks, setIsEdit, index}) => {

  const onChangeCheckbox = async () => {

    await axios.patch('http://localhost:4000/editTask', {
      _id: item._id,
      isCheck: !item.isCheck
    }).then(res => {
      setAllTasks([
        res.data
      ]);
    });
  };

  const onEditClick = (e, index) => {
    setIsEdit(index);
    console.log('lol');
  };

  const onDeleteClick = async (e, index) => {
    await axios.delete(`http://localhost:4000/deleteTask`,
      {data: {_id: `${allTasks[index]._id}`}}).then(res => {
      setAllTasks([
        res.data
      ]);
    });
  };

  return (
    <div className={classes.task}>
      <input type="checkbox" checked={item.isCheck} onChange={onChangeCheckbox}/>
      <p>{item.text}</p>
      <button onClick={(e) => onEditClick(e, index)}>edit</button>
      <button onClick={(e) => onDeleteClick(e, index)}>delete</button>
    </div>
  )
};

export default Task;