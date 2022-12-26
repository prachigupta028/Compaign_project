import React from 'react'
import Content from './Content/Content'
import Navbar from './Navbar/Navbar'

const App = () => {
  return (
    <div>
    <div style={{display:"flex"}}>
      <Navbar/>
      <Content/>
    </div>
    </div>
  )
}

export default App