import React, { useState } from 'react';
import styles from './Orderstatus.module.scss';
import Layout from '../../../../components/layout/Layout';

const Orderstatus = () => {
    const [orderId, setOrderId] = useState('');
    const [orderStatus, setOrderStatus] = useState(null);

    const checkOrderStatus = () => {
        if (orderId === "12345") {
            setOrderStatus("Sifarişiniz hazırlanır.");
        } else if (orderId === "67890") {
            setOrderStatus("Sifarişiniz yoldadır.");
        } else {
            setOrderStatus("Sifariş tapılmadı.");
        }
    };

    return (
        <Layout>
            <div className={styles.container}>
                <h1>Sifarişin Statusu</h1>
                <p>Sifariş nömrənizi daxil edərək statusu öyrənin:</p>
                <input
                    type="text"
                    placeholder="Sifariş nömrənizi daxil edin"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                />
                <button onClick={checkOrderStatus}>Yoxla</button>

                {orderStatus && <p className={styles.status}>{orderStatus}</p>}
            </div>
        </Layout>
    );
};

export default Orderstatus;
