import { Modal, Rate } from 'antd'
import styles from './YourReviewModal.module.scss'
import { useBoolean } from '@/hooks/useBoolean'
import DeleteReviewModal from './DeleteReviewModal'

interface IProps {
  open: boolean
  handleCommandModal: (cmd: boolean) => void
  handleCommandRatingModal: (cmd: boolean) => void
}

function YourReviewModal({ open, handleCommandModal, handleCommandRatingModal }: IProps) {
  // Rating Data from Parent/Context

  const hasWriteReview = true

  const review = ' Very good lecture'

  const handleBackToYourReviewModal = () => {
    handleCommandModal(true)
  }

  const handleOpenDeleteReview = () => {
    handleCommandModal(false)
    handleCmdDeleteModal(true)
  }

  const handleEditReview = () => {
    handleCommandModal(false)

    handleCommandRatingModal(true)
  }
  const [openDeleteModal, handleCmdDeleteModal] = useBoolean()

  return (
    <>
      <Modal
        open={open}
        rootClassName={styles.rootClassModal}
        onCancel={() => handleCommandModal(false)}
        title={<h2 className='ud-heading-lg'>Your Review</h2>}
        footer={
          <div className='ud-footer-btns'>
            <button className='ud-btn ud-btn-large ud-btn-ghost ud-heading-md' onClick={handleOpenDeleteReview}>
              <span>Delete</span>
            </button>

            <button className='ud-btn ud-btn-large ud-btn-primary ud-heading-md' onClick={handleEditReview}>
              <span>Edit Review</span>
            </button>
          </div>
        }
      >
        <div className='contentContainer'>
          <div className='rateContainer'>
            <Rate value={5} disabled={true} />
          </div>

          <div className='reviewContainer'>
            {hasWriteReview ? review : 'There are no written comments for your review.'}
          </div>
        </div>
      </Modal>

      <DeleteReviewModal
        open={openDeleteModal}
        handleCommandModal={handleCmdDeleteModal}
        handleBackToYourReviewModal={handleBackToYourReviewModal}
      />
    </>
  )
}

export default YourReviewModal
