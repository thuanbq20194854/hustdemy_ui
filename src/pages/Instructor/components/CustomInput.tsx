import React, { useState } from 'react'

import styles from './CustomInput.module.scss'

interface IProps {
  maxLength?: number
  placeholder?: string
}

function CustomInput({ maxLength, placeholder }: IProps) {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (value: string) => {
    if (maxLength && value.length > maxLength) {
      return
    }

    setInputValue(value)
  }

  return (
    <div className={styles.inputWrapper}>
      <input
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        type='text'
        className='input'
        placeholder={placeholder && placeholder}
      />
      {maxLength && <span className='charLength'>{maxLength - inputValue.length}</span>}
    </div>
  )
}

export default CustomInput
