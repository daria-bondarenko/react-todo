import React, {useState} from "react";
import classes from './TaskOnBoard.module.scss'
import EditTask from "./EditTask/EditTask";
import Task from "./Task/Task";

const TaskOnBoard = ({allTasks, setAllTasks}) => {

  const [isEdit, setIsEdit] = useState(null);

  return (
    allTasks?.map((item, index) => {

        const props = {
          key: `key-${index}`,
          allTasks: allTasks,
          setAllTasks: setAllTasks,
          setIsEdit: setIsEdit,
          item: item,
          index: index
        };

        return isEdit === index
          ? (<EditTask {...props} className={classes.taskContainer}/>)
          : (<Task {...props} className={classes.taskContainer}/>)
      }
    )
  )
};

export default TaskOnBoard;