import { ReactNode, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import styles from './AccordionFilterPanel.module.scss'

interface IProps {
  // filterType: string
  title: ReactNode

  children: ReactNode
  className?: string
}

function AccordionFilterPanel({ children, title, className }: IProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleFilterContent = (e) => {
    e.preventDefault()
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={`${styles.accordionPanel} ${className}`}>
      <button className='panelToggler ud-btn ud-btn-large ud-btn-link ud-heading-lg' onClick={toggleFilterContent}>
        <span className='ellipse-2-rows'>{title}</span>
        <IoIosArrowDown className={`arrowIcon ${isOpen && 'rotate'}`} />
      </button>

      <div className={`content`} style={{ display: isOpen ? '' : 'none' }}>
        {children}
      </div>
    </div>
  )
}

export default AccordionFilterPanel
