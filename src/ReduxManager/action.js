export const toggleSession = (sessionForm) => {
  return {
    type: "CREATE_SESSION_FORM",
    payload: sessionForm,
  };
};

export const toggleAiChat = (aichat) => {
  return {
    type: "AI_CHAT_TOGGLE",
    payload: aichat,
  };
};
