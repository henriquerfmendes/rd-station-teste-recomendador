export const getRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  },
  products
) => {
  if (!products || !Array.isArray(products)) {
    return [];
  }

  const { selectedPreferences, selectedFeatures, selectedRecommendationType } =
    formData;
  const hasPreferences = selectedPreferences.length > 0;
  const hasFeatures = selectedFeatures.length > 0;

  const recommendedProducts = products.filter((product) => {
    const matchesPreferences = hasPreferences
      ? selectedPreferences.some((pref) => product.preferences.includes(pref))
      : false;
    const matchesFeatures = hasFeatures
      ? selectedFeatures.some((feature) => product.features.includes(feature))
      : false;

    if (hasPreferences && hasFeatures) {
      return matchesPreferences || matchesFeatures;
    } else if (hasPreferences) {
      return matchesPreferences;
    } else if (hasFeatures) {
      return matchesFeatures;
    }
    return false;
  });

  //Se for produto único, retorna o último produto
  if (selectedRecommendationType === 'single') {
    return recommendedProducts.slice(-1);
  }

  return recommendedProducts;
};

const recommendationService = { getRecommendations };
export default recommendationService;
