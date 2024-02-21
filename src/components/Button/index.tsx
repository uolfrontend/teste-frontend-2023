import { ButtonHTMLAttributes } from 'react';
import * as S from './styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large';
  label?: string;
  color: string;
  border?: string;
  background: string;
  hoverActive?: string;
  colorHover?: string;
  onClick: () => void;
}

export const Button = ({
  background,
  color,
  label,
  size,
  border,
  hoverActive,
  colorHover,
  onClick
}: ButtonProps) => {
  return (
    <div>
      <S.Button
        $background={background}
        color={color}
        $border={border}
        size={size}
        $hoverActive={hoverActive}
        $colorHover={colorHover}
        onClick={onClick}
      >
        {label}
      </S.Button>
    </div>
  );
};
