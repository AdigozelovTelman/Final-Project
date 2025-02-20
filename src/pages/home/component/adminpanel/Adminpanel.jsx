import React, { useEffect } from 'react'
import styles from './Adminpanel.module.scss'
import Layout from '../../../../components/layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductsThunk, getProductsThunk, postProductsThunk } from '../../../../redux/reducers/productSlice'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'


const Adminpanel = () => {
    const navigate = useNavigate()
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

                <div className={styles.header}>
                    <div className={styles.navbar}>
                        <ul>
                            <li> <button onClick={() => navigate('/adminpanel')} >Azerbaycan Admin Panel</button></li>
                            <li> <button onClick={() => navigate('/turk adminpanel')} >Türk Admin Panel</button></li>
                            <li> <button onClick={() => navigate('/rus adminpanel')} >Rus Admin Panel</button></li>
                            <li> <button onClick={() => navigate('/ingilis adminpanel')} >İngilis Admin Panel</button></li>
                        </ul>
                    </div>
                </div>

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


                <div className={styles.cards}>
                    {products && products.map(item => {
                        return <div className={styles.card}>
                            <img src={item.image} alt={item.title} />
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                            <button onClick={() => deleteItem(item._id)}>Delete</button>
                        </div>
                    })}
                </div>

            </Layout>
        </>
    )
}


export default Adminpanel;
