import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {  toast } from 'react-toastify';
const Inventory = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    const [update,setUpdate] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/items/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [update])
    const handleDeliverd=()=>{
        if(item.quantity>0){
            const newQuantity=parseInt(item.quantity)-1
            const updatedQuantity={quantity:newQuantity}
            fetch(`http://localhost:5000/items/${id}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(updatedQuantity)
            })
            .then(res=>res.json())
            .then(data=>{
                setUpdate(data)
                toast.success('Delivery Successfull')
            })
        }
        else{
            toast.error('Sold Out')
        }
    }
    // restock
    const handleRestack=event=>{
        event.preventDefault()
        const newQuantity=parseInt(event.target.quantity.value )+parseInt(item.quantity)
        const updatedQuantity={quantity : newQuantity}
        fetch(`http://localhost:5000/items/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedQuantity)
        })
        .then(res=>res.json())
        .then(data=>{
            setUpdate(data)
            toast.success("Restock successfully");
            event.target.reset()
        })

    }
    return (
        <div >
            <h2 className='text-primary text-center text-2xl font-bold my-5'>{item.name} <span className='text-neutral'>Details</span></h2>
            <div className='flex justify-center items-center'>
                <div class="card bg-base-100 shadow-xl">
                    <div
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="60"
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true">
                        <figure><img src={item.picture} alt="Shoes" /></figure>
                    </div>
                    <div class="card-body">
                    <div
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="60"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true">
                        <h2 class="card-title">
                            {item.name}
                               <div class="badge badge-primary">TOP</div>
                        </h2>
                        <p>{item.description}</p>
                        <p>Item Id No: {item._id} </p>
                        <p>Price : {item.price} $</p>
                        <p>Quantity : {item.quantity}</p>
                        <p>Supplier Name : {item.supplierName}</p>
                        </div>
                        <div class="card-actions justify-end">
                            <div
                                data-aos="zoom-in"
                                data-aos-offset="200"
                                data-aos-delay="60"
                                data-aos-duration="1200"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true">    <div class="badge badge-outline p-5 btn-primary text-white  font-bold" onClick={()=>handleDeliverd()}>Delivered</div></div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='text-primary text-center text-2xl font-bold mt-7'>{item.name} <span className='text-neutral'>Restock</span></h2>
             <div
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="60"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true">
            <div className='flex justify-center items-center my-5'>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                     <form onSubmit={handleRestack}>
                        <input type="number" name="quantity" id="" placeholder='enter amount' class="input input-bordered input-error " />
                        
                        <input type="submit" className=' ml-3 btn  btn-primary text-white  font-bold rounded-lg' value="Restock" />
                     </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Inventory;