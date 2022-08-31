import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link} from 'react-router-dom';
import Collection from './Collection';

const Collections = () => {
    const[collections,setCollections]=useState([])
    useEffect(()=>{
        fetch('https://lit-forest-84531.herokuapp.com/items')
        .then(res=>res.json())
        .then(data=>setCollections(data))
       

    },[])
   
   
    return (
        <div  className='px-12 mx-auto'>
            <h1 className='text-primary text-center text-3xl font-bold my-12'>Grocery <span className='text-neutral'>Collection</span></h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    collections.slice(0,6).map(collection=><Collection
                    key={collection._id}
                    collection={collection}
                    ></Collection>)
                }
            </div>
            <div className='text-center  my-12'>
            <AnimationOnScroll  animateIn="animate__flip" >
           <Link to='/manageInventories'> <button  className='btn btn-primary  text-white'>manage Inventories</button></Link>
            </AnimationOnScroll>
            </div>
        </div>
    );
};

export default Collections;