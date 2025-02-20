import React, { useEffect } from 'react'
import Layout from '../../../../components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getRusProductsThunk } from '../../../../redux/reducers/rusproductSlice';
import styles from './Ruskitablar.module.scss'

const Ruskitablar = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRusProductsThunk())
    }, [])

    const rusproducts = useSelector((state) => state.rusproducts.rusproducts) || []

    return (
        <>
            <Layout>
            <div className={styles.cards}>
                    {rusproducts && rusproducts.map(item => {
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

export default Ruskitablar