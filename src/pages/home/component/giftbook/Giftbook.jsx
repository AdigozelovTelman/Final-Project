import React, { useEffect, useState } from 'react';
import styles from './Giftbook.module.scss';
import Layout from '../../../../components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getGiftProductsThunk } from '../../../../redux/reducers/giftSlice';
import { postBasketThunk } from '../../../../redux/reducers/basketSlice';
import { postWishlistThunk } from '../../../../redux/reducers/wishlistSlice';
import Cards from '../../../../components/cards/Cards';

const Giftbook = () => {
  const dispatch = useDispatch();

  const giftproducts = useSelector((state) => state.giftproducts.giftproducts);

  useEffect(() => {
    dispatch(getGiftProductsThunk());
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
      <div className={styles.giftbook}>
        <h2>Hədiyyəlik Əşyalar</h2>
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            {giftproducts.map((item) => (
              <Cards key={item._id} item={item} addBasket={() => addBasket(item)} addwishlist={() => addWishlist(item)} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Giftbook;
