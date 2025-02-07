import React from 'react';
import styles from './Bizimferqimiz.module.scss';
import delivery from '../../../../components/assets/images/services1.svg';
import payment from '../../../../components/assets/images/services2.svg';
import money from '../../../../components/assets/images/services3.svg';
import support from '../../../../components/assets/images/services4.svg';

const Bizimferqimiz = () => {
  return (
    <div className={styles.container}>
      <h3>Bizim Fərqimiz</h3>
        <div className={styles.carts}>
            <div className={styles.cart}>
                <img src={delivery} alt="Çatdırılma" />
                <h5>Sürətli və Pulsuz Çatdırılma</h5>
                <p>Sifarişlərinizi sürətli və tam pulsuz ünvana çatdırırıq.</p>
            </div>
            <div className={styles.cart}>
                <img src={payment} alt="Ödəniş" />
                <h5>Təhlükəsiz Ödəniş</h5>
                <p>Ödənişləriniz SSL şifrələmə ilə tam təhlükəsiz şəkildə həyata keçirilir.</p>
            </div>
            <div className={styles.cart}>
                <img src={money} alt="Pul Geri Zəmanət" />
                <h5>Pul Geri Zəmanət</h5>
                <p>Alışınızdan narazı qalsanız, 14 gün ərzində pulunuzu geri ala bilərsiniz.</p>
            </div>
            <div className={styles.cart}>
                <img src={support} alt="Dəstək" />
                <h5>Onlayn Dəstək</h5>
                <p>Hər zaman sizə kömək etməyə hazır olan müştəri dəstəyi xidmətimiz var.</p>
            </div>
        </div>
    </div>
  );
};

export default Bizimferqimiz;
