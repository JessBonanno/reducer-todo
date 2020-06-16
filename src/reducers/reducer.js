import moment from 'moment';

export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    due: '',
    id: 3892987589,
  },
  {
    item: 'test the app',
    completed: false,
    due: '',
    id: 3892987588,
  },
];

export const listReducer = (state, action) => {
  switch (action.type) {
    //   correctly adding items to state
    case 'ADD_ITEM':
      // const date = moment(action.payload.due, 'YYYY-MM-DD');

      return [
        ...state,
        {
          item: action.payload.task,
          completed: false,
          due: action.payload.due,
          id: Date.now(),
        },
      ];

    //   correctly toggling completed
    case 'TOGGLE_COMPLETED':
      let timeCompleted = moment().format('MMMM Do YYYY, h:mm:ss a');
      return [
        ...state.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              completed: !item.completed,
              timeCompleted: timeCompleted,
            };
          }
          return item;
        }),
      ];
    //   correctly clearing completed
    case 'CLEAR_COMPLETED':
      console.log('state in clear: ', state);
      return [...state.filter(item => item.completed === false)];

    default:
      return state;
  }
};
