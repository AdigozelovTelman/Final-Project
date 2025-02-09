import React from 'react';
import styles from './Notfound.module.scss';
import { useNavigate } from 'react-router-dom';
import { FaLeftLong } from "react-icons/fa6";

const Notfound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Üzr istəyirik, bu səhifə tapılmadı.</p>
      <button onClick={() => navigate(-1)}>
        <FaLeftLong/> Geri qayıt</button>
    </div>
  );
};

export default Notfound;
