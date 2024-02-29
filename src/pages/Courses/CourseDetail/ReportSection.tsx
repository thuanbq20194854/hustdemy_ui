import { Modal, Select } from 'antd'
import { useBoolean } from '../../../hooks/useBoolean'
import styles from './ReportSection.module.scss'
import TextArea from 'antd/es/input/TextArea'
function ReportSection() {
  const [isOpenModal, handleOpenModal, handleCloseModal] = useBoolean()
  return (
    <div className={styles.reportCourseSection}>
      <button className='reportBtn ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm' onClick={handleOpenModal}>
        Report abuse
      </button>

      <Modal open={isOpenModal} rootClassName={styles.rootClassReportModal} onCancel={handleCloseModal}>
        <div className='title ud-heading-lg'>Report abuse</div>

        <form action='' className='reportForm'>
          <div className='reportIntroduction ud-text-md ud-text-with-links'>
            Flagged content is reviewed by Udemy staff to determine whether it violates Terms of Service or Community
            Guidelines. If you have a question or technical issue, please contact our
          </div>
          <div className='formGroup'>
            <div className='label ud-heading-sm'>Issue type</div>
            <Select rootClassName='rootClassSelect' />
          </div>
          <div className='formGroup'>
            <div className='label ud-heading-sm'>Issue details</div>
            <TextArea rootClassName='rootClassTextArea' />
          </div>
        </form>

        <div className='actions'>
          <button className='cancleBtn ud-btn ud-btn-large ud-btn-ghost ud-heading-md' onClick={handleCloseModal}>
            <span>Cancle</span>
          </button>
          <button type='submit' className='submitBtn ud-btn ud-btn-large ud-btn-primary ud-heading-md'>
            <span>Submit</span>
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default ReportSection
