import React, { useEffect } from 'react'
import Layout from '../../../../components/layout/Layout';
import { useFormik } from 'formik';
import { deleteTrProductsThunk, getTrProductsThunk, postTrProductsThunk } from '../../../../redux/reducers/trproductSlice';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Turkadminpanel.module.scss'
import { useNavigate } from 'react-router-dom';


const Turkadminpanel = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTrProductsThunk())
    }, [])

    const trproducts = useSelector((state) => state.trproducts.trproducts) || []

    const deleteItem = (id) => {
        dispatch(deleteTrProductsThunk(id))
    }

    const formik = useFormik({
        initialValues: {
            image: '',
            title: '',
            price: '',
        },
        onSubmit: values => {
            dispatch(postTrProductsThunk(values))
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
                    {trproducts && trproducts.map(item => {
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

export default Turkadminpanel