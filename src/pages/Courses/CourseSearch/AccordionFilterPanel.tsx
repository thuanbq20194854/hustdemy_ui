import React, { ReactNode, useContext, useState } from 'react'

import { IoIosArrowDown } from 'react-icons/io'
import RatingContainer from '../../../components/RatingContainer/RatingContainer'

import { Checkbox, Form, Radio } from 'antd'
import useFormInstance from 'antd/es/form/hooks/useFormInstance'
import { LoadingContext } from '../../../contexts/loading.context'
interface IProps {
  // filterType: string
  filterTitle: string

  children: ReactNode
  className?: string
}

function AccordionFilterPanel({ children, filterTitle, className }: IProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleFilterContent = (e) => {
    e.preventDefault()
    setIsOpen((prev) => !prev)
  }

  const renderRadio = () => (
    <Form.Item name='rating'>
      <Radio.Group defaultValue={1}>
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
              <span className='label'>English</span>
              <div className='count'>(201)</div>
            </div>
          </Checkbox>
        </div>
        <div className='optionItem'>
          <Checkbox value={2}>
            <div className='checkboxContent'>
              <span className='label'>French</span>
              <div className='count'>(201)</div>
            </div>
          </Checkbox>
        </div>
      </Checkbox.Group>
    </Form.Item>
  )
  return (
    <div className={`accordionPanel ${className}`}>
      <button className='panelToggler ud-btn ud-btn-large ud-btn-link ud-heading-lg' onClick={toggleFilterContent}>
        <span>{filterTitle}</span>
        <IoIosArrowDown className={`arrowIcon ${isOpen && 'rotate'}`} />
      </button>

      <div className={`content`} style={{ display: isOpen ? '' : 'none' }}>
        {/* {filterType === 'radio' && renderRadio()}
        {filterType === 'checkbox' && renderCheckbox()} */}

        {children}
      </div>
    </div>
  )
}

export default AccordionFilterPanel
