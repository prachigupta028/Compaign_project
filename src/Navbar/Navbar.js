import React, { useState } from "react";
import "./style.css";
import Tree from "../Content/Tree";
import { BsCheckCircleFill } from "react-icons/bs";

const Navbar = () => {

  //given foldder Structure
  const treeDatas = [
    {
      name: "Christmas",
      children: [
        {
          name: "Party",
          children: [],
        },
        {
          name: "Newsletter",
          children: [
            {
              name: "VIP List",
              children: [],
            },
            {
              name: "Specials",
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: "Company's",
      children: [
        {
          name: "Special Events",
          children: [],
        },
      ],
    },
  ];
  const [treeData, setTreeData] = useState(treeDatas);
  const [show, setShow] = useState(false);
  const [folder, setFolder] = useState();

  //Adding a Folder
  function addFolder() {
    const newArray = [...treeData, { name: folder, children: [] }];
    console.log(newArray);
    setTreeData(newArray);
    setFolder("")
    setShow(false)
  }
  //Show Input Box
  function showInput(){
    setShow(true);
  }

  return (
    <div className="sideNavbar">
      <h2>Compaigns</h2>
      <button className="btn">Recent</button>
      <div style={{display:"flex",justifyContent:"space-around"}}>
      <p>FOLDERS</p>
      {show?<button onClick={addFolder} className="btns"><BsCheckCircleFill/></button>:<button onClick={showInput} className="btns">+</button>}
      </div>
      <hr/>
      {show ? (
        <input
          type="text"
          value={folder}
          onChange={(e) => setFolder(e.target.value)}
          className="listItem"
        ></input>
      ) : (
        ""
      )}
      
      <Tree treeData={treeData} style={{ color: "white" }} show={show} setShow={setShow} folder={folder} setFolder={setFolder}/>
    </div>
  );
};

export default Navbar;
