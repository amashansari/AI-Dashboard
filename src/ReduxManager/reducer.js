const initialstate = {
  sessionShow: false,
  aiChat: false,
};

const myReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "CREATE_SESSION_FORM":
      return { ...state, sessionShow: !action.payload };
    case "AI_CHAT_TOGGLE":
      return { ...state, aiChat: !action.payload };
    default:
      return state;
  }
};

export default myReducer;
