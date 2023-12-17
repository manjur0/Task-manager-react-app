// Reducer function
export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    // case "EDIT_TASK":
    //   return state.map((task) =>
    //     task.id === action.payload.id
    //       ? { ...task, text: console.log(action.payload.text) }
    //       : task
    //   );

    default:
      return state;
  }
};
