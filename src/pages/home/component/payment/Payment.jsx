import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../../../components/layout/Layout";
import styles from "./Payment.module.scss";

const Payment = () => {
    const location = useLocation();
    const totalAmount = location.state?.totalAmount || 0;

    const [form, setForm] = useState({
        cardNumber: "",
        cvv: "",
        expiry: "",
        name: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.cardNumber.length !== 16 || form.cvv.length !== 3 || !form.expiry || !form.name) {
            setMessage("Xahiş edirik, bütün məlumatları düzgün daxil edin! ❌");
            return;
        }

        const isSuccess = Math.random() > 0.5;

        if (isSuccess) {
            setMessage("Ödəniş uğurlu oldu! ✅");
        } else {
            setMessage("Ödəniş alınmadı. ❌ Yenidən cəhd edin.");
        }

        setTimeout(() => setMessage(""), 3000);
    };



    return (
        <Layout>
            <div className={styles.paymentContainer}>
                <h2>Ödəniş</h2>
                <p>Ümumi məbləğ: <strong>{totalAmount.toFixed(2)} AZN</strong></p>

                <form className={styles.paymentForm} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Kart nömrəsi (16 rəqəm)"
                        maxLength="16"
                        value={form.cardNumber}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="expiry"
                        placeholder="Bitmə tarixi (MM/YY)"
                        value={form.expiry}
                        maxLength="4"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="cvv"
                        placeholder="CVV (3 rəqəm)"
                        maxLength="3"
                        value={form.cvv}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Kart sahibinin adı"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className={styles.submitButton}>
                        Ödənişi tamamla
                    </button>
                </form>

                {message && <p className={styles.message}>{message}</p>}
            </div>
        </Layout>
    );
};

export default Payment;
