import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../store/actions/productAction';
import Loading from './Loading';
import Product from './Product';


const ProductList = () => {
  const dispatch = useDispatch();
  
  const products = useSelector(state => state.allProducts.products);
  const loading = useSelector(state => state.allProducts.isLoading);
  // console.log(products);
  // console.log(loading);
  

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(action.setLoading(true));
      const res = await axios.get('https://fakestoreapi.com/products')
      .catch((err)=>{console.log(err);})
      
      await dispatch(action.setProducts(res.data));
      await dispatch(action.setLoading(false));
    }

    fetchProducts();

  }, [dispatch])
  
  return (
    <>
      {loading ? (<Loading/>) : ( 
        <div className="flex flex-wrap justify-center items-start">
        { products.map((product) => 
            <Product 
              key={product.id}
              product={product}
            /> 
          )
        }
        </div> 
      )}
    </>
  )
}
export default ProductList;