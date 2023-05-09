import React from 'react';

import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  test('Teste se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);
    const heading = screen.getByRole('heading', { name: /encountered pokémon/i });
    expect(heading).toBeInTheDocument();
  });
  test('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado / O botão deve conter o texto Próximo Pokémo', () => {
    renderWithRouter(<App />);
    const button = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(button).toBeInTheDocument();
  });
  test('Os próximos Pokémon da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão', () => {
    renderWithRouter(<App />);
    const button = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(button);
    const image2 = screen.getByRole('img', { name: /charmander sprite/i });
    expect(image2).toBeInTheDocument();
    const pokemon2Name = screen.getByText(/charmander/i);
    expect(pokemon2Name).toBeInTheDocument();
    userEvent.click(button);
    const image3 = screen.getByRole('img', { name: /caterpie sprite/i });
    expect(image3).toBeInTheDocument();
    const pokemon3Name = screen.getByText(/caterpie/i);
    expect(pokemon3Name).toBeInTheDocument();
    userEvent.click(button);
    const image4 = screen.getByRole('img', { name: /ekans sprite/i });
    expect(image4).toBeInTheDocument();
    const pokemon4Name = screen.getByText(/ekans/i);
    expect(pokemon4Name).toBeInTheDocument();
    userEvent.click(button);
    const image5 = screen.getByRole('img', { name: /alakazam sprite/i });
    expect(image5).toBeInTheDocument();
    const pokemon5Name = screen.getByText(/alakazam/i);
    expect(pokemon5Name).toBeInTheDocument();
    userEvent.click(button);
    const image6 = screen.getByRole('img', { name: /mew sprite/i });
    expect(image6).toBeInTheDocument();
    const pokemon6Name = screen.getByText(/mew/i);
    expect(pokemon6Name).toBeInTheDocument();
    userEvent.click(button);
    const image7 = screen.getByRole('img', { name: /rapidash sprite/i });
    expect(image7).toBeInTheDocument();
    const pokemon7Name = screen.getByText(/rapidash/i);
    expect(pokemon7Name).toBeInTheDocument();
    userEvent.click(button);
    const image8 = screen.getByRole('img', { name: /snorlax sprite/i });
    expect(image8).toBeInTheDocument();
    const pokemon8Name = screen.getByText(/snorlax/i);
    expect(pokemon8Name).toBeInTheDocument();
    userEvent.click(button);
    const image9 = screen.getByRole('img', { name: /dragonair sprite/i });
    expect(image9).toBeInTheDocument();
    const pokemon9Name = screen.getByText(/dragonair/i);
    expect(pokemon9Name).toBeInTheDocument();
    userEvent.click(button);
    const image1 = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(image1).toBeInTheDocument();
    const pokemon1Name = screen.getByText(/pikachu/i);
    expect(pokemon1Name).toBeInTheDocument();
  });
  test('Teste se é mostrado apenas um Pokémon por vez;', () => {
    renderWithRouter(<App />);
    const pokemon = screen.getAllByRole('img');
    expect(pokemon).toHaveLength(1);
  });
  test('Deve existir um botão de filtragem para cada tipo de Pokémon, sem repetição', () => {
    renderWithRouter(<App />);
    const buttonsType = screen.getAllByTestId('pokemon-type-button');
    const textButtonsType = buttonsType.map(({ innerHTML }) => innerHTML);
    expect(textButtonsType).toEqual(['Electric', 'Fire',
      'Bug', 'Poison',
      'Psychic', 'Normal',
      'Dragon']);
  });
  test('A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos Pokémon daquele tipo', () => {
    renderWithRouter(<App />);
    const buttonType = screen.getByRole('button', { name: /electric/i });
    userEvent.click(buttonType);
    const texttype = screen.getByTestId('pokemon-type').innerHTML;
    expect(buttonType.innerHTML).toBe(texttype);
  });
  test('O botão All precisa estar sempre visível', () => {
    renderWithRouter(<App />);
    const btnAll = screen.getByRole('button', { name: /all/i });
    expect(btnAll).toBeVisible();
  });
  test('Teste se a Pokédex contém um botão para resetar o filtro / O texto do botão deve ser All;', () => {
    renderWithRouter(<App />);
    const btnAllText = screen.getByRole('button', { name: /all/i }).innerHTML;
    expect(btnAllText).toBe('All');
  });
  test('A Pokedéx deverá mostrar os Pokémon normalmente (sem filtros) quando o botão All for clicado', () => {
    renderWithRouter(<App />);
    const btnAll = screen.getByRole('button', { name: /all/i });
    userEvent.click(btnAll);
    const button = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(button);
    const image2 = screen.getByRole('img', { name: /charmander sprite/i });
    expect(image2).toBeInTheDocument();
    const pokemon2Name = screen.getByText(/charmander/i);
    expect(pokemon2Name).toBeInTheDocument();
  });
});
