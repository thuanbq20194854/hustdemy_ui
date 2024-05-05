import { Modal } from 'antd'
import styles from './GoToLoginModal.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'

interface IProps {
  open: boolean
  handleCommandModal: (cmd: boolean) => void
}

function GoToLoginModal({ open, handleCommandModal }: IProps) {
  const navigate = useNavigate()
  const handleYes = () => {
    console.log('OK')
    handleCommandModal(false)
  }

  const handleGoToLogin = () => {
    handleCommandModal(false)
    navigate('/login')
  }

  return (
    <Modal
      open={open}
      rootClassName={styles.rootClassModal}
      onCancel={() => handleCommandModal(false)}
      footer={
        <div className='ud-footer-btns'>
          <button className='ud-btn ud-btn-large ud-btn-primary ud-heading-md' onClick={handleYes}>
            <span>OK</span>
          </button>
        </div>
      }
    >
      <div className='contentContainer'>
        <div className='reviewContainer'>
          <h2 className='ud-heading-lg'>You must has an account before Teach On Hustdemy.</h2>
          <button className='toLoginLink' onClick={handleGoToLogin}>
            Back To Login
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default GoToLoginModal
