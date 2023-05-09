import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  test('Teste se é renderizado um card com as informações de determinado Pokémon:', () => {
    renderWithRouter(<App />);
    const name = screen.getByTestId('pokemon-name').innerHTML;
    expect(name).toBe('Pikachu');
    const type = screen.getByTestId('pokemon-type').innerHTML;
    expect(type).toBe('Electric');
    const weight = screen.getByTestId('pokemon-weight').innerHTML;
    expect(weight).toMatch(/Average weight: \d+(\.\d+)? [a-zA-Z]+/);
    const img = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(img).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(img).toHaveAttribute('alt', 'Pikachu sprite');
  });
  test('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL /pokemon/<id>, onde <id> é o id do Pokémon exibido;', () => {
    const { history } = renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: /more details/i });
    expect(linkDetails).toBeInTheDocument();
    userEvent.click(linkDetails);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemon/25');
  });
  test('Teste se existe um ícone de estrela nos Pokémon favoritados:', () => {
    renderWithRouter(<App />);
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    expect(detailsLink).toBeInTheDocument();
    userEvent.click(detailsLink);
    const favoriteCheck = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(favoriteCheck);
    const home = screen.getByRole('link', { name: /home/i });
    userEvent.click(home);
    const favMarked = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(favMarked).toHaveAttribute('src', '/star-icon.svg');
    expect(favMarked).toHaveAttribute('alt', 'Pikachu is marked as favorite');
    expect(favMarked).toBeDefined();
    expect(favMarked).toBeInTheDocument();
  });
});
