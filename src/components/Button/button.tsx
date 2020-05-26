import React, { FC, HTMLAttributes } from 'react';
import classnames from 'classnames';

enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Default = 'default',
  Primary = 'primary',
  Danger = 'danger',
  Link = 'link'
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLLinkElement> {
  size?: ButtonSize,
  btnType?: ButtonType,
  href?: string
}

// enjoy-ui-button, enjoy-ui-button-lg, ...
const Button: FC<ButtonProps> = (props) => {
  const { btnType = ButtonType.Default, href, children, className } = props;
  const cls = classnames(className, 'enjoy-ui-button', {
    [`enjoy-ui-button-${btnType}`]: btnType
  });
  if (btnType === ButtonType.Link) {
    return <a className={cls} href={href}>{children}</a>;
  }
  return (
    <button className={cls}>
      {children}
    </button>
  );
};

export default Button;
