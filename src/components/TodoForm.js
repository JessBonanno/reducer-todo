import React, { useState } from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormButtons from './FormButtons';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

// Tue Jun 02 2020 12:37:00 GMT-0400 (Eastern Daylight Time)

export default function TodoForm(props) {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    console.log(date);

    setSelectedDate(date);
  };

  return (
    <div className='form'>
      <form
        type='submit'
        className={classes.root}
        noValidate
        autoComplete='off'
        onSubmit={props.handleAddItem}>
        <TextField
          value={props.task}
          id='standard-basic'
          label='Enter Task'
          onChange={props.handleChanges}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify='space-around'>
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='MM/dd/yyyy'
              margin='normal'
              id='date-picker-inline'
              label='Due Date'
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </form>
      <FormButtons
        handleAddItem={e => props.handleAddItem(e, selectedDate)}
        handleClearCompleted={props.handleClearCompleted}
      />
    </div>
  );
}
