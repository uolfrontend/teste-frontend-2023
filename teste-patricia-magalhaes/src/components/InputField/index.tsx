import { ChangeEvent, InputHTMLAttributes } from "react";
import { Container } from "./styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  id?: string;
  label?: string;
  onBlur: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  type?: string;
  value?: string;
  $variant?: "normal" | "success" | "error" | "grey";
}

export const InputField = ({
  disabled = false,
  id,
  label = "Label do campo",
  onBlur,
  onChange,
  onFocus,
  type = "text",
  value,
  $variant = 'grey',
}: InputProps) => {
  return (
    <Container $variant={$variant} disabled={disabled}>
      <input
        disabled={disabled}
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        type={type}
        value={value}
      />
      {label && (
        <label
          className={`${value && "filled"} ${disabled && "disabled-label"}`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </Container>
  );
};
