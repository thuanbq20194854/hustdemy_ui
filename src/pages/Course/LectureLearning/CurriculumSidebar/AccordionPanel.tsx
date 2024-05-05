import { ReactNode, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import styles from './AccordionPanel.module.scss'

interface IProps {
  // filterType: string
  title: ReactNode

  children: ReactNode
  className?: string

  totalLecture: number
  completedLecture: number
}

function AccordionFilterPanel({ children, title, className, totalLecture, completedLecture }: IProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleFilterContent = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evt.preventDefault()
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={`${styles.accordionPanel} ${className}`}>
      <div className='panelHeader' onClick={toggleFilterContent}>
        <button className='ud-btn ud-btn-large ud-btn-link ud-heading-md'>
          <p className='title'>{title}</p>
          <IoIosArrowDown size={20} className={`arrowIcon ${isOpen && 'rotate'}`} />
        </button>
        <div className='ud-text-xs section--progress'>
          <span>{`${completedLecture} / ${totalLecture} | 3min`}</span>
        </div>
      </div>

      <div className={`content`} style={{ display: isOpen ? '' : 'none' }}>
        {children}
      </div>
    </div>
  )
}

export default AccordionFilterPanel
