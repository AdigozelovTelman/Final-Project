import React, { useEffect, useState } from 'react';
import styles from './Azekitablar.module.scss';
import Layout from '../../../../components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../../../../redux/reducers/productSlice';

const Azekitablar = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState("");
    const [sortType, setSortType] = useState("default");

    useEffect(() => {
        dispatch(getProductsThunk());
    }, [dispatch]);

    const products = useSelector((state) => state.products.products) || [];

    const sortedAndFilteredProducts = () => {
        let filtered = products.filter((item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
        );

        let sorted = [...filtered]; 

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
                    <option value="priceDesc">Qiymət: Ən bahalı</option>  
                    <option value="priceAsc">Qiymət: Ən ucuz</option>
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
    );
};

export default Azekitablar;
