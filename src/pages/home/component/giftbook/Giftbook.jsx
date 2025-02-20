import React, { useState } from 'react';
import styles from './Giftbook.module.scss';

const Giftbook = () => {
  const items = [
    { id: 1, name: 'Bəzək Dəsti', price: 50, image: 'https://via.placeholder.com/200x200?text=Bəzək+Dəsti' },
    { id: 2, name: 'Qəhvə fincanı', price: 20, image: 'https://via.placeholder.com/200x200?text=Qəhvə+Fincanı' },
    { id: 3, name: 'Dekorativ Şam', price: 15, image: 'https://via.placeholder.com/200x200?text=Dekorativ+Şam' },
    { id: 4, name: 'Təbii Səbət', price: 30, image: 'https://via.placeholder.com/200x200?text=Təbii+Səbət' },
    
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handlePayment = () => {
    if (!selectedItem) {
      alert('Zəhmət olmasa, hədiyyə olaraq bir əşya seçin!');
      return;
    }
    alert(`Ödəniş uğurla tamamlandı! Seçilən əşya: ${selectedItem.name}`);
  };

  // return (
  //   <div className={styles.giftItemsContainer}>
  //     <h1>Hədiyyəlik Əşyalar Dükanı</h1>
  //     <div className={styles.itemsList}>
  //       <h2>Əşyalar</h2>
  //       <div className={styles.items}>
  //         {items.map((item) => (
  //           <div key={item.id} className={styles.itemCard}>
  //             <img src={item.image} alt={item.name} className={styles.itemImage} />
  //             <h3>{item.name}</h3>
  //             <p>Qiymət: {item.price} AZN</p>
  //             <button onClick={() => handleSelectItem(item)}>Hədiyyə et</button>
  //           </div>
  //         ))}
  //       </div>
  //     </div>

  //     {selectedItem && (
  //       <div className={styles.selectedItem}>
  //         <h3>Seçilmiş Əşya:</h3>
  //         <img src={selectedItem.image} alt={selectedItem.name} className={styles.selectedItemImage} />
  //         <p>{selectedItem.name}</p>
  //         <p>Qiymət: {selectedItem.price} AZN</p>
  //         <button onClick={handlePayment}>Ödəniş et</button>
  //       </div>
  //     )}
  //   </div>
  // );
};

export default Giftbook;
