import React, { useEffect } from 'react'
import Layout from '../../../../components/layout/Layout'
import styles from './Ingilisadminpanel.module.scss'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { deleteIngProductsThunk, getIngProductsThunk, postIngProductsThunk } from '../../../../redux/reducers/ingproducts'

const Ingilisadminpanel = () => {

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
                        {ingproducts && ingproducts.map(item => {
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

export default Ingilisadminpanel