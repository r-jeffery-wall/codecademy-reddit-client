import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { getPopularSubs } from './features/PopularSubs/PopularSubsSlice';
import { getPostsforSub } from './features/posts/PostsSlice';

test('renders header.', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/ReadOnlyReddit/i)).toBeInTheDocument();
});
