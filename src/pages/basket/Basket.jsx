import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBasketThunk, getBasketThunk } from '../../redux/reducers/basketSlice'
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
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.cards}>
          {basket && basket.map(item => {
            return <div className={styles.card}>
         <div className={styles.imgBox}>
          <img src={item.image} alt={item.title} />
        </div>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.price}>{item.price}</p>
        <button onClick={() => deleteBasket(item._id)}>Sil</button>
            </div>
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Basket