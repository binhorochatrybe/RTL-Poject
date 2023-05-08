import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <App.js />', () => {
  test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação:', () => {
    renderWithRouter(<App />);
    const textHome = screen.getByRole('link', { name: /home/i });
    const textAbout = screen.getByRole('link', { name: /about/i });
    const textFvPokemon = screen.getByRole('link', { name: /favorite pokémon/i });
    expect(textHome).toBeInTheDocument();
    expect(textAbout).toBeInTheDocument();
    expect(textFvPokemon).toBeInTheDocument();
  });
  test('Teste se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação;', () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getAllByRole('link', {
      name: /home/i,
    });
    userEvent.click(linkHome[0]);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  test('Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação;', () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: /about/i });
    userEvent.click(linkAbout);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });
  test('Teste se a aplicação é redirecionada para a página de Pokémon Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação;', () => {
    const { history } = renderWithRouter(<App />);
    const linkFavorite = screen.getByRole('link', { name: /favorite pokémon/i });
    userEvent.click(linkFavorite);
    const { pathname } = history.location;
    console.log(history);
    expect(pathname).toBe('/favorites');
  });
  test('Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida', async () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/xxxxxx');
    });
    const linkNotfound = screen.getByRole('heading', { name: /page requested not found/i });
    expect(linkNotfound).toBeInTheDocument();
  });
});
