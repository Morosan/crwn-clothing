import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import ProductCard from '../../components/product-card/product-card.component';

import './category.styles.scss';
import { useSelector } from 'react-redux';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products && 
          products.map((product) => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </>
  )
} 

export default Category;