import React from 'react'

const Header = ({title}) => {
  return (
    <header style={{
        marginTop:"1px",
        paddingTop:"1px",
        backgroundColor:"yellowGreen",
        color: "black"

    }}>
        <h1>{title}</h1>
    </header>
   
  )
}

export default Header
