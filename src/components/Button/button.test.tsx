import Button, { ButtonProps, ButtonSize, ButtonType } from './button';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

test('test first react case', () => {
  const wrapper = render(<Button>Nice</Button>);
  const element = wrapper.queryByText('Nice');
  expect(element).toBeTruthy();
});

const defaultProps = {
  onClick: jest.fn()
};
const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Small,
  className: 'custom',
};
// 目前Button的功能：1. 可以点击 2. 根据配置项生成不同的类名
describe('Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Click</Button>);
    const element = wrapper.getByText('Click');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toMatch('BUTTON');
    expect(element).toHaveClass('enjoy-ui-button enjoy-ui-button-default');
    // 触发事件
    fireEvent.click(element);
    expect(defaultProps.onClick).toBeCalled();
  });
  it('should render the correct component base on different props', () => {
    const wrapper = render(<Button {...testProps}>Click</Button>);
    const element = wrapper.getByText('Click');
    expect(element).toHaveClass('custom enjoy-ui-button enjoy-ui-button-primary enjoy-ui-button-sm')
  });
  it('should render a link when btnType equals link and href is provided', () => {

  });
  it('should render disabled button when disabled set to true', () => {

  });
});
