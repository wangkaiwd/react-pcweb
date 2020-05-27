import Button from './button';
import React from 'react';
import { render } from '@testing-library/react';

test('test first react case', () => {
  const wrapper = render(<Button>Nice</Button>);
  const element = wrapper.queryByText('Nice');
  expect(element).toBeTruthy();
});
