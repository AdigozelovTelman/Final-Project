import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRusProductsThunk } from '../../../../redux/reducers/rusproductSlice';
import Cards from '../../../../components/cards/Cards';
import styles from './Rusbook.module.scss'
import { postBasketThunk } from '../../../../redux/reducers/basketSlice';
import { postWishlistThunk } from '../../../../redux/reducers/wishlistSlice';

const Rusbook = () => {
    const dispatch = useDispatch();

    const rusproducts = useSelector((state) => state.rusproducts.rusproducts || []);
    const loading = useSelector((state) => state.rusproducts.loading);
    const error = useSelector((state) => state.rusproducts.error);

    //  Aktiv şəkillərin indeksini saxlayan state
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4; // Hər dəfə neçə şəkil göstərilsin


    useEffect(() => {
        dispatch(getRusProductsThunk());
    }, [dispatch]);

    if (error) return <p>XƏTA BAŞ VERDİ</p>;
    if (loading) return <p>Yüklənir...</p>;

    // Məhsulları təkrarlamadan yalnız lazım olan hissəni götürək
    const wrappedProducts = [...rusproducts, ...rusproducts.slice(0, itemsPerPage)];
    const visibleProducts = wrappedProducts.slice(startIndex, startIndex + itemsPerPage);

    // Hər dəfə 1 şəkil irəli keçmək və sona çatanda yenidən başlamasi
    const handleNext = () => {
        if (rusproducts.length > 0) {
            setStartIndex((prevIndex) => (prevIndex + 1) % rusproducts.length);
        }
    };

    // Hər dəfə 1 şəkil geri keçmək və əvvələ çatanda sonuncuya qayıtmasi
    const handlePrev = () => {
        if (rusproducts.length > 0) {
            setStartIndex((prevIndex) => (prevIndex - 1 + rusproducts.length) % rusproducts.length);
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
        <div className={styles.rusbook}>
            <h2>Rus dilində kitablar</h2>
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
    )
}

export default Rusbook