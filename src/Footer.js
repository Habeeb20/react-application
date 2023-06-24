import React from 'react'

const Footer = ({length, message}) => {
    const style = { backgroundColor: "red"}
    const today = new Date();
  return (
    <footer style={{marginTop: "18%", backgoundColor: "yellow", padding:"0.2%", color: "black"}}>
       
        <div className={style}>

            <p style={{backgroundColor: "greenyellow", padding: "1%", position: "sticky"}}>{length} List {length === 1 ? "Good": "Goods"} </p>

        </div>
        <p>{ message }</p>

    </footer>
   
  )
}

export default Footer
