import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoritePokemon from '../pages/FavoritePokemon';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <FavoritePokemon.js />', () => {
  test('Teste se a página contém as informações sobre a Pokédex;', async () => {
    render(<FavoritePokemon />);
    const headText = screen.getByText(/no favorite pokémon found/i);
    expect(headText).toBeInTheDocument();
    const { history } = renderWithRouter(<App />);
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);
    const favoriteCheck = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(favoriteCheck);
    act(() => {
      history.push('/favorites');
    });
    const pikachuImage = screen.getAllByRole('img');
    expect(pikachuImage).toHaveLength(2);
  });
});
