import React from "react";
import IndexSvg from "../../Assets/SVG/database.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleRefDoc } from "../../ReduxManager/action";

const CustomChatRef = () => {
  const docRef = useSelector((state) => state.refDoc);

  const dispatch = useDispatch();
  const handleCloseDocRef = () => {
    dispatch(toggleRefDoc(docRef));
  };
  return (
    <>
      <div className="main-doc-ref-cont">
        <div className="ai-chat-top">
          <div className="ai-chat-text d-flex gap-1">
            <span onClick={handleCloseDocRef}>&lt; Document Reference's</span>
          </div>
          <hr />
        </div>
        <div className="ref-cont-section rounded-2">
          <div className="ref-1 d-flex flex-column align-items-end mb-2 m-1">
            <div className="ref-top p-1 mb-1 rounded-2">
              <div className="doc">
                <div className="doc-index-left d-flex">
                  <div className="index-logo">
                    <img src={IndexSvg} alt="" />
                  </div>
                  &gt;
                  <div className=" ps-1">#1 document-2</div>
                  <span className="fileType">.xls</span>
                </div>
              </div>
            </div>
            <div className="ref-bottom p-1 rounded-2">
              The content provided by the AI is from the
              <span className="ref-name">#1 document-2.xls</span> Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Optio ducimus
              doloribus eos laboriosam at magni dolore illum, placeat neque
              eaque autem eligendi necessitatibus dolor numquam dicta! In modi
              praesentium aut.
            </div>
          </div>
          <div className="ref-1 d-flex flex-column align-items-end mb-2 m-1">
            <div className="ref-top p-1 mb-1 rounded-2">
              <div className="doc">
                <div className="doc-index-left d-flex">
                  <div className="index-logo">
                    <img src={IndexSvg} alt="" />
                  </div>
                  &gt;
                  <div className=" ps-1">#2 document-3</div>
                  <span className="fileType">.xls</span>
                </div>
              </div>
            </div>
            <div className="ref-bottom p-1 rounded-2">
              The content provided by the AI is from the
              <span className="ref-name">#2 document-3.xls</span> Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Optio ducimus
              doloribus eos laboriosam at magni dolore illum, placeat neque
              eaque autem eligendi necessitatibus dolor numquam dicta! In modi
              praesentium aut.
            </div>
          </div>
          <div className="ref-1 d-flex flex-column align-items-end mb-2 m-1">
            <div className="ref-top p-1 mb-1 rounded-2">
              <div className="doc">
                <div className="doc-index-left d-flex">
                  <div className="index-logo">
                    <img src={IndexSvg} alt="" />
                  </div>
                  &gt;
                  <div className=" ps-1">#3 document-6</div>
                  <span className="fileType">.xls</span>
                </div>
              </div>
            </div>
            <div className="ref-bottom p-1 rounded-2">
              The content provided by the AI is from the
              <span className="ref-name">#3 document-6.xls</span> Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Optio ducimus
              doloribus eos laboriosam at magni dolore illum, placeat neque
              eaque autem eligendi necessitatibus dolor numquam dicta! In modi
              praesentium aut.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomChatRef;
