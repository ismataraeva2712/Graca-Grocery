import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate } from 'react-router-dom';
import AllItem from './AllItem';

const MyItem = () => {
    const[myItem,setMyItem]=useState([])
    const [user] = useAuthState(auth)
    useEffect(()=>{
        const url = `https://lit-forest-84531.herokuapp.com/myItem?email=${user.email}`
        try {
            fetch(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {

                    if (data.message) {
                        signOut(auth)
                        Navigate('/login')
                    }
                    else {
                        setMyItem(data)
                    }
                    console.log('data', data)
                })
        }
        catch (error) {
            console.log(error)
        }
    },[])
    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure you want to delete?')
        if(proceed){
            const url=`https://lit-forest-84531.herokuapp.com/items/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                const remaining=myItem.filter(item=>item._id !== id)
                setMyItem(remaining)
            })
        }
    }
    return (
        <div>
             <h1 className='text-primary text-center text-3xl font-bold my-12'>My <span className='text-neutral'>Items</span></h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                        myItem.map(item => <AllItem
                            key={item._id}
                            item={item}
                            handleDelete={handleDelete}
                        ></AllItem>)
                    }
            </div>
        </div>
    );
};

export default MyItem;