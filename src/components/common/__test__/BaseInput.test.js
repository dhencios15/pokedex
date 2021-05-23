import { render } from '@testing-library/react';

import BaseInput from '../BaseInput';

it('BaseInputRenderCheck', () => {
  const { queryByTitle } = render(<BaseInput />);
  const input = queryByTitle('baseInput');
  expect(input).toBeTruthy();
});
