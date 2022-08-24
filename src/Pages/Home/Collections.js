import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Collection from './Collection';

const Collections = () => {
    const[collections,setCollections]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCollections(data))
       

    },[])
    return (
        <div  className='px-12 mx-auto'>
            <h1 className='text-primary text-center text-3xl font-bold my-5'>Grocery <span className='text-neutral'>Collection</span></h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    collections.map(collection=><Collection
                    key={collection._id}
                    collection={collection}
                    ></Collection>)
                }
            </div>
        </div>
    );
};

export default Collections;