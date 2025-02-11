import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import styles from './Signup.module.scss';
import book from '../../../../components/assets/images/book.jpg';
import { FaEnvelope, FaUserLarge } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { postRegisterThunk } from '../../../../redux/reducers/registerSlice';

const Signup = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        onSubmit: values => {
            axios.post('https://northwind.vercel.app/api/categories', values);
            formik.resetForm();
        },
    });

    // const dispatch = useDispatch()

    // const registers = useSelector(response => response.registers.registers)

    // const register = (item) =>{
    //     dispatch(postRegisterThunk(item))
    // } 

    return (
        <>
            <div className={styles.container}>
                <div className={styles.form}>
                    <div className={styles.image}>
                        <img src={book} alt="kitab" />
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <h2>Signup Form</h2>

                        <label htmlFor="username">User Name</label>
                        <div className={styles.inputWrapper}>
                            <FaUserLarge />
                            <input
                                placeholder='Type your username'
                                id="username"
                                name="username"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            />
                        </div>

                        <label htmlFor="email">Email</label>
                        <div className={styles.inputWrapper}>
                            <FaEnvelope />
                            <input
                                placeholder='Type your email'
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
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

                        <button type="submit"   >Sign up</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup