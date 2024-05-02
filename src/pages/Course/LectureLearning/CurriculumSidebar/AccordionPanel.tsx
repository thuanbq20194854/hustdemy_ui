import { ReactNode, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import styles from './AccordionPanel.module.scss'

interface IProps {
  // filterType: string
  title: ReactNode

  children: ReactNode
  className?: string
}

function AccordionFilterPanel({ children, title, className }: IProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleFilterContent = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evt.preventDefault()
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={`${styles.accordionPanel} ${className}`}>
      <div className='panelHeader' onClick={toggleFilterContent}>
        <button className='ud-btn ud-btn-large ud-btn-link ud-heading-md'>
          <div className='flex'>
            <p className='title'>{title}</p>
            <IoIosArrowDown size={20} className={`arrowIcon ${isOpen && 'rotate'}`} />
          </div>
        </button>
        <div className='ud-text-xs section--progress'>
          <span>1 / 3 | 3min</span>
        </div>
      </div>

      <div className={`content`} style={{ display: isOpen ? '' : 'none' }}>
        {children}
      </div>
    </div>
  )
}

export default AccordionFilterPanel
