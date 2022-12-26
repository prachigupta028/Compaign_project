import React from "react";
import TreeNode from "./TreeNode";

const Tree = ({ treeData,show,setShow,folder,setFolder}) => {
  return (
    <div>
      <ul>
        {treeData.map((node) => (
          <TreeNode node={node} key={node.key} show={show} setShow={setShow} folder={folder} setFolder={setFolder}/>
        ))}
      </ul>
    </div>
  );
};

export default Tree;
