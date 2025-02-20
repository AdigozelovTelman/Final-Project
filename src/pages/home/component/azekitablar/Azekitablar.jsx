import React, { useEffect } from 'react'
import styles from './Azekitablar.module.scss'
import Layout from '../../../../components/layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductsThunk, getProductsThunk } from '../../../../redux/reducers/productSlice'


const Azekitablar = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    const products = useSelector((state) => state.products.products) || []

  return (
    <>
        <Layout>
        <div className={styles.cards}>
                    {products && products.map(item => {
                        return <div className={styles.card}>
                            <img src={item.image} alt={item.title} />
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </div>
                    })}
                </div>
        </Layout>
    </>
  )
}

export default Azekitablar