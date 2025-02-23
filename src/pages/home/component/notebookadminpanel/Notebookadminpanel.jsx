import React, { useEffect } from 'react'
import Layout from '../../../../components/layout/Layout'
import { useFormik } from 'formik'
import { deleteNotebookProductsThunk, getNotebookProductsThunk, postNotebookProductsThunk } from '../../../../redux/reducers/notebookSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './Notebookadminpanel.module.scss'

const Notebookadminpanel = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNotebookProductsThunk())
    }, [])

    const notebookproducts = useSelector((state) => state.notebookproducts.notebookproducts) || []

    const deleteItem = (id) => {
        dispatch(deleteNotebookProductsThunk(id))
    }

    const formik = useFormik({
        initialValues: {
            image: '',
            title: '',
            price: '',
        },
        onSubmit: values => {
            dispatch(postNotebookProductsThunk(values))
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
                    {notebookproducts && notebookproducts.map(item => {
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

export default Notebookadminpanel