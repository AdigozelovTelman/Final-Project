import React from 'react';
import styles from './DeliveryReturn.module.scss';
import Layout from '../../../../components/layout/Layout';

const DeliveryReturn = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Çatdırılma və İade</h1>

                <section>
                    <h2>Çatdırılma Şərtləri</h2>
                    <p>
                        Biz sifarişlərinizi ən qısa zamanda və təhlükəsiz şəkildə sizə çatdırmağa çalışırıq.
                        Aşağıda çatdırılma qaydaları ilə tanış ola bilərsiniz:
                    </p>
                    <ul>
                        <li><strong>Bakı şəhəri:</strong> 1-2 iş günü</li>
                        <li><strong>Regionlar:</strong> 3-5 iş günü</li>
                    </ul>
                    <p> Regionlara 20 AZN və üzəri sifarişlərdə çatdırılma tamamilə pulsuzdur.</p>
                </section>

                <section>
                    <h2>İade (Geri Qaytarma) Qaydaları</h2>
                    <p>
                        Müştərilərimizə yüksək xidmət göstərmək məqsədilə aşağıdakı hallarda məhsulu geri qaytara bilərsiniz:
                    </p>
                    <ul>
                        <li>Məhsul qüsurlu və ya zədəlidirsə.</li>
                        <li>Sifariş etdiyiniz məhsul fərqlidirsə.</li>
                        <li>Məhsul orijinal qablaşdırmada və istifadə olunmamış vəziyyətdədirsə.</li>
                    </ul>
                    <h3>İade müddəti:</h3>
                    <p>Müştərilər məhsulu **14 gün** ərzində geri qaytara bilərlər.</p>

                    <h3>İade prosesi:</h3>
                    <ol>
                        <li><strong>Bizimlə əlaqə saxlayın:</strong> <a href="mailto:info@BookCenter.az">info@BookCenter.az</a></li>
                        <li><strong>Məhsulu geri göndərin:</strong> Müvafiq ünvana çatdırın.</li>
                        <li><strong>Pulun qaytarılması:</strong> Məhsul yoxlandıqdan sonra 5 iş günü ərzində həyata keçirilir.</li>
                    </ol>
                </section>
            </div>
        </Layout>
    );
};

export default DeliveryReturn;