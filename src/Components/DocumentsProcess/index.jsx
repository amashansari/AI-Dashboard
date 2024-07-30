import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { expandDiv } from "../../ReduxManager/action";

const DocumentsProcess = () => {
  const dispatch = useDispatch()
  const [expandDocument, setExpandDocument] = useState(false);

  const handleDocumentExpand = () => {
    setExpandDocument(!expandDocument)
    dispatch(expandDiv(expandDocument))

  }
  return (
    <>
      <div className="main-document-process-container p-2">
        <div className="doc-top d-flex justify-content-between">
          <div className="doc-text ">Documents</div>
          <div className="expand-upload d-flex gap-2">
            <div className="doc-upload-btn doc-text" onClick={handleDocumentExpand}>{expandDocument ? `X`: `Expand Div`}</div>
            <div className="doc-upload-btn doc-text">Upload</div>
          </div>
        </div>
        <hr />
        <div className="doc-main">
          <div className="doc d-flex justify-content-between">
            <div className="doc-left">
              <span className="docq-text">Docq &gt;</span> document-1
              <span className="fileType">.xls</span>
            </div>
            <div className="doc-right">
              <span className="fileSize">246kb</span>
              <span className="loader">|</span>
              <span className="fileAction processing-action">
                ...processing
              </span>
            </div>
          </div>
          <div className="doc d-flex justify-content-between">
            <div className="doc-left">
              <span className="docq-text">Docq &gt;</span> document-2
              <span className="fileType">.xls</span>
            </div>
            <div className="doc-right">
              <span className="fileSize">246kb</span>
              <span className="loader-stop">|</span>
              <span className="fileAction completed-action">//completed</span>
            </div>
          </div>
          <div className="doc d-flex justify-content-between">
            <div className="doc-left">
              <span className="docq-text">Docq &gt;</span> document-3
              <span className="fileType">.xls</span>
            </div>
            <div className="doc-right">
              <span className="fileSize">246kb</span>
              <span className="loader-stop">|</span>
              <span className="fileAction completed-action">//completed</span>
            </div>
          </div>
          <div className="doc d-flex justify-content-between">
            <div className="doc-left">
              <span className="docq-text">Docq &gt;</span> document-4
              <span className="fileType">.xls</span>
            </div>
            <div className="doc-right">
              <span className="fileSize">246kb</span>
              <span className="loader">|</span>
              <span className="fileAction processing-action">
                ...processing
              </span>
            </div>
          </div>
          <div className="doc d-flex justify-content-between">
            <div className="doc-left">
              <span className="docq-text">Docq &gt;</span> document-5
              <span className="fileType">.xls</span>
            </div>
            <div className="doc-right">
              <span className="fileSize">246kb</span>
              <span className="loader">|</span>
              <span className="fileAction processing-action">
                ...processing
              </span>
            </div>
          </div>
          <div className="doc d-flex justify-content-between">
            <div className="doc-left">
              <span className="docq-text">Docq &gt;</span> document-6
              <span className="fileType">.xls</span>
            </div>
            <div className="doc-right">
              <span className="fileSize">246kb</span>
              <span className="loader-stop">|</span>
              <span className="fileAction completed-action">//completed</span>
            </div>
          </div>
          <div className="doc d-flex justify-content-between">
            <div className="doc-left">
              <span className="docq-text">Docq &gt;</span> document-7
              <span className="fileType">.xls</span>
            </div>
            <div className="doc-right">
              <span className="fileSize">246kb</span>
              <span className="loader-stop">|</span>
              <span className="fileAction completed-action">//completed</span>
            </div>
          </div>
          <div className="doc d-flex justify-content-between">
            <div className="doc-left">
              <span className="docq-text">Docq &gt;</span> document-8
              <span className="fileType">.xls</span>
            </div>
            <div className="doc-right">
              <span className="fileSize">246kb</span>
              <span className="loader">|</span>
              <span className="fileAction processing-action">
                ...processing
              </span>
            </div>
          </div>
          <div className="doc d-flex justify-content-between">
            <div className="doc-left">
              <span className="docq-text">Docq &gt;</span> document-9
              <span className="fileType">.xls</span>
            </div>
            <div className="doc-right">
              <span className="fileSize">246kb</span>
              <span className="loader">|</span>
              <span className="fileAction processing-action">
                ...processing
              </span>
            </div>
          </div>
          <div className="doc d-flex justify-content-between">
            <div className="doc-left">
              <span className="docq-text">Docq &gt;</span> document-10
              <span className="fileType">.xls</span>
            </div>
            <div className="doc-right">
              <span className="fileSize">246kb</span>
              <span className="loader-stop">|</span>
              <span className="fileAction completed-action">//completed</span>
            </div>
          </div>
          <div className="doc d-flex justify-content-between">
            <div className="doc-left">
              <span className="docq-text">Docq &gt;</span> document-11
              <span className="fileType">.xls</span>
            </div>
            <div className="doc-right">
              <span className="fileSize">246kb</span>
              <span className="loader-stop">|</span>
              <span className="fileAction completed-action">//completed</span>
            </div>
          </div>
          <div className="doc d-flex justify-content-between">
            <div className="doc-left">
              <span className="docq-text">Docq &gt;</span> document-12
              <span className="fileType">.xls</span>
            </div>
            <div className="doc-right">
              <span className="fileSize">246kb</span>
              <span className="loader">|</span>
              <span className="fileAction processing-action">
                ...processing
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentsProcess;
