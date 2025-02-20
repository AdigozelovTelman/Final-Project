import React, { useEffect, useState } from "react";
import Cards from "../../../../components/cards/Cards";
import { getProductsThunk, postProductBasketThunk } from "../../../../redux/reducers/productSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Azebook.module.scss";
import { postBasketThunk } from "../../../../redux/reducers/basketSlice";
import { postWishlistThunk } from "../../../../redux/reducers/wishlistSlice";

const Azebook = () => {
    const dispatch = useDispatch();

    const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);

    const [startIndex, setStartIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4); 
    
    useEffect(() => {
      
        const updateItemsPerPage = () => {
            if (window.innerWidth <= 576) {
                setItemsPerPage(1); 
            } else if (window.innerWidth <= 991) {
                setItemsPerPage(3); 
            } else {
                setItemsPerPage(4); 
            }
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage); 

        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);


    useEffect(() => {
        dispatch(getProductsThunk());
    }, [dispatch]);


    if (error) return <p>XƏTA BAŞ VERDİ</p>;
    if (loading) return <p>Yüklənir...</p>;

    const wrappedProducts = [...products, ...products.slice(0, itemsPerPage)];
    const visibleProducts = wrappedProducts.slice(startIndex, startIndex + itemsPerPage);

    
    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    const addBasket = async (item) => {
        dispatch(postBasketThunk(item))
        console.log(item);

    }

    const addWishlist = (item) => {
        dispatch(postWishlistThunk(item))
        console.log(item);

    }


    return (
        <div className={styles.azebook}>
            <h2>Azərbaycan dilində kitablar</h2>
            <div className={styles.sliderContainer}>
                <button className={styles.prevButton} onClick={handlePrev}>
                    {"<"}
                </button>

                <div className={styles.slider}>
                    {visibleProducts.map((item) => (
                        <Cards key={item._id} item={item} addBasket={() => addBasket(item)} addwishlist={() => addWishlist(item)} />

                    ))}
                </div>

                <button className={styles.nextButton} onClick={handleNext}>
                    {">"}
                </button>
            </div>
        </div>
    );
};

export default Azebook;
