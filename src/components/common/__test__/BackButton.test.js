import { render } from '@testing-library/react';

import BackButton from '../BackButton';

it('BackButtonRenderCheck', () => {
  const { queryByTitle } = render(<BackButton />);
  const btn = queryByTitle('backButton');
  expect(btn).toBeTruthy();
});
