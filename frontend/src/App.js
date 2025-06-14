import React, { useState } from 'react';
import Form from './components/Form/Form';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommendationsUpdate = (newRecommendations) => {
    setRecommendations(newRecommendations);
  };

  return (
    <div className="bg-rdgray min-h-screen flex flex-col items-center">
      <div className="w-full max-w-5xl max-h-20 bg-rdblue rounded-2xl pb-8 pt-8 mt-4 mb-4 flex flex-col justify-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white font-nunito">
          Recomendador de Produtos RD Station
        </h1>
      </div>
      <div className="w-full max-w-5xl bg-rdblueLight/10 border border-rdblueLight rounded-lg shadow-sm p-4 mt-2 mb-8 z-10 text-rdblue">
        <p>
          Aqui você pode encontrar uma variedade de produtos da RD Station, cada
          um projetado para atender às necessidades específicas do seu negócio.
          De CRM a Marketing, de Conversas a Inteligência Artificial, temos uma
          solução para ajudar você a alcançar seus objetivos.
        </p>
        <p>
          Use o formulário abaixo para selecionar suas preferências e
          funcionalidades desejadas e receba recomendações personalizadas de
          produtos que melhor atendam às suas necessidades.
        </p>
      </div>
      <div className="w-full max-w-5xl">
        <Form
          onRecommendationsUpdate={handleRecommendationsUpdate}
          recommendations={recommendations}
        />
      </div>
    </div>
  );
}

export default App;
