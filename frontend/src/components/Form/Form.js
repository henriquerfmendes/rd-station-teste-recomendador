import React from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';
import RecommendationList from '../RecommendationList/RecommendationList';

function Form({ onRecommendationsUpdate, recommendations = [] }) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange, resetForm } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataRecommendations = getRecommendations(formData, products);
    onRecommendationsUpdate(dataRecommendations);
  };

  const handleReset = (e) => {
    e.preventDefault();
    resetForm();
    onRecommendationsUpdate([]);
  };

  const isSubmitDisabled =
    (formData.selectedPreferences.length === 0 &&
      formData.selectedFeatures.length === 0) ||
    !formData.selectedRecommendationType;

  return (
    <form className="w-full max-w-6xl mx-auto" onSubmit={handleSubmit}>
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-1 h-6 bg-rdblue rounded mr-2" />
          <h3 className="text-xl font-bold text-rdblue">
            Suas Preferências
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-rdgrayMedium rounded-xl bg-white p-4 shadow-sm max-h-64 overflow-y-auto">
            <Preferences
              preferences={preferences}
              selectedPreferences={formData.selectedPreferences}
              onPreferenceChange={(selected) =>
                handleChange('selectedPreferences', selected)
              }
            />
          </div>
          <div className="border border-rdgrayMedium rounded-xl bg-white p-4 shadow-sm max-h-64 overflow-y-auto">
            <Features
              features={features}
              selectedFeatures={formData.selectedFeatures}
              onFeatureChange={(selected) =>
                handleChange('selectedFeatures', selected)
              }
            />
          </div>
        </div>
      </div>
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-1 h-6 bg-rdblue rounded mr-2" />
          <h3 className="text-xl font-bold text-rdblue">
            Tipo de Recomendação
          </h3>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 rounded-xl border border-rdgrayMedium shadow-sm">
          <div className="flex-1">
            <RecommendationType
              selectedRecommendationType={formData.selectedRecommendationType}
              onRecommendationTypeChange={(selected) =>
                handleChange('selectedRecommendationType', selected)
              }
            />
          </div>
          <div className="flex gap-2 mt-2 md:mt-0 items-center">
            <SubmitButton
              text="Obter Recomendação"
              disabled={isSubmitDisabled}
            />
            <button
              type="button"
              className="text-sm text-gray-600 hover:text-gray-800 underline m-4"
              onClick={handleReset}
            >
              Limpar
            </button>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-1 h-6 bg-rdblue rounded mr-2" />
          <h3 className="text-xl font-bold text-rdblue">
            Suas Recomendações
          </h3>
        </div>
        <div className="bg-rdblueLight/10 border border-rdblueLight rounded-xl p-4">
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
    </form>
  );
}

export default Form;
