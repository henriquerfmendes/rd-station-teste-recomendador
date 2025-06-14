import React from 'react';

function RecommendationList({ recommendations }) {
  return (
    <div>
      {recommendations.length === 0 && (
        <p className="text-gray-400 italic text-sm">
          Selecione as preferências, funcionalidades e tipo de recomendação para
          ver as recomendações.
        </p>
      )}
      <ul className="list-disc">
        {recommendations.map((recommendation, index) => (
          <li key={index} className="mb-2 ml-4 font-bold text-rdblue">
            {recommendation.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
