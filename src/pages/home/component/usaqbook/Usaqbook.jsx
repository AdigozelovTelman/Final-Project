import React, { useEffect, useState } from 'react'
import Cards from '../../../../components/cards/Cards';
import { getUsaqProductsThunk } from '../../../../redux/reducers/usaqbookSlice';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Usaqbook.module.scss'
import { postBasketThunk } from '../../../../redux/reducers/basketSlice';
import { postWishlistThunk } from '../../../../redux/reducers/wishlistSlice';

const Usaqbook = () => {
  const dispatch = useDispatch();

    const usaqproducts = useSelector((state) => state.usaqproducts.usaqproducts || []);
    const loading = useSelector((state) => state.usaqproducts.loading);
    const error = useSelector((state) => state.usaqproducts.error);

    //  Aktiv şəkillərin indeksini saxlayan state
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4; 


    useEffect(() => {
        dispatch(getUsaqProductsThunk());
    }, [dispatch]);

    if (error) return <p>XƏTA BAŞ VERDİ</p>;
    if (loading) return <p>Yüklənir...</p>;

    // Məhsulları təkrarlamadan yalnız lazım olan hissəni götürək
    const wrappedProducts = [...usaqproducts, ...usaqproducts.slice(0, itemsPerPage)];
    const visibleProducts = wrappedProducts.slice(startIndex, startIndex + itemsPerPage);
    // Hər dəfə 1 şəkil irəli keçmək və sona çatanda yenidən başlamaq
    const handleNext = () => {
        if (usaqproducts.length > 0) {
            setStartIndex((prevIndex) => (prevIndex + 1) % usaqproducts.length);
        }
    };

    // Hər dəfə 1 şəkil geri keçmək və əvvələ çatanda sonuncuya qayıtmaq
    const handlePrev = () => {
        if (usaqproducts.length > 0) {
            setStartIndex((prevIndex) => (prevIndex - 1 + usaqproducts.length) % usaqproducts.length);
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
    <div className={styles.usaqbook}>
    <h2>Uşaq ədəbiyyatı</h2>
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

export default Usaqbook