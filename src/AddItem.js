import React from 'react'
import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const notify = () => {
    toast.success("You have added a good to your cart", {
        theme: "dark",
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick : true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    });
}






const input = { useRef}

const AddItem = ({ newItem, setNewItem, HandleSubmit}) => {
  return (
    <form className="addform" onSubmit={HandleSubmit}>
        <label  style={{paddingRight: "2%"}} htmlFor="addItem" >AddItem</label>
        <input
        autoFocus
        ref={input}
        id='addItem'
        type='text'
        placeholder='please add your goods'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        />

        <button
        type='submit'
        aria-label='add Item'
        onClick={() => input.current.focus()}
        onClick={notify}>
            <ToastContainer />

            <FaPlus/>
            
        </button>

    </form>
   
  )
}

export default AddItem
