import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {

  const {id, title, price, image, category} = product;

  return (
    <div className=" border  w-2/12  p-2 mx-3 my-4 bg-gray-50 shadow-md">
        <Link to={`/product/${id}`}>
        <div className="p-auto border w-3/4 h-2/4 m-auto">
          <img src={image} alt={title}  />
        </div>
        <div className="w-3/4 m-auto ">
          <h1 >{title}</h1>
          <h2 >$ {price}</h2>
          <h4 className='p3 text-gray-400'>{category}</h4>
        </div>

    </Link>
      </div>
  )
}

export default Product
