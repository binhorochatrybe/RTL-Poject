import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('Teste o componente <About.js />.', () => {
  test('Teste se a página contém as informações sobre a Pokédex;', () => {
    render(<About />);
    const headText = screen.getByRole('heading', { name: /about pokédex/i });
    const info1 = screen.getByText(/this application simulates a pokédex, a digital encyclopedia containing all pokémon/i);
    const info2 = screen.getByText(/one can filter pokémon by type, and see more details for each one of them/i);
    const image = screen.getByRole('img', { name: /pokédex/i });
    expect(headText).toBeInTheDocument();
    expect(info1).toBeInTheDocument();
    expect(info2).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
