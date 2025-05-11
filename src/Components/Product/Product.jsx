import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { NavLink, useLoaderData, useParams } from 'react-router'


function Product() {
  const {id} = useParams()
 const categories = useLoaderData();
  const productDetail= categories.find(category => category.id == id);
  const [rating, setRating] = useState('');

const features = productDetail.features
  return (
    <>
     <Helmet>
      <title>Product | {id}</title>
    </Helmet>
 
     <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full">
     <figure className="w-full lg:w-1/2 max-h-[400px] overflow-hidden">
  <img
    src={productDetail.banner}
    alt={productDetail.name}
    className="w-full h-full object-cover"
  />
</figure>
        <div className="card-body lg:w-1/2 w-full">
          <h2 className="card-title text-2xl font-bold">{productDetail.name}</h2>
          <p className="text-base text-gray-700">
{productDetail.description}
<p className="text-base font-bold mt-2">Core Features : {features.map(feature=> <li>{feature}</li>)}</p>
          </p>
          <p className="text-base font-bold mt-2">Category : {productDetail.tech_category}</p>
          <p className='absolute top-[2px] left-[-1px] bg-pink-600
           p-3 text-white'>{productDetail.frequency}</p>
          <p className='absolute top-[2px] right-[1px]
           bg-black
           p-3 text-white'>${productDetail.price}</p>
         
          <div className="form-control">
  <label className="label font-semibold mb-3.5">Review  this product: {rating}</label>
 <div className="form-control">
  <label className="label font-semibold"></label>
  <select
    className="select select-bordered w-full max-w-xs"
    
    onChange={(e) => setRating(e.target.value)}
  >
    <option disabled value="">Choose Rating</option>
    <option value="1"> 1</option>
    <option value="2"> 2</option>
    <option value="3"> 3</option>
    <option value="4"> 4</option>
    <option value="5"> 5</option>
  </select>
</div>

</div>
 <div className="card-actions justify-end">
            <NavLink to={"/"}>
              <button className="btn btn-neutral">Back</button>
            </NavLink>

          </div>
        </div>
      </div>
    </div>
       </>
  )
}

export default Product