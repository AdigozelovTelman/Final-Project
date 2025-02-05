import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWishlistThunk, getWishlistThunk } from '../../redux/reducers/wishlistSlice'
import Layout from '../../components/layout/Layout'
import styles from './Wishlist.module.scss'

const Wishlist = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWishlistThunk())
  }, [dispatch])

  const wishlist = useSelector((state) => state.wishlist.wishlist) || []


  const deleteWishlist = (id) => {
    dispatch(deleteWishlistThunk(id))
  }
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.cards}>
          {wishlist && wishlist.map(item => {
            return <div className={styles.card}>
         <div className={styles.imgBox}>
          <img src={item.image} alt={item.title} />
        </div>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.price}>{item.price}</p>
        <button onClick={() => deleteWishlist(item._id)}>Sil</button>
            </div>
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Wishlist