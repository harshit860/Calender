import React from 'react'

export default function Navbar() {
  return (
    <div style={{height:'50px',width:'100%',boxShadow:'1px 1px 3px 1px lightgrey',display:'flex',flexDirection:"row-reverse",gap:30,padding:'10px'}}>
        <button style={{border:"none"}}>Login</button>
        <button style={{border:"none"}}>Logout</button>
        <button style={{border:"none"}}>Save</button>
    </div>
  )
}
