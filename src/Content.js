import React from 'react';

import { FaTrashAlt } from 'react-icons/fa';


import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




// const notifys = async () => {
//     toast.warning("please fill in the blank space", {
//         theme: "dark",
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick : true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined
//     });
//   }
  
  





const Content = ({Goods, setGoods, HandleCheck, HandleDelete}) => {
   
  return (
    <>
    {Goods.length ? (
        <ul style={{ width: "150px", marginleft:"250px", display: "grid",gridTemplateColumns: "90% ", textDecoration: "none"}}>
            {Goods.map((item) => (
                <li className='item' key = {item.id} style={{ border: "1px solid black", borderRadius: "15px",
                 margin:"5%", textDecoration:"none",  alignContent: 'center', marginLeft: '350%',
                 padding: "7%", marginTop: "10%", width: "95%"}}>
                    <input style={{padding: "5%"}}
                    type="checkbox"
                    onChange={() => HandleCheck(item.id) }
                    checked={item.checked}
                    />

                    <label 
                    style={(item.checked)? {textDecoration: "line-through", paddingRight:"5%"}: null}
                    onDoubleClick={() => HandleCheck(item.id)}>{item.item}

                    </label>

                    <FaTrashAlt
                    onClick={() => HandleDelete(item.id) }
                
                    
                   
                    role='button' tabIndex='0'/>
                    
                </li>

            ))}

        </ul>

    ) : (
        <p style={{marginTop: '2rem', color: "red", fontWeight: " bold" }}>Your list is empty</p>
    )}

    
    </>
 
  )
};

export default Content
