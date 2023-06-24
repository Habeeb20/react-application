import React from 'react'
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'
import Update from './Update';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
    toast.warning("please add your desired items below the page", {
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

const Component = () => {
  return (
    <div className='Allin1' style={{marginBottom: "0.2%"}} >
        <div className='All' style={{display: "inline-flex"}}>
            <div >
                <img src='shoee4.jpg' alt='' style={{height: "45%", padding: '1px', paddingBottom: "0.18px"}}/>
                <p>Puma</p>
                <p>size 40-43</p>
                
                <button onClick={notify}> Add Item</button>
                <ToastContainer />
            </div>
            <div >
                <img src='shoee5.jpg' alt='' style={{height: "45%", padding: '1px'}}/>
                <p>Adidas</p>
                <p>size 40-45</p>
                <button onClick={notify}> Add Item</button>
                <ToastContainer />
            </div>

            <div >
                <img src='shoee6.jpg' alt='' style={{height: "45%", padding: '1px'}}/>
                <p>Fendi</p>
                <p>size 40-44</p>
                <button onClick={notify}> Add Item</button>
                <ToastContainer />
            </div>

            <div >
                <img src='shoee8.jpg' alt='' style={{height: "45%", padding: '1px', paddingRight:"15%"}}/>
                <p>Nike</p>
                <p>size 39-45</p>
                <button onClick={notify}> Add Item</button>
                <ToastContainer />
            </div>


        </div>



        <div className='All' style={{display: "inline-flex", paddingBottom: "0.18px", marginTop: "0.16%"}}>
            <div >
                <img src='shoee1.jpg' alt='' style={{height: "45%", padding: '1px'}}/>
                <p>Sneaker</p>
                <p>size 40- 45</p>
                <button onClick={notify}> Add Item</button>
                <ToastContainer />
            </div>
            <div >
                <img src='shoee2.jpg' alt='' style={{height: "45%", padding: '1px'}}/>
                <p>Air force</p>
                <p>size 40-44</p>
                <button onClick={notify}> Add Item</button>
                <ToastContainer />
            </div>

            <div >
                <img src='shoee3.jpg' alt='' style={{height: "45%", padding: '1px'}}/>
                <p>Micheal Jordan</p>
                <p>size 39- 45</p>
                <button onClick={notify}> Add Item</button>
                <ToastContainer />
            </div>

            <div >
                <img src='shoee7.jpg' alt='' style={{height: "45%", padding: '1px'}}/>
                <p>Nike</p>
                <p>size 40 & 41</p>
                <button onClick={notify}> Add Item</button>
                <ToastContainer />
            </div>


        </div>


        <div className='All' style={{display: "inline-flex", paddingTop: "0.5%", marginTop: "0.4%"}}>
            {/* <div >
                <img src='newshoe4.jpg' alt='' style={{height: "18%",paddingRight: '90%' }}/>
                <p style={{paddingRight: '60%'}}>sneakers </p>
            </div> */}
         

        </div>
      



     
        
      
    </div>
  )
}

export default Component
