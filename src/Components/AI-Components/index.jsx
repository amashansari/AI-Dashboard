// import React from "react";
// import Logo1 from "../../Assets/SVG/code-editor.svg";
// import { Accordion } from "react-bootstrap";
// import Tree from "react-d3-tree";

// // Custom node rendering function
// const renderForeignObjectNode = ({ nodeDatum }) => (
//   <g>
//     {nodeDatum.name === "AI Container" ? (
//       <foreignObject width="200" height="100" x="-300" y="-110">
//         <div className="left-container rounded-2">
//           <div className="left-container-img">
//             <img src={Logo1} alt="AI Container Logo" />
//           </div>
//           <p className="mb-0"> AI Container</p>
//         </div>
//       </foreignObject>
//     ) : (
//       <foreignObject width="300" height="200" x="-150" y="-100">
//         <div className="accordion-container">
//           <Accordion className="ai-accordion" defaultActiveKey={nodeDatum.id}>
//             <Accordion.Item eventKey={nodeDatum.id}>
//               <Accordion.Header>{nodeDatum.name}</Accordion.Header>
//               <Accordion.Body>
//                 <div className="accordion-body-content">
//                   <div className="accordion-title">
//                     <span>CONTENT</span>
//                   </div>
//                   <div className="accordion-title-content">
//                     <p>
//                       We provided the best service powered by AI, making your work...
//                     </p>
//                   </div>
//                   <div className="accordion-animations">
//                     <span className="automation">AUTOMATION</span>
//                     <div className="accordion-animation-type d-flex justify-content-between">
//                       <div className="type-1 type-style">
//                         <span>Fade | Ease in</span>
//                       </div>
//                       <div className="type-2 type-style">
//                         <span>3+ Automation</span>
//                       </div>
//                       <div className="type-3">
//                         <span>+</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Accordion.Body>
//             </Accordion.Item>
//           </Accordion>
//         </div>
//       </foreignObject>
//     )}
//   </g>
// );

// const orgChart = {
//   name: "AI Container",
//   children: [
//     {
//       id: "1",
//       name: "AI Automation 2",
//     },
//     {
//       id: "2",
//       name: "AI Automation 3",
//     },
//     {
//       id: "3",
//       name: "AI Automation 4",
//     },
//     {
//       id: "4",
//       name: "AI Automation 5",
//     },
//   ],
// };

// const CustomAIComp = () => {
//   return (
//     <div className="main-ai d-flex justify-content-center align-items-center" style={{ width: '100%', height: '100%' }}>
//       <div className="right-container" style={{ width: '100%', height: '100%' }}>
//         <div id="treeWrapper" style={{ width: '100%', height: '100%' }}>
//           <Tree
//             data={orgChart}
//             renderCustomNodeElement={renderForeignObjectNode}
//             dimensions={{ width: 800, height: 600 }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomAIComp;


import React from "react";
import { Tree } from "react-tree-graph";
import Logo1 from "../../Assets/SVG/code-editor.svg";
import { Accordion } from "react-bootstrap";
import { Box } from "@mui/material";
import 'react-tree-graph/dist/style.css'; 

function ProductsPage() {
  const renderForeignObjectNode = ({ nodeDatum }) => (
    <g>
      {nodeDatum.name === "AI Container" ? (
        <foreignObject width="200" height="100" x="-300" y="-110">
          <div className="left-container rounded-2">
            <div className="left-container-img">
              <img src={Logo1} alt="AI Container Logo" />
            </div>
            <p className="mb-0"> AI Container</p>
          </div>
        </foreignObject>
      ) : (
        <foreignObject width="300" height="200" x="-150" y="-100">
          <div className="accordion-container">
            <Accordion className="ai-accordion" >
              <Accordion.Item >
                <Accordion.Header>{nodeDatum.name}</Accordion.Header>
                <Accordion.Body>
                  <div className="accordion-body-content">
                    <div className="accordion-title">
                      <span>CONTENT</span>
                    </div>
                    <div className="accordion-title-content">
                      <p>
                        We provided the best service powered by AI, making your
                        work...
                      </p>
                    </div>
                    <div className="accordion-animations">
                      <span className="automation">AUTOMATION</span>
                      <div className="accordion-animation-type d-flex justify-content-between">
                        <div className="type-1 type-style">
                          <span>Fade | Ease in</span>
                        </div>
                        <div className="type-2 type-style">
                          <span>3+ Automation</span>
                        </div>
                        <div className="type-3">
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </foreignObject>
      )}
    </g>
  );

  const data = {
    name: "Ai Automation",
    children: [
      {
        name: "Markus Ai",
      },
      {
        name: "ChatGPT",
      },
      {
        name: "Markus request",
      },
      {
        name: "Markus request",
      },
    ],
  };

  return (
    <Box>
      <Tree
        data={data}
        height={600}
        width={800}
        svgProps={{ className: "custom" }}
        nodeProps={{
          r: 15,
          fill: "#333",
        }}
        textProps={{
          dx: 0,
          dy: -20,
          fill: "#FFFFFF",
        }}
        pathProps={{
          stroke: "#90caf9",
          strokeWidth: 2,
        }}
        renderCustomNodeElement={renderForeignObjectNode}
      />
    </Box>
  );
}

export default ProductsPage;