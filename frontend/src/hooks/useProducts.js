import { useEffect, useState } from 'react';
import getProducts from '../services/productService';

const useProducts = () => {
  const [preferences, setPreferences] = useState([]);
  const [features, setFeatures] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        const allPreferences = [];
        const allFeatures = [];

        setProducts(products);

        products.forEach((product) => {
          allPreferences.push(...product.preferences);
          allFeatures.push(...product.features);
        });

        setPreferences(allPreferences);
        setFeatures(allFeatures);
      } catch (error) {
        console.error('Erro ao obter os produtos:', error);
      }
    };

    fetchData();
  }, []);

  return { preferences, features, products };
};

export default useProducts;
