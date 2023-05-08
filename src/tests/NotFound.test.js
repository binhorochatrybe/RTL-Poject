import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('Teste o componente <NotFound.js />', () => {
  test('Teste se a página contém um heading h2 com o texto Page requested not found;', () => {
    render(<NotFound />);
    const heading = screen.getByRole('heading', { name: /page requested not found/i });
    expect(heading).toBeInTheDocument();
  });
  test('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif.', () => {
    render(<NotFound />);
    const image = screen.getByRole('img', { src: 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif' });
    expect(image).toBeInTheDocument();
  });
});
