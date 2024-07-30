const initialstate = {
  sessionShow: false,
  aiChat: false,
  refDoc: false,
  sessDetail:false,
  divExpand: false,
  activeMute: false,
};

const myReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "CREATE_SESSION_FORM":
      return { ...state, sessionShow: !action.payload };
    case "AI_CHAT_TOGGLE":
      return { ...state, aiChat: !action.payload };
    case "REF_DOC_TOGGLE":
      return { ...state, refDoc: !action.payload };
    case "TOGGLE_SESSION_DETAIL":
      return { ...state, sessDetail: !action.payload };
    case "EXPAND_DIV":
      return { ...state, divExpand: !action.payload };
    case "TOGGLE_ACTIVE_MUTE":
      return { ...state, activeMute: !action.payload };
    default:
      return state;
  }
};

export default myReducer;
