import React, { useContext, useEffect, useState } from 'react';
import { Shopcontext } from '../context/Shopcontext';
import Title from '../components/Title';
import Productitem from '../components/Productitem';

const Collection = () => {
  const { products, search, showSearch } = useContext(Shopcontext);
  const [latestProducts, setLatestProducts] = useState([]);

  const applySearchFilter = () => {
    let filteredProducts = products.slice();
    const trimmedSearch = search.trim().toLowerCase();
    const searchWords = trimmedSearch.split(/\s+/);

    if (showSearch && trimmedSearch) {
      filteredProducts = filteredProducts.filter(item => {
        const itemName = item.name.toLowerCase();
        return searchWords.every(word => itemName.includes(word));
      });
    } else {
      filteredProducts = products.slice(0, 15);
    }

    setLatestProducts(filteredProducts);
  };

  useEffect(() => {
    applySearchFilter();
  }, [products]);

  useEffect(() => {
    applySearchFilter();
  }, [search, showSearch]);

  return (
    <div className='flex-1'>
      <div className='flex justify-between text-base sm:text-3xl mb-4'>
        <Title text1={'ALL'} text2={' COLLECTION'} />
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          latestProducts.map((item, index) => (
            <Productitem 
              key={index} 
              id={item._id} 
              image={item.image} 
              name={item.name} 
              price={item.price}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Collection;
