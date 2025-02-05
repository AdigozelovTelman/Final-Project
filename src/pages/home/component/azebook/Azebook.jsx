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

    //  Aktiv şəkillərin indeksini saxlayan state
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4; // Hər dəfə neçə şəkil göstərilsin
    

    useEffect(() => {
        dispatch(getProductsThunk());
    }, []);


    if (error) return <p>XƏTA BAŞ VERDİ</p>;
    if (loading) return <p>Yüklənir...</p>;

    //  Boşluq qalmaması üçün məhsulları dövrə salırıq
    const wrappedProducts = [...products, ...products.slice(0, itemsPerPage)];
    const visibleProducts = wrappedProducts.slice(startIndex, startIndex + itemsPerPage);

    //  Hər dəfə 1 şəkil irəli keçmək və sona çatanda yenidən başlamaq
    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    // Hər dəfə 1 şəkil geri keçmək və əvvələ çatanda sonuncuya qayıtmaq
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
                    <Cards key={item.id} item={item} addBasket={() => addBasket(item)} addwishlist={()=> addWishlist(item)} />
                    // <button onClick={addBasket(item)}>addsss</button>
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
