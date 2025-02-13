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
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trproducts && trproducts.map(item => {
                            return (
                                <tr key={item._id}>
                                    <td><img src={item.image} alt={item.title} /></td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Layout>
        </>
    )
}

export default Turkkitablar