import React, { useRef, useState } from 'react'

import styles from './CustomInput.module.scss'

interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  maxLength?: number
  placeholder?: string
  className?: string
}

function CustomInput({ className, ...rest }: IProps) {
  const [inputContent, setInputContent] = useState<string>('')
  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      <input
        type='text'
        className={`input`}
        {...rest}
        onChange={(e) => {
          setInputContent(e.target.value)
        }}
      />
      {/* {maxLength && <span className='charLength'>{maxLength - inputRef.current.value.length}</span>} */}
    </div>
  )
}

export default CustomInput
