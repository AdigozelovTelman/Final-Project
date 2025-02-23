import React from 'react';
import styles from './GiftCards.module.scss';
import Layout from '../../../../components/layout/Layout';

const GiftCards = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>🎁 Hədiyyə Kartları</h1>
                <p>Sevdiklərinizə unudulmaz hədiyyə vermək üçün hədiyyə kartlarımızdan istifadə edin.</p>

                <h2>💳 Hədiyyə Kartı Növləri</h2>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h3>50 AZN</h3>
                        <p>Kitab həvəskarları üçün ideal seçim.</p>
                        <button>İndi Al</button>
                    </div>
                    <div className={styles.card}>
                        <h3>100 AZN</h3>
                        <p>Daha geniş seçim imkanı ilə.</p>
                        <button>İndi Al</button>
                    </div>
                    <div className={styles.card}>
                        <h3>200 AZN</h3>
                        <p>Eksklüziv kolleksiya üçün mükəmməl.</p>
                        <button>İndi Al</button>
                    </div>
                </div>

                <h2>📜 Şərtlər və Qaydalar</h2>
                <ul>
                    <li>Hədiyyə kartları yalnız **BookCenter.az** mağazasında keçərlidir.</li>
                    <li>Kartların istifadə müddəti **1 ildir**.</li>
                    <li>Yalnız elektron variantı mövcuddur.</li>
                </ul>

                <h2>Necə Almaq Olar?</h2>
                <p>Hədiyyə kartınızı əldə etmək üçün onlayn sifariş verə bilərsiniz.</p>

                <button className={styles.buyButton}>Hədiyyə Kartı Al</button>
            </div>
        </Layout>
    );
};

export default GiftCards;
