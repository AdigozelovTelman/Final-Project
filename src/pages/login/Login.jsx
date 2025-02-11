import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import styles from './Login.module.scss';
import book from '../../components/assets/images/book.jpg';
import { FaUserLarge } from "react-icons/fa6";
import { FaLock } from "react-icons/fa"; 

const Login = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: values => {
            axios.post('https://northwind.vercel.app/api/categories', values);
            formik.resetForm();
        },
    });

    return (
        <>
            <div className={styles.container}>
                <div className={styles.form}>
                    <div className={styles.image}>
                        <img src={book} alt="kitab" />
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <h2>Login </h2>

                        <label htmlFor="username">User Name</label>
                        <div className={styles.inputWrapper}>
                            <FaUserLarge/>
                            <input 
                                placeholder='Type your username'
                                id="username"
                                name="username"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            />
                        </div>

                        
                        <label htmlFor="password">Password</label>
                        <div className={styles.inputWrapper}>
                            <FaLock />
                            <input 
                                placeholder='Type your password'
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                        </div>

                        <a href="#">Forgot password?</a>
                        <button type="submit">LOGIN</button>
                        <p>Don't have an account? <a href="/signup">Sign up</a></p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
