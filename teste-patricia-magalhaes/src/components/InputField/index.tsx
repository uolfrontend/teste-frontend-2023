import { ChangeEvent, InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  id?: string;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value?: string;
  $variant?: "normal" | "success" | "error";
}

export const InputField = ({
  disabled = false,
  id,
  label = "Label do campo",
  onChange,
  type = "text",
  value,
  $variant = "normal",
}: InputProps) => {
  return (
    <Container $variant={$variant}>
      <input
        disabled={disabled}
        id={id}
        onChange={onChange}
        type={type}
        value={value}
      />
      {label && (
        <label
          className={`${value && "filled"} ${disabled && "disabled-label"}`}
        >
          {label}
        </label>
      )}
    </Container>
  );
};
