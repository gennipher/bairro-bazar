// NovoProduto.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserContext } from '../../../Context/UserContext';
import { MemoryRouter } from 'react-router-dom';
import NovoProduto from '../NovoProduto';

// Mock do contexto do usuário
const mockUserContext = {
  isLogged: true,
};

test('renderiza a página NovoProduto corretamente quando o usuário está logado', () => {
  render(
    <UserContext.Provider value={[mockUserContext]}>
      <MemoryRouter>
        <NovoProduto />
      </MemoryRouter>
    </UserContext.Provider>
  );

  // Verifica se os elementos da página estão presentes
  expect(screen.getByText('Adicionar Produto')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Nome do produto')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Descrição do produto')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Valor do produto')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Adicionar Produto' })).toBeInTheDocument();
});

test('redireciona para a página de login se o usuário não estiver logado', () => {
  // Define o contexto do usuário como não logado
  const mockUserContextNotLogged = {
    isLogged: false,
  };

  render(
    <UserContext.Provider value={[mockUserContextNotLogged]}>
      <MemoryRouter>
        <NovoProduto />
      </MemoryRouter>
    </UserContext.Provider>
  );

  // Verifica se o redirecionamento para a página de login ocorre
  expect(screen.queryByText('Adicionar Produto')).not.toBeInTheDocument();
  expect(screen.queryByPlaceholderText('Nome do produto')).not.toBeInTheDocument();
  expect(screen.queryByPlaceholderText('Descrição do produto')).not.toBeInTheDocument();
  expect(screen.queryByPlaceholderText('Valor do produto')).not.toBeInTheDocument();
  expect(screen.queryByRole('button', { name: 'Adicionar Produto' })).not.toBeInTheDocument();
});
