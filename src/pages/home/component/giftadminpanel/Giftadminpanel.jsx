import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './Giftadminpanel.module.scss'
import { deleteGiftProductsThunk, getGiftProductsThunk, postGiftProductsThunk } from '../../../../redux/reducers/giftSlice'
import { useFormik } from 'formik'
import Layout from '../../../../components/layout/Layout'

const Giftadminpanel = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGiftProductsThunk())
    }, [])

    const giftproducts = useSelector((state) => state.giftproducts.giftproducts) || []

    const deleteItem = (id) => {
        dispatch(deleteGiftProductsThunk(id))
    }

    const formik = useFormik({
        initialValues: {
            image: '',
            title: '',
            price: '',
        },
        onSubmit: values => {
            dispatch(postGiftProductsThunk(values))
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
                    {giftproducts && giftproducts.map(item => {
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

export default Giftadminpanel