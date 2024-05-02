import { Modal, Select } from 'antd'
import styles from './ReportModal.module.scss'
import TextArea from 'antd/es/input/TextArea'
import { IoIosArrowDown } from 'react-icons/io'

interface IProps {
  onSubmit?: (...args: any[]) => any
  onCancle?: (...args: any[]) => any
  open: boolean

  id?: number

  handleCloseModal: () => void
}

function ReportModal({ onSubmit, onCancle, open, handleCloseModal }: IProps) {
  const handleCancle = () => {
    onCancle && onCancle()
  }
  const handleSubmit = () => {
    onSubmit && onSubmit()
  }

  return (
    <Modal open={open} rootClassName={styles.rootClassReportModal} onCancel={handleCloseModal}>
      <div className='title ud-heading-lg'>Report abuse</div>

      <form action='' className='reportForm'>
        <div className='reportIntroduction ud-text-md ud-text-with-links'>
          Flagged content is reviewed by Udemy staff to determine whether it violates Terms of Service or Community
          Guidelines. If you have a question or technical issue, please contact our
        </div>
        <div className='ud-form-group mb-16'>
          <div className='ud-form-label ud-heading-sm'>Issue type</div>
          {/* <Select rootClassName='rootClassSelect' /> */}

          <div className='ud-select-container ud-select-container-large'>
            <select className='ud-select ud-text-md'>
              <option value={-1} disabled>
                Select an issue
              </option>
              <option value='Inappropriate Course Content'>Inappropriate Course Content</option>
              <option value={'Inappropriate Behavior'}>Inappropriate Behavior</option>
              <option value={'Udemy Policy Violation'}>Udemy Policy Violation</option>
              <option value={'Spammy Content'}>Spammy Content</option>
              <option value={'Other'}>Other</option>
            </select>

            <div className='ud-select-icon-container ud-select-icon-right'>
              <IoIosArrowDown className='ud-icon ud-icon-small ud-icon-color-neutral' />
            </div>
          </div>
        </div>
        <div className='formGroup'>
          <div className='ud-form-label ud-heading-sm'>Issue details</div>
          <textarea
            spellCheck={false}
            aria-invalid='false'
            className='ud-text-input ud-text-area ud-text-md ud-text-are-large'
          />
        </div>
      </form>

      <div className='ud-footer-btns' style={{ textAlign: 'right' }}>
        <button className='ud-btn ud-btn-large ud-btn-ghost ud-heading-md' onClick={handleCancle}>
          <span>Cancle</span>
        </button>
        <button type='submit' className='ud-btn ud-btn-large ud-btn-primary ud-heading-md' onClick={handleSubmit}>
          <span>Submit</span>
        </button>
      </div>
    </Modal>
  )
}

export default ReportModal
