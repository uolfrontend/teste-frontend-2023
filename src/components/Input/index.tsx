import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  inputTitle?: string
  handleChangeValue: (value: string) => void
  hasResults?: boolean
  resultNotFound?: boolean
  disabled?: boolean
}

export function Input({
  inputTitle = 'Title',
  handleChangeValue,
  hasResults,
  resultNotFound,
  disabled,
}: IInput) {
  const [inputValue, setInputValue] = useState('')
  const [focused, setFocused] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
    handleChangeValue(e.target.value)
  }

  return (
    <S.Container
      $hasResults={hasResults}
      $resultNotFound={resultNotFound}
      $focused={focused}
    >
      <input
        value={inputValue}
        onChange={(e) => handleChange(e)}
        onBlur={() => setInputValue('')}
        disabled={disabled}
        onFocus={() => setFocused(true)}
      />
      <label>{inputTitle}</label>
    </S.Container>
  )
}
