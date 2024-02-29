import React, { useState } from 'react'

import { IoIosArrowDown } from 'react-icons/io'
import RatingContainer from '../../../components/RatingContainer/RatingContainer'

import { Checkbox, Form, FormInstance, Radio } from 'antd'
import useFormInstance from 'antd/es/form/hooks/useFormInstance'
interface IProps {
  filterType: string
  filterTitle: string
  form: FormInstance<any>
}

const ratings = [
  {
    value: '1',
    label: 'English'
  },
  {
    value: '2',
    label: 'French'
  },
  {
    value: '3',
    label: 'Vietnam'
  }
]

function AccordionFilterPanel({ filterType, filterTitle, form }: IProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleFilterContent = (e) => {
    e.preventDefault()
    setIsOpen((prev) => !prev)
  }

  const handleRadioChange = (value: string) => {
    form.setFieldValue('radion', value)
  }

  const renderRadio = () => (
    <Form.Item name='rating'>
      <Radio.Group defaultValue={1} onChange={(value) => handleRadioChange(value.target.value)}>
        <div className='optionItem'>
          <Radio value={1}>
            <div className='radioContent'>
              <RatingContainer averageReview={4.5} showNumber={false} />
              <span className='label'>4.5 & up</span>
              <div className='count'>(201)</div>
            </div>
          </Radio>
        </div>

        <div className='optionItem'>
          <Radio value={2}>
            <div className='radioContent'>
              <RatingContainer averageReview={4.5} showNumber={false} />
              <span className='label'>4.5 & up</span>
              <div className='count'>(201)</div>
            </div>
          </Radio>
        </div>
      </Radio.Group>
    </Form.Item>
  )

  const renderCheckbox = () => (
    <Form.Item name={'language'}>
      <Checkbox.Group>
        <div className='optionItem'>
          <Checkbox value={1}>
            <div className='checkboxContent'>
              <RatingContainer averageReview={4.5} showNumber={false} />
              <span className='label'>English</span>
              <div className='count'>(201)</div>
            </div>
          </Checkbox>
        </div>
        <div className='optionItem'>
          <Checkbox value={2}>
            <div className='checkboxContent'>
              <RatingContainer averageReview={4.5} showNumber={false} />
              <span className='label'>French</span>
              <div className='count'>(201)</div>
            </div>
          </Checkbox>
        </div>
      </Checkbox.Group>
    </Form.Item>
  )
  return (
    <div className='accordionPanel'>
      <button className='panelToggler ud-btn ud-btn-large ud-btn-link ud-heading-lg' onClick={toggleFilterContent}>
        <span>{filterTitle}</span>
        <IoIosArrowDown />
      </button>

      <div className={`content`} style={{ display: isOpen ? '' : 'none' }}>
        {filterType === 'radio' && renderRadio()}
        {filterType === 'checkbox' && renderCheckbox()}
      </div>
    </div>
  )
}

export default AccordionFilterPanel
