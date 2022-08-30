import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import add from '../../img/add.png'
import veg from '../../img/veg.png'
import veg1 from '../../img/veg1.png'
import veg2 from '../../img/veg2.png'
import veg3 from '../../img/veg3.png'
import veg4 from '../../img/veg4.png'
import veg5 from '../../img/veg5.png'
import veg6 from '../../img/veg6.png'
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth)
    const onSubmit = data => {
        console.log({ ...data, email: user.email })
        const url = `http://localhost:5000/items`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...data, email: user.email })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success("Add a new food successfully.")
            })
    };
    return (
        <div><h1 className='text-primary text-center text-3xl font-bold my-12'>Add An <span className='text-neutral'>Item</span></h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2  gap-10 px-12 mx-auto'>
                <div
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="60"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true">
                    <div>

                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="form-control mt-2">
                                        <input placeholder="Name" class="input input-bordered form-control" {...register("name", { required: true, maxLength: 20 })} />
                                    </div>
                                    <div class="form-control mt-2">
                                        <input placeholder="Description" class="input input-bordered" {...register("description")} />
                                    </div>
                                    <div class="form-control mt-2">
                                        <input placeholder="Supplier Name" class="input input-bordered form-control" {...register("supplierName")} />
                                    </div>
                                    <div class="form-control mt-2">
                                        <input placeholder="Photo Url" class="input input-bordered form-control" {...register("picture")} />
                                    </div>
                                    <div class="form-control mt-2">
                                        <input placeholder="Price" class="input input-bordered form-control" {...register("price")} />
                                    </div>
                                    <div class="form-control mt-2">
                                        <input placeholder="Quantity" class="input input-bordered form-control" {...register("quantity")} />
                                    </div>

                                    <div class="form-control mt-2">

                                        <input class="input input-bordered btn btn-primary text-white" type="submit" value='Add Item' />
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                    <div
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="60"
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true">
                        <img className='lg:h-[400px]' src={veg6} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddItem;