import { Modal, Rate } from 'antd'
import styles from './DeleteReviewModal.module.scss'
import { useBoolean } from '@/hooks/useBoolean'

interface IProps {
  open: boolean
  handleCommandModal: (cmd: boolean) => void
  handleBackToYourReviewModal: () => void
}

function DeleteReviewModal({ open, handleCommandModal, handleBackToYourReviewModal }: IProps) {
  // Rating Data from Parent/Context

  const handleCancle = () => {
    handleCommandModal(false)
    handleBackToYourReviewModal()
  }

  const handleYes = () => {
    // API
    handleCommandModal(false)
  }

  return (
    <Modal
      open={open}
      rootClassName={styles.rootClassModal}
      onCancel={() => handleCommandModal(false)}
      title={<h2 className='ud-heading-lg'>Delete Your Review?</h2>}
      footer={
        <div className='ud-footer-btns'>
          <button className='ud-btn ud-btn-large ud-btn-ghost ud-heading-md' onClick={handleCancle}>
            <span>Cancle</span>
          </button>

          <button className='ud-btn ud-btn-large ud-btn-primary ud-heading-md' onClick={handleYes}>
            <span>Yes, Delete My Review</span>
          </button>
        </div>
      }
    >
      <div className='contentContainer'>
        <div className='reviewContainer'>Are you sure you want to delete your review?</div>
      </div>
    </Modal>
  )
}

export default DeleteReviewModal
