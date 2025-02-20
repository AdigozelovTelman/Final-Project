import React, { useEffect } from 'react'
import Layout from '../../../../components/layout/Layout'
import styles from './Ingilisadminpanel.module.scss'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { deleteIngProductsThunk, getIngProductsThunk, postIngProductsThunk } from '../../../../redux/reducers/ingproducts'
import { useNavigate } from 'react-router-dom'

const Ingilisadminpanel = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getIngProductsThunk())
    }, [])

    const ingproducts = useSelector((state) => state.ingproducts.ingproducts) || []

    const deleteItem = (id) => {
        dispatch(deleteIngProductsThunk(id))
    }

    const formik = useFormik({
        initialValues: {
            image: '',
            title: '',
            price: '',
        },
        onSubmit: values => {
            dispatch(postIngProductsThunk(values))
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
                    {ingproducts && ingproducts.map(item => {
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

export default Ingilisadminpanel