import React from 'react';
import Checkbox from '../../shared/Checkbox';

function Features({ features, selectedFeatures = [], onFeatureChange }) {
  const handleFeatureChange = (feature) => {
    const updatedFeatures = selectedFeatures.includes(feature)
      ? selectedFeatures.filter((pref) => pref !== feature)
      : [...selectedFeatures, feature];
    onFeatureChange(updatedFeatures);
  };

  return (
    <div className="mb-4 ml-4">
      <h2 className="text-lg font-bold mb-2">Funcionalidades:</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className="mb-2">
            <Checkbox
              value={feature}
              checked={selectedFeatures.includes(feature)}
              onChange={() => handleFeatureChange(feature)}
              className="w-4 mr-2 cursor-pointer accent-[#5BCBCC]"
            >
              {feature}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Features;
