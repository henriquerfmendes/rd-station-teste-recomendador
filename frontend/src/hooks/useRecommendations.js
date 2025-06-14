import { useState } from 'react';
import { getRecommendations } from '../services/recommendationService';

function useRecommendations(products) {
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendationsForForm = (formData) => {
    return getRecommendations(formData, products);
  };

  return { recommendations, getRecommendations: getRecommendationsForForm, setRecommendations };
}

export default useRecommendations;
