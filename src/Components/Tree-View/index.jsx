// import * as React from "react";
// import clsx from "clsx";
// import { animated, useSpring } from "@react-spring/web";
// import { styled, alpha } from "@mui/material/styles";

// import Box from "@mui/material/Box";
// import Collapse from "@mui/material/Collapse";
// import Typography from "@mui/material/Typography";
// import ArticleIcon from "@mui/icons-material/Article";
// import DeleteIcon from "@mui/icons-material/Delete";
// import FolderOpenIcon from "@mui/icons-material/FolderOpen";
// import FolderRounded from "@mui/icons-material/FolderRounded";

// import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
// import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
// import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
// import PausePresentationOutlinedIcon from "@mui/icons-material/PausePresentationOutlined";
// import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
// import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
// import ReplyAllOutlinedIcon from "@mui/icons-material/ReplyAllOutlined";
// import DifferenceOutlinedIcon from "@mui/icons-material/DifferenceOutlined";
// import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
// import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
// import AddIcon from "@mui/icons-material/Add";
// import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";

// import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";

// import ImageIcon from "@mui/icons-material/Image";
// import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
// import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
// import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
// import { treeItemClasses } from "@mui/x-tree-view/TreeItem";
// import { unstable_useTreeItem2 as useTreeItem2 } from "@mui/x-tree-view/useTreeItem2";
// import {
//   TreeItem2Checkbox,
//   TreeItem2Content,
//   TreeItem2IconContainer,
//   TreeItem2Label,
//   TreeItem2Root,
// } from "@mui/x-tree-view/TreeItem2";
// import { TreeItem2Icon } from "@mui/x-tree-view/TreeItem2Icon";
// import { TreeItem2Provider } from "@mui/x-tree-view/TreeItem2Provider";

// const ITEMS = [
//   {
//     id: "1",
//     label: "Documents",
//     fileType: "doc",
//     children: [
//       { id: "1.1", label: "Active Documents", fileType: "folder" },
//       { id: "1.2", label: "Muted Documents", fileType: "muteDoc" },
//     ],
//   },

//   {
//     id: "2",
//     label: "Sessions",
//     fileType: "muteDoc",
//     children: [
//       { id: "2.1", label: "Promoted Sessions", fileType: "promoteSession" },
//       { id: "2.2", label: "Published Sessions", fileType: "publishSession" },
//       { id: "2.3", label: "Frozen Sessions", fileType: "pauseSession" },
//       { id: "2.4", label: "Shared Sessions", fileType: "shareSession" },
//       { id: "2.5", label: "Create Sessions", fileType: "add",  onsubmit: () => {
//         console.log("clicking");
//       },},
//     ],
//   },

//   {
//     id: "3",
//     label: "Agents",
//     fileType: "icon1",
//     children: [
//       { id: "3.1", label: "Responder", fileType: "responder" },
//       { id: "3.2", label: "Evaluator", fileType: "evaluator" },
//       { id: "3.3", label: "Judge", fileType: "judge" },
//       { id: "3.4", label: "Document Proccessor", fileType: "processor" },
//     ],
//   },

//   { id: "4", label: "History", fileType: "history" },
//   { id: "5", label: "Trash", fileType: "trash" },
// ];

// function DotIcon() {
//   return (
//     <Box
//       sx={{
//         width: 6,
//         height: 6,
//         borderRadius: "70%",
//         bgcolor: "warning.main",
//         display: "inline-block",
//         verticalAlign: "middle",
//         zIndex: 1,
//         mx: 1,
//       }}
//     />
//   );
// }

// const StyledTreeItemRoot = styled(TreeItem2Root)(({ theme }) => ({
//   color:
//     theme.palette.mode === "light"
//       ? theme.palette.grey[800]
//       : theme.palette.grey[400],
//   position: "relative",
//   [`& .${treeItemClasses.groupTransition}`]: {
//     marginLeft: theme.spacing(3.5),
//   },
// }));

