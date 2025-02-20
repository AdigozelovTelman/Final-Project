import React, { useState } from "react";
import styles from "./Payment.module.scss";
import Layout from "../../../../components/layout/Layout";

const Payment = () => {
    const [form, setForm] = useState({
        amount: "",
        name: "",
        phone: "",
        email: "",
    });

    const [message, setMessage] = useState(""); 

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "amount" && (value < 0 || isNaN(value))) {
            return; 
        }

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isSuccess = Math.random() > 0.5; 

        if (isSuccess) {
            setMessage("Ödəniş uğurlu oldu! ✅");
        } else {
            setMessage("Ödəniş alınmadı. ❌ Yenidən cəhd edin.");
        }

        setForm({
            amount: "",
            name: "",
            phone: "",
            email: "",
        });

        setTimeout(() => setMessage(""), 3000);
    };

    return (
        <Layout>
            <div className={styles.paymentContainer}>
                <form className={styles.paymentForm} onSubmit={handleSubmit}>
                    <label className={styles.label}>Ödəniş:</label>
                    <div className={styles.inputGroup}>
                        <input
                            type="number"
                            name="amount"
                            placeholder="Məbləğ"
                            value={form.amount}
                            onChange={handleChange}
                            min="0"
                            required
                        />
                        <span className={styles.currency}>AZN</span>
                    </div>

                    <input
                        type="text"
                        name="name"
                        placeholder="Ödəyiçinin adı"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Əlaqə nömrəsi"
                        value={form.phone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="e-mail"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className={styles.submitButton}>
                        Ödəniş et
                    </button>
                </form>

                {message && <p className={styles.message}>{message}</p>}
            </div>
        </Layout>
    );
};

export default Payment;
