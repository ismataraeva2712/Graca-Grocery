import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useNavigate } from 'react-router-dom';

const AllItem = ({item,handleDelete}) => {
    const { picture, name, price, quantity, description, supplierName, _id } = item
    const navigate = useNavigate()
    const handleUpdate = (id) => {
      navigate(`/inventory/${id}`)
    }
    
    return (
        // <AnimationOnScroll animateIn="animate__bounceIn" duration={5} >
        <div  class="card w-96 bg-base-100 shadow-xl h-[550px]">
          <figure>
          <div
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="60"
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true">
            <img src={picture} alt="Shoes" style={{ height: '200px' }} />
            </div>
            </figure>
          <div class="card-body">
          <div
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="60"
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true">
            <h2 class="card-title">
              {name}
              <div class="badge badge-primary">TOP</div>
            </h2>
            </div>
            <div
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="60"
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true">
            <p>{description}</p>
            <p>Price : {price} $</p>
            <p>Quantity : {quantity}</p>
            <p>Supplier Name : {supplierName}</p>
            </div>
            <div class="card-actions justify-around">
            
            <div onClick={() => handleDelete(_id)} class="badge badge-outline p-5 btn-primary text-white  font-bold">Delete Item</div>
             
              <div onClick={() => handleUpdate(_id)} class="badge badge-outline p-5 btn-primary text-white  font-bold">Stock Update</div>
            </div>
          </div>
        </div>
      //  </AnimationOnScroll>
    );
};

export default AllItem;