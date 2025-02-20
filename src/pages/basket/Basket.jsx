import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantityThunk, deleteBasketThunk, getBasketThunk, increaseQuantityThunk } from '../../redux/reducers/basketSlice'
import styles from './Basket.module.scss'

const Basket = () => {


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBasketThunk())
  }, [dispatch])

  const basket = useSelector((state) => state.basket.basket) || []


  const deleteBasket = (id) => {
    dispatch(deleteBasketThunk(id))
  }

  const increaseQuantity = (id) => {
    dispatch(increaseQuantityThunk(id));
  };

  const decreaseQuantity = (id, quantity) => {
    if (quantity > 1) {
      dispatch(decreaseQuantityThunk(id));
    }
  };

  const count = basket.length;


  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.cards}>
          {basket && basket.map(item => {
            return (<div key={item._id} className={styles.card}>
              <div className={styles.imgBox}>
                <img src={item.image} alt={item.title} />
              </div>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.price}>{item.price}</p>
              <div className={styles.count}>
                <button onClick={() => decreaseQuantity(item._id, item.quantity)}>-</button>
                <span>{item.quantity ?? 1}</span>
                <button onClick={() => increaseQuantity(item._id)}>+</button>
              </div>
              <button onClick={() => deleteBasket(item._id)}>Sil</button>
            </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Basket