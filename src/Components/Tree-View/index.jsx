import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import { useDispatch } from "react-redux";
import { togActiveMute, toggleSession } from "../../ReduxManager/action";

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

export default function BorderedTreeView() {
  const dispatch = useDispatch();
  const [isCreateSession, setIsCreateSession] = useState(false);

  const handleCreateSession = () => {
    setIsCreateSession(!isCreateSession);
    dispatch(toggleSession(isCreateSession));
  };

  const [toggleAM, setToggleAM] = useState(false)
  const handleToggleAM = () => {
    setToggleAM(!toggleAM)
    dispatch(togActiveMute(toggleAM))
  };
  return (
    <SimpleTreeView
      aria-label="customized"
      defaultExpandedItems={["1", "4"]}
      sx={{ overflowX: "hidden", minHeight: 270, flexGrow: 1, maxWidth: 300 }}
    >
      <CustomTreeItem itemId="1" label="Documents" className="documentIcon">
        <CustomTreeItem
          itemId="2"
          label="Active Document"
          className="activeDocument"
        />
        <CustomTreeItem
          itemId="3"
          label="Mute Document"
          className="muteDocument"
        />
      </CustomTreeItem>
      <CustomTreeItem itemId="4" label="Sessions" className="sessionIcon">
        <CustomTreeItem
          itemId="5"
          label="Active-Mute Sessions"
          className="judgeAgent"
          onClick={handleToggleAM}
        />
        <CustomTreeItem
          itemId="6"
          label="Promoted Sessions"
          className="promotedSession"
        />
        <CustomTreeItem
          itemId="7"
          label="Published Sessions"
          className="publishedSession"
        />
        <CustomTreeItem
          itemId="8"
          label="Frozen Sessions"
          className="pauseSession"
        />
        <CustomTreeItem
          itemId="9"
          label="Shared Sessions"
          className="shareSession"
        />
        <CustomTreeItem
          itemId="10"
          label="Create Sessions"
          className="addSession"
          onClick={handleCreateSession}
        />
      </CustomTreeItem>
      <CustomTreeItem itemId="11" label="Agents" className="agentIcon">
        <CustomTreeItem
          itemId="12"
          label="Responder"
          className="responderAgent"
        />
        <CustomTreeItem
          itemId="13"
          label="Evaluator"
          className="evaluatorAgent"
        />
        <CustomTreeItem itemId="14" label="Judge" className="judgeAgent" />
        <CustomTreeItem
          itemId="15"
          label="Document Processor"
          className="dpAgent"
        />
      </CustomTreeItem>
      <CustomTreeItem itemId="16" label="History" className="historyIcon" />
      <CustomTreeItem itemId="17" label="Trash" className="trashIcon" />
    </SimpleTreeView>
  );
}
