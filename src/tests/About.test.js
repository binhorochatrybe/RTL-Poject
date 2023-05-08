import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('Teste o componente <About.js />.', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex;', () => {
    render(<About />);
    const headText = screen.getByRole('heading', { name: /about pokédex/i });
    expect(headText).toBeInTheDocument();
  });
  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
    render(<About />);
    const info1 = screen.getByText(/this application simulates a pokédex, a digital encyclopedia containing all pokémon/i);
    const info2 = screen.getByText(/one can filter pokémon by type, and see more details for each one of them/i);
    expect(info1).toBeInTheDocument();
    expect(info2).toBeInTheDocument();
  });
  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
    render(<About />);
    const image = screen.getByRole('img', { src: 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png' });
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    expect(image).toBeInTheDocument();
  });
});
