import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

interface IProps {
  options: {
    label: string
    value: string
  }[]
}

function CustomSelect({ options }: IProps) {
  return (
    <div className='ud-select-container ud-select-container-large'>
      <select
        required
        aria-invalid='false'
        title='Locale'
        name='locale'
        id='form-group--15'
        className='ud-select ud-text-md'
      >
        {options.map((optionItem: { label: string; value: string }) => (
          <option key={optionItem.value}>{optionItem.label}</option>
        ))}
      </select>
      <div className='ud-select-icon-container ud-select-icon-right'>
        <IoIosArrowDown aria-hidden='true' focusable='false' className='ud-icon ud-icon-small ud-icon-color-neutral' />
      </div>
    </div>
  )
}

export default CustomSelect
