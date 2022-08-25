import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

  

const Collection = ({collection}) => {
    const{picture,name,price,quantity,description,supplierName}=collection
    return (
      <AnimationOnScroll animateIn="animate__bounceIn" duration={5} >
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" style={{height:'200px'}} /></figure>
  <div class="card-body">
    <h2 class="card-title">
      {name}
      <div class="badge badge-primary">TOP</div>
    </h2>
    <p>{description}</p>
    <p>Price : {price} $</p>
    <p>Quantity : {quantity}</p>
    <p>Supplier Name : {supplierName}</p>
    <div class="card-actions justify-end">
      
      <div class="badge badge-outline p-5 btn-primary text-white  font-bold">Stock Update</div>
    </div>
  </div>
</div>
</AnimationOnScroll>
    );
};

export default Collection;