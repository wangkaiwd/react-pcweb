import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react';
import './button.scss';
import classnames from 'classnames';

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
  Normal = 'normal'
}

export enum ButtonType {
  Default = 'default',
  Primary = 'primary',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  size?: ButtonSize,
  btnType?: ButtonType,
}

// 这里ButtonHTMLAttributes中传入的泛型参数具体作用？
type NativeButtonProps = ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = AnchorHTMLAttributes<HTMLElement>
// Intersection Types
// Global Utility Types: Partial<T>, Constructs a type with all properties of T set to optional.
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps & BaseButtonProps>
const uiPrefix = 'enjoy-ui';
const clsPre = `${uiPrefix}-button`;
const Button: FC<ButtonProps> = (props) => {
  const {
    btnType = ButtonType.Default,
    children,
    className,
    size = ButtonSize.Normal,
    disabled = false,
    ...rest
  } = props;
  const cls = classnames(className, clsPre, {
    [`${clsPre}-${btnType}`]: btnType,
    [`${clsPre}-${size}`]: size,
    disabled,
  });
  if (btnType === ButtonType.Link) {
    return <a className={cls} {...rest}>{children}</a>;
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
};

export default Button;
