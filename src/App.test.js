import { render, screen, within } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.scrollTo = jest.fn();
});

test('shows business contact links instead of question and booking links', () => {
  render(<App />);
  const hero = within(screen.getAllByRole('group', { name: 'Business contact information' })[0]);

  const phoneLink = screen.getAllByRole('link', { name: 'Call +1 (573) 214-2000' })[0];
  const emailLink = screen.getAllByRole('link', { name: 'Email facialplasticsurgery@moentcenter.com' })[0];

  expect(phoneLink).toHaveAttribute('href', 'tel:+15732142000');
  expect(emailLink).toHaveAttribute('href', 'mailto:facialplasticsurgery@moentcenter.com');
  expect(hero.getByRole('link', { name: /call/i })).toHaveAttribute('href', 'tel:+15732142000');
  expect(hero.queryByRole('link', { name: /email/i })).not.toBeInTheDocument();
  expect(screen.queryByRole('link', { name: /ask a question/i })).not.toBeInTheDocument();
  expect(screen.queryByRole('link', { name: /book now/i })).not.toBeInTheDocument();
});
