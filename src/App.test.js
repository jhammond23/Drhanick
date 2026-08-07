import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.scrollTo = jest.fn();
});

test('shows business contact links instead of question and booking links', () => {
  render(<App />);

  const phoneLink = screen.getAllByText('+1 (573) 214-2000')[0].closest('a');
  const emailLink = screen.getAllByText('facialplasticsurgery@moentcenter.com')[0].closest('a');

  expect(phoneLink).toHaveAttribute('href', 'tel:+15732142000');
  expect(emailLink).toHaveAttribute('href', 'mailto:facialplasticsurgery@moentcenter.com');
  expect(screen.queryByRole('link', { name: /ask a question/i })).not.toBeInTheDocument();
  expect(screen.queryByRole('link', { name: /book now/i })).not.toBeInTheDocument();
});
