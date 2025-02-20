import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIngProductsThunk } from '../../../../redux/reducers/ingproducts'
import Layout from '../../../../components/layout/Layout'
import styles from './Ingiliskitablar.module.scss'

const Ingiliskitablar = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getIngProductsThunk())
    }, [])

    const ingproducts = useSelector((state) => state.ingproducts.ingproducts) || []

  return (
    <>
    <Layout>
    <div className={styles.cards}>
                    {ingproducts && ingproducts.map(item => {
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

export default Ingiliskitablar