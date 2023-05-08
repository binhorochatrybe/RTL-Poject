import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('Teste o componente <About.js />.', () => {
  test('Teste se a página contém as informações sobre a Pokédex;', () => {
    render(<NotFound />);
    const heading = screen.getByRole('heading', { name: /page requested not found/i });
    const image = screen.getByRole('img', { src: 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif' });
    expect(image).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
});
