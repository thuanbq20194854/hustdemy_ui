import { useForm } from 'react-hook-form'
import { MdKeyboardArrowDown } from 'react-icons/md'
import TextEditor from '../../../components/TextEditor/TextEditor'
import { UpdateProfileForm } from '../../../models/auth'
import { useAppDispatch, useAppSelector } from '../../../services/state/redux/store'
import styles from './EditProfile.module.scss'
import { schemaUpdateProfile } from '../../../validators/auth'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'

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
  const { user } = useAppSelector((state) => state.auth)

  const dispatch = useAppDispatch()

  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    setValue
  } = useForm<UpdateProfileForm>({
    defaultValues: {
      name: user?.name ?? '',
      headline: user?.headline ?? '',
      biography: user?.biography ?? '',
      twitter_url: user?.twitter_url ?? '',
      facebook_url: user?.twitter_url ?? '',
      linkedin_url: user?.twitter_url ?? '',
      youtube_url: user?.twitter_url ?? '',
      website_url: user?.twitter_url ?? ''
    },
    resolver: yupResolver(schemaUpdateProfile)
  })

  const handleHTMLChange = (html: string) => {
    setValue('biography', html)
  }
  const handleSubmitForm = (formData: UpdateProfileForm) => {
    console.log('formData:', formData)

    // 1. API Call

    // 2. Set Slice User with  API response
  }

  return (
    <div className={styles.editProfileWrapper}>
      <div className='contentHeader'>
        <div className='inner'>
          <h1 className='ud-heading-xl'>Public profile</h1>

          <p className='mt-8px ud-text-md'>Add information about yourself</p>
        </div>
      </div>

      <div className='contentBody'>
        <form action='' onSubmit={handleSubmit(handleSubmitForm)}>
          <div className='formInnerContainer'>
            <div className='um-section'>
              <div className='ud-form-group'>
                <legend className='ud-form-label ud-heading-sm'>Basics:</legend>

                <div className='ud-form-group'>
                  <input
                    type='text'
                    className='ud-text-input ud-text-input-large ud-text-md'
                    placeholder='Name'
                    {...register('name')}
                  />
                  {<div className='ud-form-note-validate-14'>{errors.name ? errors.name.message : ''}</div>}
                </div>
                {/* <div className='ud-form-group'>
                  <input type='text' className='ud-text-input ud-text-input-large ud-text-md' placeholder='Last Name' />
                </div> */}
                <div className='ud-form-group'>
                  <div className='ud-text-input-container'>
                    <input
                      type='text'
                      className='ud-text-input ud-text-input-large ud-text-md'
                      placeholder='Headline'
                      {...register('headline')}
                    />

                    <div className='text-input-with-counter-module--counter'>60</div>
                    <div className='ud-text-input-box'></div>
                  </div>

                  <div className='ud-form-note ud-text-xs'>
                    Add a professional headline like, "Instructor at Udemy" or "Architect."
                  </div>

                  {<div className='ud-form-note-validate-14'>{errors.headline ? errors.headline.message : ''}</div>}
                </div>
                <div className='ud-form-group'>
                  <TextEditor
                    customToolBar={toolBarCustom}
                    defaultValue={getValues('biography') ?? ''}
                    handleHTMLChange={handleHTMLChange}
                  />
                  <div className='ud-form-note ud-text-xs'>
                    Links and coupon codes are not permitted in this section.
                  </div>
                  {<div className='ud-form-note-validate-14'>{errors.biography ? errors.biography.message : ''}</div>}
                </div>
                {/* <div className='ud-form-group'>
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
                  {<div className='ud-form-note-validate-14'>{errors.l ? errors.l.message : ''}</div>}
                </div> */}
              </div>
            </div>

            <div className='um-section'>
              <legend className='ud-form-label ud-heading-sm'>Links:</legend>
              <div className='ud-form-group'>
                <input
                  type='text'
                  className='ud-text-input ud-text-input-large ud-text-md'
                  placeholder='Website (http(s)://..)'
                  {...register('website_url')}
                />
                {<div className='ud-form-note-validate-14'>{errors.website_url ? errors.website_url.message : ''}</div>}
              </div>

              <div className='ud-form-group'>
                <div className='text-input-with-addons--with-addons'>
                  <div className='ud-text-input-container'>
                    <div className='text-input-with-addons--addon'>http://twitter.com/</div>
                    <input
                      type='text'
                      className='ud-text-input ud-text-input-large ud-text-md'
                      placeholder='Twitter Profile'
                      {...register('twitter_url')}
                    />

                    <div className='ud-text-input-box'></div>
                  </div>
                </div>

                <div className='ud-form-note ud-text-xs'>Add your Twitter username (e.g. johnsmith).</div>
                {<div className='ud-form-note-validate-14'>{errors.twitter_url ? errors.twitter_url.message : ''}</div>}
              </div>
              <div className='ud-form-group'>
                <div className='text-input-with-addons--with-addons'>
                  <div className='ud-text-input-container'>
                    <div className='text-input-with-addons--addon'>http://www.facebook.com/</div>
                    <input
                      type='text'
                      className='ud-text-input ud-text-input-large ud-text-md'
                      placeholder='Facebook Profile'
                      {...register('facebook_url')}
                    />

                    <div className='ud-text-input-box'></div>
                  </div>
                </div>

                <div className='ud-form-note ud-text-xs'>Input your Facebook username (e.g. johnsmith).</div>
                <div className='ud-form-note-validate-14'>{errors.facebook_url ? errors.facebook_url.message : ''}</div>
              </div>
              <div className='ud-form-group'>
                <div className='text-input-with-addons--with-addons'>
                  <div className='ud-text-input-container'>
                    <div className='text-input-with-addons--addon'>http://www.linkedin.com/</div>
                    <input
                      type='text'
                      className='ud-text-input ud-text-input-large ud-text-md'
                      placeholder='LinkedIn Profile'
                      {...register('linkedin_url')}
                    />

                    <div className='ud-text-input-box'></div>
                  </div>
                </div>

                <div className='ud-form-note ud-text-xs'>Input your LinkedIn resource id (e.g. in/johnsmith).</div>
                <div className='ud-form-note-validate-14'>{errors.linkedin_url ? errors.linkedin_url.message : ''}</div>
              </div>
              <div className='ud-form-group'>
                <div className='text-input-with-addons--with-addons'>
                  <div className='ud-text-input-container'>
                    <div className='text-input-with-addons--addon'>http://www.youtube.com/</div>
                    <input
                      type='text'
                      className='ud-text-input ud-text-input-large ud-text-md'
                      placeholder='Youtube Profile'
                      {...register('youtube_url')}
                    />

                    <div className='ud-text-input-box'></div>
                  </div>
                </div>

                <div className='ud-form-note ud-text-xs'>Input your Youtube username (e.g. johnsmith).</div>
                <div className='ud-form-note-validate-14'>{errors.youtube_url ? errors.youtube_url.message : ''}</div>
              </div>
            </div>

            <div className='ud-footer-btns' style={{ textAlign: 'left' }}>
              <button type='submit' className='ud-btn ud-btn-large ud-btn-primary ud-heading-md'>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfile
