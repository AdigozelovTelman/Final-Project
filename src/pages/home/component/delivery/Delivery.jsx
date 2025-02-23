import React from 'react';
import styles from './Delivery.module.scss';
import Layout from '../../../../components/layout/Layout';

const Delivery = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Çatdırılma Şərtləri</h1>
                <p>Bizim çatdırılma xidmətimiz sizə sifariş etdiyiniz məhsulları ən qısa zamanda və təhlükəsiz şəkildə təqdim edir.</p>

                <h2>Çatdırılma müddəti</h2>
                <p>Çatdırılma müddəti sifarişin yerləşdirildiyi ünvana və sifarişin növünə görə dəyişə bilər:</p>
                <ul>
                    <li>Bakı şəhəri daxilində: 1-2 iş günü</li>
                    <li>Regionlara: 3-5 iş günü</li>
                </ul>

                <h2>Çatdırılma üsulları</h2>
                <p>Aşağıdakı çatdırılma üsullarını təklif edirik:</p>
                <ul>
                    <li>Kuryer xidməti</li>
                    <li>Poçt vasitəsilə çatdırılma</li>
                    <li>Mağazadan təhvil alma</li>
                </ul>

                <h2>Çatdırılma haqqı</h2>
                <p>
                    Çatdırılma haqqı sifarişin ümumi məbləğinə və yerləşdiyi ünvana əsasən müəyyən edilir.
                    Regionlara 20 AZN və üzəri sifarişlərdə çatdırılma tamamilə pulsuzdur.
                </p>
            </div>
        </Layout>
    );
};

export default Delivery;
