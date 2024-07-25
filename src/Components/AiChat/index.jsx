import React from "react";
import { useSelector } from "react-redux";

const CustomAiChat = () => {
  const aiChatToggle = useSelector((state) => state.aiChat);

  return (
    <>
      <div
        className={`ai-chat p-2 rounded-2 ${
          aiChatToggle === true ? "showAiChat" : ""
        }`}
      ></div>
      ;
    </>
  );
};

export default CustomAiChat;
