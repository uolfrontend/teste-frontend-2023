import { Container } from "./styles";

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  size?: "lg" | "md" | "sm";
  title?: string;
  variant?: "primary" | "secondary";
}

export const Button = ({
  disabled = false,
  onClick,
  size = "md",
  title = "Label do botão",
  variant = "primary",
}: ButtonProps) => {
  return (
    <Container variant={variant} size={size} disabled={disabled}>
      <button onClick={onClick}>{title}</button>
    </Container>
  );
};
