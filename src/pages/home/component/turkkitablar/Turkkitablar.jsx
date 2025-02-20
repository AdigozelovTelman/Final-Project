import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrProductsThunk } from '../../../../redux/reducers/trproductSlice'
import Layout from '../../../../components/layout/Layout'
import styles from './Turkkitablar.module.scss'

const Turkkitablar = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTrProductsThunk())
    }, [])

    const trproducts = useSelector((state) => state.trproducts.trproducts) || []

    return (
        <>
            <Layout>
            <div className={styles.cards}>
                    {trproducts && trproducts.map(item => {
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

export default Turkkitablar