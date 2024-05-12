import React, { useEffect, useState } from 'react'

import styles from './ModalCustom.module.scss'
import { createPortal } from 'react-dom'
interface IProps {
  open: boolean
  setOpen: (cmd: boolean) => void
}

function ModalCustom({ open, setOpen }: IProps) {
  const handleCloseModal = () => {
    console.log('close')
    setOpen(false)
  }

  const [test, setTest] = useState(false)

  console.log('test: ', test)

  return (
    <div>
      {createPortal(
        <div className={styles.modalRoot}>
          {open && <div className='modal-mask'></div>}
          <div className='modal-wrap' style={{ display: open ? 'block' : 'none' }}>
            <div className='modal'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <button className='closeButton' onClick={handleCloseModal}>
                    Close
                  </button>
                </div>

                <div className='modal-body'>
                  <button onClick={() => setTest((prev) => !prev)}>Test</button>
                </div>

                <div className='modal-footer'></div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

export default ModalCustom
