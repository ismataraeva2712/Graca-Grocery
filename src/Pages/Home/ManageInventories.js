import React, { useEffect, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';
import AllItem from './AllItem';


const ManageInventories = () => {
    const[allItems,setAllItems]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/items')
        .then(res=>res.json())
        .then(data=>setAllItems(data))
       

    },[])
    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure you want to delete?')
        if(proceed){
            const url=`http://localhost:5000/items/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                const remaining=allItems.filter(item=>item._id !== id)
                setAllItems(remaining)
            })
        }
    }
    return (
        <div  className='px-12 mx-auto'>
             <h1 className='text-primary text-center text-3xl font-bold my-12'>Grocery All <span className='text-neutral'>Collections</span></h1>
            
            
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    allItems.map(item=><AllItem
                    key={item._id}
                    item={item}
                    handleDelete={handleDelete}
                    ></AllItem>)
                }
            </div>
           
            <div className='text-center  my-12'>
           
          <Link to='/addItem'> <button  className='btn btn-primary  text-white'>manage Inventories</button></Link> 
           
            </div>
        </div>
    );
};

export default ManageInventories;