// const CustomTreeItemContent = styled(TreeItem2Content)(({ theme }) => ({
//   flexDirection: "row-reverse",
//   borderRadius: theme.spacing(0.7),
//   marginBottom: theme.spacing(0.5),
//   marginTop: theme.spacing(0.5),
//   padding: theme.spacing(0.5),
//   paddingRight: theme.spacing(1),
//   fontWeight: 500,
//   [`&.Mui-expanded `]: {
//     "&:not(.Mui-focused, .Mui-selected, .Mui-selected.Mui-focused) .labelIcon":
//       {
//         color:
//           theme.palette.mode === "light"
//             ? theme.palette.primary.main
//             : theme.palette.primary.dark,
//       },
//     "&::before": {
//       content: '""',
//       display: "block",
//       position: "absolute",
//       left: "16px",
//       top: "44px",
//       height: "calc(100% - 48px)",
//       width: "1.5px",
//       backgroundColor:
//         theme.palette.mode === "light"
//           ? theme.palette.grey[300]
//           : theme.palette.grey[700],
//     },
//   },
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.primary.main, 0.1),
//     color:
//       theme.palette.mode === "light" ? theme.palette.primary.main : "white",
//   },
//   [`&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused`]: {
//     backgroundColor:
//       theme.palette.mode === "light"
//         ? theme.palette.primary.main
//         : theme.palette.primary.dark,
//     color: theme.palette.primary.contrastText,
//   },
// }));

// const AnimatedCollapse = animated(Collapse);

// function TransitionComponent(props) {
//   const style = useSpring({
//     to: {
//       opacity: props.in ? 1 : 0,
//       transform: `translate3d(0,${props.in ? 0 : 20}px,0)`,
//     },
//   });

//   return <AnimatedCollapse style={style} {...props} />;
// }

// const StyledTreeItemLabelText = styled(Typography)({
//   color: "inherit",
//   fontFamily: "General Sans",
//   fontWeight: 500,
// });

// function CustomLabel({ icon: Icon, expandable, children, ...other }) {
//   return (
//     <TreeItem2Label
//       {...other}
//       sx={{
//         display: "flex",
//         alignItems: "center",
//       }}
//     >
//       {Icon && (
//         <Box
//           component={Icon}
//           className="labelIcon"
//           color="inherit"
//           sx={{ mr: 1, fontSize: "1.2rem" }}
//         />
//       )}

//       <StyledTreeItemLabelText variant="body2">
//         {children}
//       </StyledTreeItemLabelText>
//       {expandable && <DotIcon />}
//     </TreeItem2Label>
//   );
// }

// const isExpandable = (reactChildren) => {
//   if (Array.isArray(reactChildren)) {
//     return reactChildren.length > 0 && reactChildren.some(isExpandable);
//   }
//   return Boolean(reactChildren);
// };

// const getIconFromFileType = (fileType) => {
//   switch (fileType) {
//     case "image":
//       return ImageIcon;
//     case "pdf":
//       return PictureAsPdfIcon;
//     case "doc":
//       return Inventory2OutlinedIcon;
//     case "video":
//       return VideoCameraBackIcon;
//     case "folder":
//       return DocumentScannerOutlinedIcon;
//     case "pinned":
//       return FolderOpenIcon;
//     case "trash":
//       return DeleteIcon;
//     case "muteDoc":
//       return PendingActionsOutlinedIcon;
//     case "shareSession":
//       return ShareOutlinedIcon;
//     case "pauseSession":
//       return PausePresentationOutlinedIcon;
//     case "publishSession":
//       return CloudDoneOutlinedIcon;
//     case "promoteSession":
//       return PostAddOutlinedIcon;
//     case "responder":
//       return ReplyAllOutlinedIcon;
//     case "evaluator":
//       return DifferenceOutlinedIcon;
//     case "processor":
//       return MemoryOutlinedIcon;
//     case "judge":
//       return ListAltOutlinedIcon;
//     case "add":
//       return AddIcon;
//     case "create":
//       return LaunchOutlinedIcon;
//     default:
//       return ArticleIcon;
//   }
// };

// const CustomTreeItem = React.forwardRef(function CustomTreeItem(props, ref) {
//   const { id, itemId, label, disabled, children, ...other } = props;

//   const {
//     getRootProps,
//     getContentProps,
//     getIconContainerProps,
//     getCheckboxProps,
//     getLabelProps,
//     getGroupTransitionProps,
//     status,
//     publicAPI,
//   } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

//   const item = publicAPI.getItem(itemId);
//   const expandable = isExpandable(children);
//   let icon, icon1;
//   if (expandable) {
//     icon = FolderRounded;
//   } else if (item.fileType) {
//     icon = getIconFromFileType(item.fileType);
//   }

