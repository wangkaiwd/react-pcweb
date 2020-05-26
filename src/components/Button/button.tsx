import React, { FC, HTMLAttributes } from 'react';
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

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize,
  btnType?: ButtonType,
  href?: string,
  disabled?: boolean,
}

const uiPrefix = 'enjoy-ui';
const clsPre = `${uiPrefix}-button`;
const Button: FC<ButtonProps> = (props) => {
  const {
    btnType = ButtonType.Default,
    href,
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
    return <a className={cls} href={href}>{children}</a>;
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
};

export default Button;
