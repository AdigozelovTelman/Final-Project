import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIngProductsThunk } from '../../../../redux/reducers/ingproducts'
import Layout from '../../../../components/layout/Layout'
import styles from './Ingiliskitablar.module.scss'

const Ingiliskitablar = () => {
     const dispatch = useDispatch();
     const [searchText, setSearchText] = useState("");
     const [sortType, setSortType] = useState("default");
 
     useEffect(() => {
         dispatch(getIngProductsThunk());
     }, [dispatch]);
 
     const ingproducts = useSelector((state) => state.ingproducts.ingproducts) || [];

     // **Filter və sort birlikdə işləsin**
     const sortedAndFilteredProducts = () => {
        // Axtarış tətbiq edilir
        let filtered = ingproducts.filter((item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
        );

        // Sıralama tətbiq edilir (`slice()` ilə yeni array yaradılır)
        let sorted = [...filtered]; // Yeni array yarat

        if (sortType === "priceAsc") {
            sorted = sorted.sort((a, b) => a.price - b.price); // Qiymət artan
        } else if (sortType === "priceDesc") {
            sorted = sorted.sort((a, b) => b.price - a.price); // Qiymət azalan
        } else if (sortType === "titleAsc") {
            sorted = sorted.sort((a, b) => a.title.localeCompare(b.title)); // Ad A-Z
        } else if (sortType === "titleDesc") {
            sorted = sorted.sort((a, b) => b.title.localeCompare(a.title)); // Ad Z-A
        }

        return sorted;
    };

    return (
        <>
            <Layout>
            <div className={styles.filterContainer}>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Kitab axtar..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />

                <select
                    className={styles.sortSelect}
                    onChange={(e) => setSortType(e.target.value)}
                >
                    <option value="default">Sıralama</option>
                    <option value="priceDesc">Qiymət: Ən bahalı</option>  {/* Əvvəl "priceAsc" idi, indi düzəldi */}
                    <option value="priceAsc">Qiymət: Ən ucuz</option>  {/* Əvvəl "priceDesc" idi, indi düzəldi */}
                    <option value="titleAsc">Ad: A-Z</option>
                    <option value="titleDesc">Ad: Z-A</option>
                </select>

            </div>

            <div className={styles.cards}>
                {sortedAndFilteredProducts().map((item) => (
                    <div key={item._id} className={styles.card}>
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                        <p>{item.price} AZN</p>
                    </div>
                ))}
            </div>
        </Layout>
        </>
    )
}

export default Ingiliskitablar