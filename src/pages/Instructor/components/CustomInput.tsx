import React, { useState } from 'react'

import styles from './CustomInput.module.scss'

interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  maxLength?: number
  placeholder?: string
  className?: string
}

function CustomInput({ maxLength, className, ...rest }: IProps) {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (value: string) => {
    if (maxLength && value.length > maxLength) {
      return
    }

    setInputValue(value)
  }

  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      <input
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        type='text'
        className='input'
        {...rest}
      />
      {maxLength && <span className='charLength'>{maxLength - inputValue.length}</span>}
    </div>
  )
}

export default CustomInput
