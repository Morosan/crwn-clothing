
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategoriesAsync } from '../../store/categories/category.action';
import { addCollectionAndDocuments } from '../../utils/firebase/firebase.utils';
import SHOP_DATA from '../../shop-data';

import './shop.styles.scss';

const Shop = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  // Decoment for DB firebase update and then comment back
  // useEffect(() => {
    // addCollectionAndDocuments('categories', SHOP_DATA);
  // })

  return (
    <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;