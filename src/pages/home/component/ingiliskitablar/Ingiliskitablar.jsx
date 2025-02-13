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
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {ingproducts && ingproducts.map(item => {
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

export default Ingiliskitablar