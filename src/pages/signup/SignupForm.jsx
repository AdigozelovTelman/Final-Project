import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import styles from './SignupForm.module.scss'
import book from '../../components/assets/images/book.jpg'
import Layout from '../../components/layout/Layout';

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: values => {
            axios.post('https://northwind.vercel.app/api/categories', values)

            formik.resetForm()
        },
    });
    return (
        <>
            <Layout>


                <div className={styles.container}>
                    <div className={styles.form}>
                        <div className={styles.image}>
                            <img src={book} alt="kitab" />
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <h2>Login</h2>
                            <label htmlFor="username">User Name</label>
                            <input placeholder='   Type your username'
                                id="username"
                                name="username"
                                type="username"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            />

                            <label htmlFor="password" >Password</label>

                            <input placeholder='   Type your password'
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            <button type="submit">LOGIN</button>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default SignupForm