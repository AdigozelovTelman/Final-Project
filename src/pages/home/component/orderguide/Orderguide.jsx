import React from "react";
import styles from "./Orderguide.module.scss";
import Layout from "../../../../components/layout/Layout";

const Orderguide = () => {
    return (
        <Layout>
            <div className={styles.orderGuide}>
                <h1>Necə Sifariş Edim?</h1>
                <p>Sifariş vermək üçün aşağıdakı addımları yerinə yetirin:</p>
                <ol>
                    <li className={styles.over}>Saytımızda istədiyiniz kitabları seçin və səbətə əlavə edin.</li>
                    <li className={styles.over}>Səbətə daxil olun və sifarişi təsdiq edin.</li>
                    <li className={styles.over}>Ödəniş üsulunu seçin (Kart və ya Nağd).</li>
                    <li className={styles.over}>Çatdırılma ünvanınızı və əlaqə məlumatlarınızı daxil edin.</li>
                    <li className={styles.over}>Sifarişinizi tamamlayın və təsdiq e-poçtunuzu gözləyin.</li>
                </ol>
            </div>
        </Layout>
    );
};

export default Orderguide;
