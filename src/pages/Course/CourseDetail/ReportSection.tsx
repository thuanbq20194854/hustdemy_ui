import ReportModal from '@/components/ReportModal/ReportModal'
import { useBoolean } from '../../../hooks/useBoolean'
import styles from './ReportSection.module.scss'

function ReportSection() {
  const [isOpenModal, , handleOpenModal, handleCloseModal] = useBoolean()

  const handleCancle = () => {
    handleCloseModal()
  }

  const handleSubmit = () => {
    handleCloseModal()
  }

  return (
    <div className={styles.reportCourseSection}>
      <button className='reportBtn ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm' onClick={handleOpenModal}>
        Report abuse
      </button>

      <ReportModal
        open={isOpenModal}
        onCancle={handleCancle}
        onSubmit={handleSubmit}
        handleCloseModal={handleCloseModal}
      />
    </div>
  )
}

export default ReportSection
