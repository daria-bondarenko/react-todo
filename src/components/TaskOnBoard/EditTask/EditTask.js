import React, {useState} from "react";
import classes from "./EditTask.module.scss";
import axios from "axios";

const EditTask = ({allTasks, setAllTasks, setIsEdit, item, index}) => {

  const [editTask, setEditTask] = useState(item.text);

  const update = e => {
    setEditTask(e.target.value);
  };

  const onDoneClick = async () => {
    setIsEdit(null);

    await axios.patch('http://localhost:4000/editTask', {
      _id: item._id,
      text: editTask
    }).then(res => {
      setAllTasks([
        res.data
      ]);
    });
  };

  const onCancelClick = (e, index) => {
    setIsEdit(null);
  };

  return (
    <div>
      <input type="text" value={editTask} onChange={update}/>
      <button onClick={(e) => onDoneClick()}>yes</button>
      <button onClick={onCancelClick}>no</button>
    </div>
  )
};

export default EditTask;