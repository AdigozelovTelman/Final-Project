import React from "react";
import styles from "./PaymentMethods.module.scss";
import Layout from "../../../../components/layout/Layout";

const PaymentMethods = () => {
    return (
        <Layout>
            <div className={styles.paymentContainer}>
                <h1>Ödəniş Üsulları</h1>
                <p>BookCenter.az-da aşağıdakı ödəniş üsullarından istifadə edə bilərsiniz:</p>

                <ul>
                    <li><strong>Nağd Ödəniş:</strong> Kuryer vasitəsilə sifariş zamanı nağd ödəniş edə bilərsiniz.</li>
                    <li><strong>Bank Kartı ilə Ödəniş:</strong> Visa, MasterCard və digər bank kartları qəbul edilir.</li>
                    <li><strong>Online Ödəniş:</strong> m10, PayPal və digər ödəniş sistemlərindən istifadə edə bilərsiniz.</li>
                </ul>
            </div>
        </Layout>
    );
};

export default PaymentMethods;