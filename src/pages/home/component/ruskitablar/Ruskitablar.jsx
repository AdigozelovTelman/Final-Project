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
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rusproducts && rusproducts.map(item => {
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

export default Ruskitablar