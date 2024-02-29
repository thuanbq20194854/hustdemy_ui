import React, { useContext, useState } from 'react'

import { IoIosArrowDown } from 'react-icons/io'
import RatingContainer from '../../../components/RatingContainer/RatingContainer'

import { Checkbox, Form, Radio } from 'antd'
import useFormInstance from 'antd/es/form/hooks/useFormInstance'
import { LoadingContext } from '../../../contexts/loading.context'
interface IProps {
  filterType: string
  filterTitle: string
}

function AccordionFilterPanel({ filterType, filterTitle }: IProps) {
  const { showLoading, closeLoading } = useContext(LoadingContext)
  const { setFieldValue, getFieldsValue } = useFormInstance()
  const [isOpen, setIsOpen] = useState(false)

  const toggleFilterContent = (e) => {
    e.preventDefault()
    setIsOpen((prev) => !prev)
  }

  const handleRadioChange = (value: any) => {
    setFieldValue('radion', value)
    // Loading Modal ngăn tạo thêm filter + Call API

    showLoading()

    setTimeout(() => {
      closeLoading()
    }, 2000)

    console.log('form: ', getFieldsValue())
  }

  const handleCheckboxChange = (value: any) => {
    setFieldValue('checkbox', value)
    // Loading Modal ngăn tạo thêm filter + Call API

    showLoading()

    setTimeout(() => {
      closeLoading()
    }, 2000)

    console.log('form: ', getFieldsValue())
  }

  const renderRadio = () => (
    <Form.Item name='rating'>
      <Radio.Group defaultValue={1} onChange={(e) => handleRadioChange(e.target.value)}>
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
      <Checkbox.Group onChange={(value) => handleCheckboxChange(value)}>
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
