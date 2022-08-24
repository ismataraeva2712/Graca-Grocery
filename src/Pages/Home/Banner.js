import React from 'react';
import cover1 from '../../img/cover1.png'
import cover from '../../img/cover.png'
import bg from '../../img/bg.png'
import '../Css/Banner.css'
const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen " style={{ background: `url(${bg})`, backgroundSize: 'cover',backgroundRepeat:'no-repeat' ,}}>
                <div class="hero-content flex-col lg:flex-row-reverse transbox">
                    <div
                        data-aos="fade-down-left"
                        data-aos-offset="200"
                        data-aos-delay="60"
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"

                    >  <img src={cover} class="lg:max-w-sm rounded-lg shadow-2xl" /></div>

                    <div>
                        <div
                            data-aos="fade-up-right"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true"
                        ><h1 class="text-5xl font-bold text-primary">Graca-Grocery <span className='text-neutral'>Warehouse</span></h1></div>
                        <div data-aos="fade-up-right"
                            data-aos-offset="200"
                            data-aos-delay="60"
                            data-aos-duration="1200"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true"
                        > <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae .</p></div>
                        <div data-aos="fade-up-right"
                            data-aos-offset="200"
                            data-aos-delay="70"
                            data-aos-duration="1400"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true"
                        > <button class="btn btn-primary text-white">Get Started</button></div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;