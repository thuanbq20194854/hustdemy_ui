import { Modal, ModalProps } from 'antd'
import React from 'react'

import styles from './CustomModal.module.scss'

interface IProps extends ModalProps {
  open: boolean
  onCancleModal: () => void
  onOkModal: () => void
  modalTitle: string
  modalMessage: string
}

function CustomModal(props: IProps) {
  return (
    <Modal
      title={<span className='ud-heading-lg'>Please confirm</span>}
      rootClassName={styles.rootClassNameModal}
      closable={true}
      onCancel={props.onCancleModal}
      onOk={props.onOkModal}
      open={props.open}
    >
      <p className='modalMessage'>You are about to remove a curriculum item. Are you sure you want to continue?</p>

      <div className='actionPart'>
        <button
          className='cancelBtn ud-btn ud-btn-large ud-btn-ghost ud-heading-md'
          onClick={() => {
            console.log('2 cancle')

            props.onCancleModal()
          }}
        >
          <span>Cancle</span>
        </button>
        <button
          className='okBtn ud-btn ud-btn-large ud-btn-primary ud-heading-md'
          onClick={() => {
            props.onOkModal()
          }}
        >
          <span>OK</span>
        </button>
      </div>
    </Modal>
  )
}

export default CustomModal
