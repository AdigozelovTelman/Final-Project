import Layout from '../../components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantityThunk, deleteBasketThunk, increaseQuantityThunk } from '../../redux/reducers/basketSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 🔹 Navigasiya üçün

import styles from './Basket.module.scss';

const Basket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const basket = useSelector((state) => state.basket.basket) || [];
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalQuantity = basket.reduce((total, item) => total + (item.quantity ?? 1), 0);
    setCount(totalQuantity);

    const totalAmount = basket.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = item.quantity ?? 1;
      return total + (price * quantity);
    }, 0);

    setTotalPrice(totalAmount);
  }, [basket]);

  const deleteBasket = (id) => {
    dispatch(deleteBasketThunk(id));
  };

  const increaseQuantity = (id) => {
    dispatch(increaseQuantityThunk(id));
  };

  const decreaseQuantity = (id, quantity) => {
    if (quantity > 1) {
      dispatch(decreaseQuantityThunk(id));
    }
  };

  
  // const handleConfirm = () => {
  //   navigate('/payment'); 
  // };

  const totalAmount = basket.reduce((total, item) => total + (parseFloat(item.price) * (item.quantity ?? 1)), 0);

const goToPayment = () => {
    navigate("/payment", { state: { totalAmount } });
};

  return (
    <Layout>
      <div className={styles.container}>
        <h2>Ümumi məhsul miqdarı: {count}</h2>
        <h3>Ümumi məbləğ: {totalPrice.toFixed(2)} AZN</h3>

        <div className={styles.cards}>
          {basket && basket.map(item => (
            <div key={item._id} className={styles.card}>
              <div className={styles.imgBox}>
                <img src={item.image} alt={item.title} />
              </div>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.price}>{(parseFloat(item.price) || 0).toFixed(2)} AZN</p>
              <div className={styles.count}>
                <button onClick={() => decreaseQuantity(item._id, item.quantity)}>-</button>
                <span>{item.quantity ?? 1}</span>
                <button onClick={() => increaseQuantity(item._id)}>+</button>
              </div>
              <button onClick={() => deleteBasket(item._id)}>Sil</button>
            </div>
          ))}
        </div>

        {basket.length > 0 && (
          <button className={styles.confirmButton}  onClick={goToPayment}>
            Təsdiq et və ödəniş et
          </button>
        )}
      </div>
    </Layout>
  );
};

export default Basket;
