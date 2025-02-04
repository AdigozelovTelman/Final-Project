import React, { useEffect, useState } from 'react'
import Cards from '../../components/cards/Cards';
import axios from 'axios';
import styles from './Basket.module.scss'
import Layout from '../../components/layout/Layout';

const Basket = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5050/basket").then((res) => {
      setProduct(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5050/basket/${id}`)
      .then((res) => {
        setProduct(product.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };
  return (
    <>
    <div className={styles.sectionTwo}>
      <Layout>
        <div className={styles.containerProducts}>
          <div className={styles.items}>
            {product &&
              product.map((item) => (
                <div key={item.id} className={styles.cardWrapper}>
                  <Cards item={item} />
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDelete(item.id)}
                  >
                    Sil
                  </button>
                </div>
              ))}
          </div>
        </div>
      </Layout>
    </div>
  </>
  )
}

export default Basket