//   return (
//     <TreeItem2Provider itemId={itemId}>
//       <StyledTreeItemRoot {...getRootProps(other)}>
//         <CustomTreeItemContent
//           {...getContentProps({
//             className: clsx("content", {
//               "Mui-expanded": status.expanded,
//               "Mui-selected": status.selected,
//               "Mui-focused": status.focused,
//               "Mui-disabled": status.disabled,
//             }),
//           })}
//         >
//           <TreeItem2IconContainer {...getIconContainerProps()}>
//             <TreeItem2Icon status={status} />
//           </TreeItem2IconContainer>
//           <TreeItem2Checkbox {...getCheckboxProps()} />
//           <CustomLabel
//             {...getLabelProps({
//               icon,
//               icon1,
//               expandable: expandable && status.expanded,
//             })}
//           />
//         </CustomTreeItemContent>
//         {children && <TransitionComponent {...getGroupTransitionProps()} />}
//       </StyledTreeItemRoot>
//     </TreeItem2Provider>
//   );
// });

// export default function FileExplorer() {
//   return (
//     <RichTreeView
//       items={ITEMS}
//       defaultExpandedItems={["1", "1.1"]}
//       defaultSelectedItems="1.1"
//       sx={{
//         height: "fit-content",
//         flexGrow: 1,
//         maxWidth: 400,
//         overflowY: "auto",
//       }}
//       slots={{ item: CustomTreeItem }}
//     />
//   );
// }

import  React, { useState } from "react";
import IndeterminateCheckBoxRoundedIcon from "@mui/icons-material/IndeterminateCheckBoxRounded";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { styled, alpha } from "@mui/material/styles";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import { useDispatch } from "react-redux";
import { toggleSession } from "../../ReduxManager/action";

const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.content}`]: {
    padding: theme.spacing(0.5, 1),
    margin: theme.spacing(0.2, 0),
  },
  [`& .${treeItemClasses.iconContainer}`]: {
    "& .close": {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.groupTransition}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px solid ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

function ExpandIcon(props) {
  return <AddBoxRoundedIcon {...props} sx={{ opacity: 0 }} />;
}

function CollapseIcon(props) {
  return <IndeterminateCheckBoxRoundedIcon {...props} sx={{ opacity: 0 }} />;
}

function EndIcon(props) {
  return <DisabledByDefaultRoundedIcon {...props} sx={{ opacity: 0 }} />;
}


export default function BorderedTreeView() {
  const dispatch = useDispatch();
  const [isCreateSession, setIsCreateSession] = useState(false)

  const handleCreateSession = () => {
    setIsCreateSession(!isCreateSession)
    dispatch(toggleSession(isCreateSession))
  }
  
  return (
    <SimpleTreeView
      aria-label="customized"
      defaultExpandedItems={["1", "3"]}
      slots={{
        expandIcon: ExpandIcon,
        collapseIcon: CollapseIcon,
        endIcon: EndIcon,
      }}
      sx={{ overflowX: "hidden", minHeight: 270, flexGrow: 1, maxWidth: 300 }}
    >
      <CustomTreeItem itemId="1" label="Documents"  className="documentIcon">
        <CustomTreeItem itemId="2" label="Active Document" className="activeDocument"/>
        <CustomTreeItem itemId="3" label="Mute Document" className="muteDocument"/>
      </CustomTreeItem>
      <CustomTreeItem itemId="4" label="Sessions" className="sessionIcon">
        <CustomTreeItem itemId="5" label="Promoted Sessions" className="promotedSession" />
        <CustomTreeItem itemId="6" label="Published Sessions" className="publishedSession"/>
        <CustomTreeItem itemId="7" label="Frozen Sessions" className="pauseSession"/>
        <CustomTreeItem itemId="8" label="Shared Sessions" className="shareSession"/>
        <CustomTreeItem itemId="9" label="Create Sessions" className="addSession"  onClick={handleCreateSession}/>
      </CustomTreeItem>
      <CustomTreeItem itemId="10" label="Agents" className="agentIcon">
        <CustomTreeItem itemId="11" label="Responder" className="responderAgent"/>
        <CustomTreeItem itemId="12" label="Evaluator" className="evaluatorAgent"/>
        <CustomTreeItem itemId="13" label="Judge" className="judgeAgent"/>
        <CustomTreeItem itemId="14" label="Document Processor" className="dpAgent"/>
      </CustomTreeItem>
      <CustomTreeItem itemId="15" label="History" className="historyIcon"/>
      <CustomTreeItem itemId="16" label="Trash" className="trashIcon"/>
    </SimpleTreeView>
  );
}
