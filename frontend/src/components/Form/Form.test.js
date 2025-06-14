import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';
import mockProducts from '../../mocks/mockProducts';

jest.mock('../../hooks/useProducts', () => () => {
  const preferences = Array.from(new Set(mockProducts.flatMap(p => p.preferences)));
  const features = Array.from(new Set(mockProducts.flatMap(p => p.features)));
  return {
    preferences,
    features,
    products: mockProducts,
  };
});

describe('Formulário', () => {
  test('botão "Obter Recomendação" habilita/desabilita corretamente e dispara ação', () => {
    render(<App />);
    const button = screen.getByText(/Obter Recomendação/i);
    expect(button).toBeDisabled();
    fireEvent.click(screen.getByLabelText(/Automação de marketing/i));
    fireEvent.click(screen.getByLabelText(/Produto Único/i));
    expect(button).not.toBeDisabled();
    fireEvent.click(button);
    expect(screen.getByText(/RD Station Marketing/i)).toBeInTheDocument();
  });

  test('lista de recomendações exibe produtos após submit ou mostra mensagem caso vazio', () => {
    render(<App />);
    fireEvent.click(screen.getByLabelText(/Gestão de leads e oportunidades/i));
    fireEvent.click(screen.getByLabelText(/Múltiplos Produtos/i));
    fireEvent.click(screen.getByText(/Obter Recomendação/i));
    //getAllByText, caso apareça mais de uma vez
    const text = screen.getAllByText(/RD Station CRM/i);
    expect(text.length).toBeGreaterThan(0);
    fireEvent.click(screen.getByText(/Limpar/i));
    expect(screen.getByText(/Selecione as preferências, funcionalidades e tipo de recomendação para ver as recomendações/i)).toBeInTheDocument();
  });

  test('botão Limpar reseta todos os campos ao ser clicado', () => {
    render(<App />);
    fireEvent.click(screen.getByLabelText(/Automação de marketing/i));
    fireEvent.click(screen.getByLabelText(/Produto Único/i));
    fireEvent.click(screen.getByText(/Limpar/i));
    expect(screen.getByLabelText(/Automação de marketing/i)).not.toBeChecked();
    expect(screen.getByLabelText(/Produto Único/i)).not.toBeChecked();
  });
}); 