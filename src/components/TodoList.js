import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function TodoList(props) {
  const classes = useStyles();
  const [checked, setChecked] = useState([0]);

  const handleToggle = task => () => {
    const currentIndex = checked.indexOf(task);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(task);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
      props.handleToggleCompleted(task);
  };
  const handleChecked = (task) =>  {
    if (task.completed) {
        return 1;
    } else {
        return 0;
    }
  }

  return (
          <div className='todo-list'>
      <List className={classes.root}>
          {props.taskList.map(task => {
              const labelId = `checkbox-list-label-${task}`;
    
            return (
              <ListItem
                key={task.id}
                role={undefined}
                dense
                button
                onClick={handleToggle(task)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={handleChecked(task)}
                    // checked={checked.indexOf(task) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                {/* set the list item text with the value.item  */}
                <ListItemText id={labelId} primary={task.item} />
              </ListItem>
            );
          })}
        </List>
          </div>
  );
}
