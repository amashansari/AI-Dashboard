const initialstate = {
  sessionShow: false,
};

const myReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "CREATE_SESSION_FORM":
      return { ...state, sessionShow: action.payload };

    default:
      return state;
  }
};

export default myReducer;
