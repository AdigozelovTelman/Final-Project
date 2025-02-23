import React from 'react';
import styles from './Discount.module.scss';
import Layout from '../../../../components/layout/Layout';

const Discount = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Endirim və Kampaniyalar</h1>
                <p>Sizlər üçün ən sərfəli endirimlər və kampaniyaları təqdim edirik! Yeniliklərdən xəbərdar olun və fürsətləri qaçırmayın.</p>

                <h2>Hazırki Kampaniyalar</h2>
                <div className={styles.campaigns}>
                    <div className={styles.campaign}>
                        <h3>🎉 50% Endirim Kampaniyası</h3>
                        <p>Bütün kitablar 50% endirimlə! Kampaniya yalnız bu ay üçün keçərlidir.</p>
                    </div>
                    <div className={styles.campaign}>
                        <h3>📚 3 Al, 2 Ödə!</h3>
                        <p>İstədiyiniz 3 kitabı alın, yalnız 2-nin pulunu ödəyin. Müddət: 25 Fevral - 10 Mart.</p>
                    </div>
                    <div className={styles.campaign}>
                        <h3>🚚 Pulsuz Çatdırılma</h3>
                        <p>Regionlara 20 AZN və üzəri sifarişlərdə çatdırılma tamamilə pulsuzdur.</p>
                    </div>
                </div>

                <h2>Gələcək Kampaniyalar</h2>
                <p>Tezliklə yeni endirim və kampaniyalarla qarşınızda olacağıq!</p>

                <button className={styles.subscribeButton}>Bildirişlərə Abunə Ol</button>
            </div>
        </Layout>
    );
};

export default Discount;
