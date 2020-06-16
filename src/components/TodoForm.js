import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormButtons from "./FormButtons";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

export default function TodoForm(props) {
  const classes = useStyles();

  return (
    <div className="form">
      <form
        type="submit"
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={props.handleAddItem}

      >
        <TextField
          value={props.task}
          id="standard-basic"
          label="Enter Task"
          onChange={props.handleChanges}
        />
      </form>
      <FormButtons
        handleAddItem={props.handleAddItem}
        handleClearCompleted={props.handleClearCompleted}
      />
    </div>
  );
}
