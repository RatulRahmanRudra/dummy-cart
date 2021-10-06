import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectedProduct, setLoading } from '../store/actions/productAction';
import Loading from './Loading';

const ProductDetails = () => {

  const {productId} = useParams();

  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);
  const loading = useSelector(state => state.allProducts.isLoading);

  // console.log(product);
  
  useEffect(()=>{
    const fetchDetails = async () => {
      dispatch(setLoading(true));
      const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err))
      // console.log(res.data);
      await dispatch(selectedProduct(res.data));
      await dispatch(setLoading(false));
    }
    fetchDetails();
  
  }, [dispatch, productId])

  const {title, price, image, description, category, rating} = product;  

  return (
    <>  
      {loading ? (<Loading/>) : ( 
        <div>
          <h1 className="text-3xl m-3 p-4">{title}</h1>
          <h2 className='m-3 px-4 text-gray-400'>from {category}</h2>
          <div className='flex'>
            <div className="border w-3/12 m-5 mx-8 p-3">
              <img src={image} alt={title}/>
            </div>
            <div className='border p-4 w-8/12 m-4'>
              <h1 className='p-2 text-3xl'>${price}</h1>
              <p className='w-5/12 text-xl p-4'>
                {description} 
              </p> 
              {rating && <div className="mx-5 text-lg"> rating : {rating.rate} / 5</div>}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductDetails;
