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

export const toggleRefDoc = (refdoc) => {
  return {
    type: "REF_DOC_TOGGLE",
    payload: refdoc,
  };
};

export const sessionDetail = (sessDetail) => {
  return {
    type: "TOGGLE_SESSION_DETAIL",
    payload: sessDetail,
  };
};
