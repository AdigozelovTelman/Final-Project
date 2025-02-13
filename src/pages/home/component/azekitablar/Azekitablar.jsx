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
        <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map(item => {
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

export default Azekitablar