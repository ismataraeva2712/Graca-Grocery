import React from 'react';
import news from '../../img/news.png'
import bg1 from '../../img/bg1.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Newsletter = () => {
    
    
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2  gap-10 px-12 mx-auto mt-40  relative bg-gradient-to-r from-rose-200 to-orange-200' style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}>

            <div>

                <div className='my-16'>
                    <h1 className='text-primary text-center text-3xl font-bold my-5'>Subscribe Our <span className='text-neutral'>Newsletter </span> </h1>
                    <div class="form-control">

                        <input type="text" placeholder="email" class="input input-bordered" />
                    </div>

                    <div class="form-control mt-6">
                        <button class="btn btn-primary text-white">Subscribe</button>
                    </div>
                </div>


            </div>
            <div className='lg:absolute -top-28 right-0'>
                <AnimationOnScroll duration={5} animateIn="animate__swing">

                    <img className='lg:h-[400px]' src={news} alt="" />
                </AnimationOnScroll>
            </div>
        </div>
    );
};

export default Newsletter;