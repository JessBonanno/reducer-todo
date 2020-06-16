export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    item: "test the app",
    completed: false,
    id: 3892987588
  }
];

export const listReducer = (state, action) => {
  switch (action.type) {
    //   correctly adding items to state
    case "ADD_ITEM":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ];

    //   correctly toggling completed
    case "TOGGLE_COMPLETED":
      return [
        ...state.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              completed: !item.completed
            };
          }
          return item;
        })
      ];
    //   correctly clearing completed
    case "CLEAR_COMPLETED":
      console.log("state in clear: ", state);
      return [...state.filter(item => item.completed === false)];

    default:
      return state;
  }
};
