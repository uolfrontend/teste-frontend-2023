import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  buttonType?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  handleClick?: (e: any) => void;
  type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<ButtonProps> = ({
  children = 'label do botão',
  buttonType = 'primary',
  size = 'medium',
  disabled = false,
  handleClick,
  type = 'button',
  ...props
}) => {
  return (
    <S.ButtonBody
      {...props}
      onClick={(e) => handleClick && handleClick(e)}
      disabled={disabled}
      $buttonType={buttonType}
      $buttonSize={size}
      name="button"
      aria-label="button"
      type={type}
    >
      {children ? children : 'No label found'}
    </S.ButtonBody>
  );
};

function arePropsEqual(prevProps: ButtonProps, nextProps: ButtonProps) {
  return (
    prevProps.children === nextProps.children &&
    prevProps.size === nextProps.size &&
    prevProps.buttonType === nextProps.buttonType &&
    prevProps.disabled === nextProps.disabled
  );
}

export default React.memo(Button, arePropsEqual);
