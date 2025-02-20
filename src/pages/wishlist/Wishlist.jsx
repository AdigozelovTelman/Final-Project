import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteWishlistThunk, getWishlistThunk } from '../../redux/reducers/wishlistSlice';
import Layout from '../../components/layout/Layout';
import styles from './Wishlist.module.scss';

const Wishlist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWishlistThunk());
  }, [dispatch]);

  const wishlist = useSelector((state) => state.wishlist.wishlist) || [];

  const deleteWishlist = (id) => {
    dispatch(deleteWishlistThunk(id));
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.heading}>Sevimlilər Siyahısı</h1>
        <div className={styles.cards}>
          {wishlist && wishlist.length > 0 ? (
            wishlist.filter(item => item && item.image).map(item => (
              <div key={item._id} className={styles.card}>
                <div className={styles.imgBox}>
                  <img src={item.image} alt={item.title || "Şəkil yoxdur"} />
                </div>
                <div className={styles.content}>
                  <p className={styles.title}>{item.title || "Başlıq yoxdur"}</p>
                  <p className={styles.price}>{item.price ? `${item.price} AZN` : "Qiymət yoxdur"}</p>
                  <button onClick={() => deleteWishlist(item._id)}>Sil</button>
                </div>
              </div>
            ))
          ) : (
            <p className={styles.emptyMessage}>Sevimlilər siyahınız boşdur</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;