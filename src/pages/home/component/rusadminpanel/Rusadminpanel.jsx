import React, { useEffect } from 'react'
import styles from './Rusadminpanel.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteRusProductsThunk, getRusProductsThunk, postRusProductsThunk } from '../../../../redux/reducers/rusproductSlice'
import { useFormik } from 'formik'
import Layout from '../../../../components/layout/Layout'

const Rusadminpanel = () => {

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
                            <li><a href="/adminpanel">Azerbaycan Admin Panel</a></li>
                            <li><a href="/turk adminpanel">Türk Admin Panel</a></li>
                            <li><a href="/rus adminpanel">Rus Admin Panel</a></li>
                            <li><a href="/ingilis adminpanel">İngilis Admin Panel</a></li>
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
                        {rusproducts && rusproducts.map(item => {
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

export default Rusadminpanel