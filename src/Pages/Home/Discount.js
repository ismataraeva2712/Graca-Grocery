import React from 'react';
import new1 from '../../img/new1.jpg'

import new3 from '../../img/new3.jpg'
import new4 from '../../img/new4.jpg'
import add from '../../img/add.png'
import { BsTelephoneFill } from 'react-icons/bs';
import { AiTwotoneMail } from 'react-icons/ai';
import { AnimationOnScroll } from 'react-animation-on-scroll';
const discount = () => {
    return (
        <div>

            <div class="grid  lg:grid-cols-3 sm:grid-cols-1 gap-4 ">
           
            <AnimationOnScroll animateIn="animate__bounceIn" duration={5} >
                <div className='lg:px-12'>

                    <div class="card max-w-sm bg-base-100 shadow-xl h-[400px]">
                        <figure><img src={add} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-primary">Delivery Service</h2>
                            <div className='flex justify-center items-center'> <BsTelephoneFill className='text-primary' />   <p className='ml-2'>+9715687989809</p></div>
                            <div className='flex justify-center items-center'> <AiTwotoneMail className='text-primary' />    <p className='ml-2'> gracagrocery@gmail.com</p></div>

                        </div>
                    </div>
                </div>
                </AnimationOnScroll>
                {/* ======== */}
                
                <div 
                style={{ background: `url(${new4})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} 
             
                class={` lg:col-span-2 shadow-xl rounded-l-lg  `}><div className=' flex items-center h-[350px]'>
                    <div className='px-5'>
                    <AnimationOnScroll animateIn="animate__bounceIn" duration={5} >
                        <h1 class=" text-5xl font-bold text-primary my-3">Up TO 70% OFF </h1>
                        </AnimationOnScroll>
                        <h1 class=" text-xl font-bold text-neutral my-3 ">For YOUR FIRST ORDER </h1>
                        
                        <button class="btn btn-primary text-white">Order Now</button>
                    </div>
                </div></div>

            </div>
        </div>
    );
};

export default discount;