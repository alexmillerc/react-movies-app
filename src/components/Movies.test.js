import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { MoviesList } from './MoviesList';

test('Renders Movies List', () => {
    render((props) => <MoviesList {...props} />);
    const linkElement = screen.getByText(/Filmes Populares/);
    expect(linkElement).toBeInTheDocument();
});
