import React, { useEffect } from 'react'
import styles from './Adminpanel.module.scss'
import Layout from '../../../../components/layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductsThunk, getProductsThunk, postProductsThunk } from '../../../../redux/reducers/productSlice'


import { useFormik } from 'formik'


const Adminpanel = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    const products = useSelector((state) => state.products.products) || []

    const deleteItem = (id) => {
        dispatch(deleteProductsThunk(id))
    }

    const formik = useFormik({
        initialValues: {
            image: '',
            title: '',
            price: '',
        },
        onSubmit: values => {
            dispatch(postProductsThunk(values))
            formik.resetForm();
        },
    });
    
    return (
        <>
            <Layout>
                <div className={styles.formContainer}>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="image">Image</label>
                        <input
                            id="image"
                            name="image"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.image}
                        />
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />
                        <label htmlFor="price">Price</label>
                        <input
                            id="price"
                            name="price"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map(item => {
                            return (
                                <tr key={item._id}>
                                    <td><img src={item.image} alt={item.title} /></td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td><button onClick={() => deleteItem(item._id)}>Delete</button></td>
                                    
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Layout>
        </>
    )
}

export default Adminpanel;
