import React, { useState } from "react";
import Tree from "./Tree";
import { BsChevronDown } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import "./style.css";
import { BsCheckCircleFill } from "react-icons/bs";

function TreeNode({ node, show, setShow, folder, setFolder }) {
  const { children, name } = node;

  const [showChildren, setShowChildren] = useState(false);

  //Children Clicking folder
  const handleClick = () => {
    setShowChildren(!showChildren);
  };
  //set Icon
  const [icon, setIcon] = useState(false);
  const showIcon = () => {
    const i = !icon;
    setIcon(i);
  };
  //Add New Folder
  function addNew() {
    children[children.length] = { name: folder, children: [] };
    setFolder("");
    setShow(false);
  }
  return (
    <>
      <div
        onClick={handleClick}
        style={{ marginBottom: "10px" }}
        className="list"
      >
        <div>
          {children.length > 0 ? <BsChevronDown className="drop" /> : ""}
          <span onMouseOver={showIcon}>{name}</span>
        </div>
        <div>
          {icon ? (
            <>
              <SlOptionsVertical />
              <button onClick={() => setShow(true)} className="btns">
                +
              </button>
              <button onClick={addNew} className="btnsCheck">
                <BsCheckCircleFill />
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <ul style={{ paddingLeft: "10px", borderLeft: "1px solid black" }}>
        {showChildren && (
          <Tree
            treeData={children}
            show={show}
            setShow={setShow}
            folder={folder}
            setFolder={setFolder}
          />
        )}
      </ul>
    </>
  );
}

export default TreeNode;
