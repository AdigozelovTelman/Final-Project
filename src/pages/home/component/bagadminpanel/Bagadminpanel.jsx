import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Bagadminpanel.module.scss'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Layout from '../../../../components/layout/Layout';
import { deleteBagProductsThunk, getBagProductsThunk, postBagProductsThunk } from '../../../../redux/reducers/bagSlice';

const Bagadminpanel = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBagProductsThunk())
    }, [])

    const bagproducts = useSelector((state) => state.bagproducts.bagproducts) || []

    const deleteItem = (id) => {
        dispatch(deleteBagProductsThunk(id))
    }

    const formik = useFormik({
        initialValues: {
            image: '',
            title: '',
            price: '',
        },
        onSubmit: values => {
            dispatch(postBagProductsThunk(values))
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
                    {bagproducts && bagproducts.map(item => {
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

export default Bagadminpanel