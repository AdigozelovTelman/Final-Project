import React, { useEffect } from 'react'
import Layout from '../../../../components/layout/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { getBagProductsThunk } from '../../../../redux/reducers/bagSlice';
import { postBasketThunk } from '../../../../redux/reducers/basketSlice';
import { postWishlistThunk } from '../../../../redux/reducers/wishlistSlice';
import Cards from '../../../../components/cards/Cards';
import styles from './Bag.module.scss'

const Bag = () => {
    const dispatch = useDispatch();

    const bagproducts = useSelector((state) => state.bagproducts.bagproducts);
  
    useEffect(() => {
      dispatch(getBagProductsThunk());
    }, [dispatch]);
  
  
    const addBasket = async (item) => {
      dispatch(postBasketThunk(item))
      console.log(item);
  
    }
  
    const addWishlist = (item) => {
      dispatch(postWishlistThunk(item))
      console.log(item);
      
  
    }
    
  return (
    <Layout>
    <div className={styles.bag}>
      <h2>Çantalar</h2>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          {bagproducts.map((item) => (
            <Cards key={item._id} item={item} addBasket={() => addBasket(item)} addwishlist={() => addWishlist(item)} />
          ))}
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Bag