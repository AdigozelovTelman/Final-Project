import React, { useEffect } from 'react'
import styles from './Rusadminpanel.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteRusProductsThunk, getRusProductsThunk, postRusProductsThunk } from '../../../../redux/reducers/rusproductSlice'
import { useFormik } from 'formik'
import Layout from '../../../../components/layout/Layout'
import { useNavigate } from 'react-router-dom'

const Rusadminpanel = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRusProductsThunk())
    }, [])

    const rusproducts = useSelector((state) => state.rusproducts.rusproducts) || []

    const deleteItem = (id) => {
        dispatch(deleteRusProductsThunk(id))
    }

    const formik = useFormik({
        initialValues: {
            image: '',
            title: '',
            price: '',
        },
        onSubmit: values => {
            dispatch(postRusProductsThunk(values))
            formik.resetForm();
        },
    });

    return (
        <>
            <Layout>

                <div className={styles.header}>
                    <div className={styles.navbar}>
                        <ul>
                            <li> <button onClick={() => navigate('/adminpanel')} >Azerbaycan </button></li>
                            <li> <button onClick={() => navigate('/turk adminpanel')} >Türk </button></li>
                            <li> <button onClick={() => navigate('/rus adminpanel')} >Rus </button></li>
                            <li> <button onClick={() => navigate('/ingilis adminpanel')} >İngilis </button></li>
                            <li> <button onClick={() => navigate('/notebook adminpanel')} >Dəftərxana </button></li>
                            <li> <button onClick={() => navigate('/bag adminpanel')} >Çantalar</button></li>
                            <li> <button onClick={() => navigate('/gift adminpanel')} >Hədiyyəlik </button></li>
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
                    {rusproducts && rusproducts.map(item => {
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

export default Rusadminpanel