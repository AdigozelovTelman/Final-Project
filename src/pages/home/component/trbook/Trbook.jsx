import React, { useEffect, useState } from "react";
import Cards from "../../../../components/cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { postBasketThunk } from "../../../../redux/reducers/basketSlice";
import { postWishlistThunk } from "../../../../redux/reducers/wishlistSlice";
import styles from "./Trbook.module.scss";
import { getTrProductsThunk } from "../../../../redux/reducers/trproductSlice";

const Trbook = () => {
    const dispatch = useDispatch();

    const trproducts = useSelector((state) => state.trproducts.trproducts || []);
    const loading = useSelector((state) => state.trproducts.loading);
    const error = useSelector((state) => state.trproducts.error);

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
        dispatch(getTrProductsThunk());
    }, [dispatch]);

    if (error) return <p>XƏTA BAŞ VERDİ</p>;
    if (loading) return <p>Yüklənir...</p>;

    
    const wrappedProducts = [...trproducts, ...trproducts.slice(0, itemsPerPage)];
    const visibleProducts = wrappedProducts.slice(startIndex, startIndex + itemsPerPage);

    const handleNext = () => {
        if (trproducts.length > 0) {
            setStartIndex((prevIndex) => (prevIndex + 1) % trproducts.length);
        }
    };

    const handlePrev = () => {
        if (trproducts.length > 0) {
            setStartIndex((prevIndex) => (prevIndex - 1 + trproducts.length) % trproducts.length);
        }
    };

    const addBasket = async (item) => {
        dispatch(postBasketThunk(item));
        console.log(item);
    };

    const addWishlist = (item) => {
        dispatch(postWishlistThunk(item));
        console.log(item);
    };

    return (
        <div className={styles.trbook}>
            <h2>Türk dilində kitablar</h2>
            <div className={styles.sliderContainer}>
                <button className={styles.prevButton} onClick={handlePrev}>
                    {"<"}
                </button>

                <div className={styles.slider}>
                    {visibleProducts.map((item) => (
                        <Cards key={item.id} item={item} addBasket={() => addBasket(item)} addwishlist={() => addWishlist(item)} />
                    ))}
                </div>

                <button className={styles.nextButton} onClick={handleNext}>
                    {">"}
                </button>
            </div>
        </div>
    );
};

export default Trbook;
