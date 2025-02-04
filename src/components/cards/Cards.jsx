import React from 'react'
import styles from './Cards.module.scss'
import { CiHeart } from 'react-icons/ci'


const Cards = ({ item, addtobasket, addtowish }) => {
  return (
    <>
 
      <div className={styles.container}>
        <div className={styles.imgBox}>
          <img src={item.image} alt={item.title} />
        </div>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.price}>{item.price}</p>
        <button className={styles.wishBtn}> <CiHeart /></button>
        <button className={styles.basketBtn} onClick={addtobasket}   > Səbətə at </button>
    </div>
    </>
  )
}
export default Cards