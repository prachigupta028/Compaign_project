import React, { useState } from 'react'
import Compaign from './Compaign'
import './style.css'


const Content = () => {

  const [search, setSearch]=useState("");
const [compaign, setCompaign]=useState(
  [
    {
      "campaign": "Christmas Sale 2018",
      "status": "Sending"
    },
    {
      "campaign": "Newsletter December",
      "status": "Sent"
    },
    {
      "campaign": "Santa's Sale",
      "status": "Sending"
    },
    {
      "campaign": "Christmas Campaign",
      "status": "Sent"
    },
    {
      "campaign": "December - Shoes!",
      "status": "Draft"
    },
    {
      "campaign": "What's New? - December Edition \"Winter...",
      "status": "Sent"
    },
    {
      "campaign": "November - Unicorn's Shoes!",
      "status": "Evaluate"
    },
    {
      "campaign": "Limited Editions",
      "status": "Draft"
    },
    {
      "campaign": "Social Updates",
      "status": "Error"
    },
    {
      "campaign": "October - Bring The News",
      "status": "Stopped"
    }
  ])
   
  const handleInput=(e)=>{
    e.preventDefault()
    console.log(e.target.value);
       setSearch(e.target.value);
   
 }
 //Handle Drag
 const dragItem=React.useRef(null)
 const dragOverItem = React.useRef(null)
  
  
    //drag sorting
     const handleSort=()=>{
      let CompaignsList=[...compaign];
    
     
     //remove and save the dragged item
     const dragItemContent = CompaignsList.splice(dragItem.current, 1)[0];

     //switch the position
     CompaignsList.splice(dragOverItem.current,0, dragItemContent)

     //reset the position ref
     dragItem.current=null;
     dragOverItem.current=null;

     //update the actual array
     setCompaign(CompaignsList)
     }
  return (
    <div className="topNavbar">
    <div className='nav' >
    <h1>Recent Compaigns</h1>
    <input type="search" placeholder='search compaign' onChange={(event)=>handleInput(event)}></input>
   <button className='news'>New Compaign</button>
    
    </div>
<hr className='hr'/>


<div style={{color:"white"}}>

{
  compaign.filter((old)=>{
      if(old==""){
        return old;
        
      }
      
      else if(old.status.toLowerCase().includes(search.toLowerCase())){
      return old;
      }
    }).map((data,index)=>{
    return(
      <>
      <div key={index} draggable
      onDragStart={(e)=>(dragItem.current=index)}
      onDragEnter={(e)=>(dragOverItem.current=index)}
      onDragEnd={handleSort}
      onDragOver={(e)=>e.preventDefault}
      
      >
      <Compaign name={data.campaign} status={data.status}/>
      </div>
      </>
    )
  })
}
</div>
    </div>
  )
}

export default Content