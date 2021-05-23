import { render } from '@testing-library/react';

import BaseButton from '../BaseButton';

it('BaseButtonRenderCheck', () => {
  const { queryByTitle } = render(<BaseButton />);
  const btn = queryByTitle('baseButton');
  expect(btn).toBeTruthy();
});
