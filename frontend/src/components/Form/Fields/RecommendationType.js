import React from 'react';
import Checkbox from '../../shared/Checkbox';

function RecommendationType({ selectedRecommendationType, onRecommendationTypeChange }) {
  return (
    <div className="mb-4 ml-4">
      <h2 className="text-lg font-bold mb-2">Tipo de Recomendação:</h2>
      <div className="flex items-center">
        <Checkbox
          type="radio"
          id="radio-single"
          name="recommendationType"
          value="single"
          checked={selectedRecommendationType === 'single'}
          onChange={() => onRecommendationTypeChange('single')}
          className="w-4 mr-2 cursor-pointer accent-[#5BCBCC]"
        />
        <label htmlFor="radio-single" className="mr-4">Produto Único</label>
        <Checkbox
          type="radio"
          id="radio-multiple"
          name="recommendationType"
          value="multiple"
          checked={selectedRecommendationType === 'multiple'}
          onChange={() => onRecommendationTypeChange('multiple')}
          className="w-4 mr-2 cursor-pointer accent-[#5BCBCC]"
        />
        <label htmlFor="radio-multiple">Múltiplos Produtos</label>
      </div>
    </div>
  );
}

export default RecommendationType;
