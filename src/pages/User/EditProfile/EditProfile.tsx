import { useForm } from 'react-hook-form'
import { MdKeyboardArrowDown } from 'react-icons/md'
import TextEditor from '../../../components/TextEditor/TextEditor'
import styles from './EditProfile.module.scss'

const toolBarCustom = [['bold', 'italic']]

const languagesOptions = [
  {
    value: 1,
    label: 'English'
  },
  {
    value: 2,
    label: 'France'
  },
  {
    value: 3,
    label: 'Vietnamese'
  },
  {
    value: 4,
    label: 'German'
  }
]

function EditProfile() {
  const {} = useForm({
    defaultValues: {}

    // resolver : yupResolver()
  })
  return (
    <div className={styles.editProfileWrapper}>
      <div className='contentHeader'>
        <div className='inner'>
          <h1 className='ud-heading-xl'>Public profile</h1>

          <p className='mt-8px ud-text-md'>Add information about yourself</p>
        </div>
      </div>

      <div className='contentBody'>
        <form action=''>
          <div className='formInnerContainer'>
            <div className='um-section'>
              <div className='ud-form-group'>
                <legend className='ud-form-label ud-heading-sm'>Basics:</legend>

                <div className='ud-form-group'>
                  <input type='text' className='ud-text-input ud-text-input-large ud-text-md' />
                </div>
                <div className='ud-form-group'>
                  <input type='text' className='ud-text-input ud-text-input-large ud-text-md' />
                </div>
                <div className='ud-form-group'>
                  <div className='ud-text-input-container'>
                    <input type='text' className='ud-text-input ud-text-input-large ud-text-md' />

                    <div className='text-input-with-counter-module--counter'>60</div>
                    <div className='ud-text-input-box'></div>
                  </div>

                  <div className='ud-form-note ud-text-xs'>
                    Add a professional headline like, "Instructor at Udemy" or "Architect."
                  </div>
                </div>
                <div className='ud-form-group'>
                  <TextEditor customToolBar={toolBarCustom} defaultValue='' />
                  <div className='ud-form-note ud-text-xs'>
                    Links and coupon codes are not permitted in this section.
                  </div>
                </div>
                <div className='ud-form-group'>
                  <div className='ud-select-container ud-select-container-large'>
                    <select name='' id='' className='ud-select ud-text-md' defaultValue={-1}>
                      <option value={-1} key={-1}>
                        --Select Language--
                      </option>

                      {languagesOptions.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>

                    <MdKeyboardArrowDown className='ud-select-icon-container ud-select-icon-right' />
                  </div>
                </div>
              </div>
            </div>

            <div className='um-section'>
              <legend className='ud-form-label ud-heading-sm'>Links:</legend>
              <div className='ud-form-group'>
                <input type='text' className='ud-text-input ud-text-input-large ud-text-md' />
              </div>

              <div className='ud-form-group'>
                <div className='text-input-with-addons--with-addons'>
                  <div className='ud-text-input-container'>
                    <div className='text-input-with-addons--addon'>http://twitter.com/</div>
                    <input type='text' className='ud-text-input ud-text-input-large ud-text-md' />

                    <div className='ud-text-input-box'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfile
