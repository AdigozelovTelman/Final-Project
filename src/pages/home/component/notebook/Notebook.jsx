import React, { useEffect } from 'react'
import Layout from '../../../../components/layout/Layout'
import styles from './Notebook.module.scss'
import Cards from '../../../../components/cards/Cards'
import { useDispatch, useSelector } from 'react-redux'
import { getNotebookProductsThunk } from '../../../../redux/reducers/notebookSlice'
import { postBasketThunk } from '../../../../redux/reducers/basketSlice'
import { postWishlistThunk } from '../../../../redux/reducers/wishlistSlice'

const Notebook = () => {
    const dispatch = useDispatch();

    const notebookproducts = useSelector((state) => state.notebookproducts.notebookproducts);
  
    useEffect(() => {
      dispatch(getNotebookProductsThunk());
    }, [dispatch]);
  
  
    const addBasket = async (item) => {
      dispatch(postBasketThunk(item))
      console.log(item);
  
    }
  
    const addWishlist = (item) => {
      dispatch(postWishlistThunk(item))
      console.log(item);
      
    }
  return (
    <Layout>
    <div className={styles.notebook}>
      <h2>Məktəb və Ofis Ləvazimatları </h2>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          {notebookproducts.map((item) => (
            <Cards key={item._id} item={item} addBasket={() => addBasket(item)} addwishlist={() => addWishlist(item)} />
          ))}
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Notebook