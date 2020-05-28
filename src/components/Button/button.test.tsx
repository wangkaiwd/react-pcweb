import Button, { ButtonProps, ButtonSize, ButtonType } from './button';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

const defaultProps = {
  onClick: jest.fn()
};
const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Small,
  className: 'custom',
};
const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
};
// 目前Button的功能：1. 可以点击 2. 根据配置项生成不同的类名
const clsPre = 'enjoy-button';
describe('Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Click</Button>);
    const element = wrapper.getByText('Click');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toMatch('BUTTON');
    expect(element).toHaveClass(`${clsPre} ${clsPre}-default`);
    // 触发事件
    fireEvent.click(element);
    expect(defaultProps.onClick).toBeCalled();
  });
  it('should render the correct component base on different props', () => {
    const wrapper = render(<Button {...testProps}>Click</Button>);
    const element = wrapper.getByText('Click');
    expect(element).toHaveClass(`custom ${clsPre} ${clsPre}-primary ${clsPre}-sm`);
  });
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType={ButtonType.Link} href={'https://www.baidu.com'}>Click</Button>);
    // queryBy可以用来测试元素不存在，会返回null
    // getBy 如果不存在会直接抛出异常
    const element = wrapper.getByText('Click');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toMatch('A');
    expect(element).toHaveClass(`${clsPre}-link`);
  });
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Click</Button>);
    const element = wrapper.getByText('Click') as HTMLButtonElement;
    fireEvent.click(element);
    expect(disabledProps.onClick).toBeCalled();
    expect(element.disabled);
    expect(element).toHaveClass('disabled');
  });
});
