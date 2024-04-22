import { FormEvent, useEffect, useRef, useState } from 'react'
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop'
import { useAppDispatch, useAppSelector } from '../../../services/state/redux/store'

import 'react-image-crop/dist/ReactCrop.css'
import { useDebounceEffect } from '../../../hooks/useDebounceEffect'
import styles from './EditPhoto.module.scss'
import { setCanvasPreview } from './setCanvasPreview'
import { schemeUpdateImage } from '../../../validators/auth'
import { UpdateAvatar, User } from '../../../models/auth'

import { ValidationError } from 'yup'
import { authSliceActions } from '../../../services/state/redux/authSlice'

const EEditPhotoMode = {
  Normal: 1,
  Crop: 2,
  CompletedCrop: 3
}

function EditPhoto() {
  const [editPhotoMode, setEditPhotoMode] = useState(EEditPhotoMode.Normal)
  const { user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  const inputRef = useRef<HTMLInputElement>(null)

  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()

  const previewCanvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [error, setError] = useState<string>('')
  const [imageFile, setImageFile] = useState<File | undefined>(undefined)
  const [imagePreview, setImagePreview] = useState(
    user?.avatar ? user?.avatar : 'https://img-c.udemycdn.com/user/200_H/anonymous_3.png'
  )

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    console.log(e)

    e.preventDefault()

    //Form Data

    // API Call

    // Set Slice User with return API

    dispatch(
      authSliceActions.updateUserProfile({
        user: {
          ...(user as User),
          avatar: imagePreview
        }
      })
    )

    setEditPhotoMode(EEditPhotoMode.Normal)

    console.log('imagePreview: ', imagePreview)
  }

  const handleClickUploadImage = () => {
    inputRef.current?.click()
  }

  const handleFileChange = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    try {
      // Validate

      const formData: UpdateAvatar = {
        image: evt.target.files ? evt.target.files[0] : undefined
      }

      const resultValdidate = await schemeUpdateImage.validate(formData)

      const newFile = resultValdidate.image

      if (newFile) {
        setImagePreview(URL.createObjectURL(newFile))
        setImageFile(newFile)
        setEditPhotoMode(EEditPhotoMode.Crop)
      }

      setError('')
    } catch (e) {
      if (e instanceof ValidationError) {
        setError(e.message)
      }
    } finally {
      //reset input value for the same File be selected again
      evt.target.value = ''
    }
  }

  useEffect(() => {
    if (editPhotoMode !== EEditPhotoMode.Crop) {
      setCrop(undefined)
      setCompletedCrop(undefined)
    }
  }, [editPhotoMode])

  useDebounceEffect(
    async () => {
      if (completedCrop?.width && completedCrop?.height && imgRef.current && previewCanvasRef.current) {
        setCanvasPreview(imgRef.current, previewCanvasRef.current, completedCrop, 1, 0)
      }
    },

    100,
    [completedCrop]
  )

  const handleClickCropButton = () => {
    if (imageFile) {
      previewCanvasRef.current?.toBlob((blob) => {
        if (blob) {
          const imageURL = URL.createObjectURL(blob)
          setImagePreview(imageURL)

          const newFile = new File([blob], imageFile.name, {
            type: imageFile.type
          })
          setImageFile(newFile)
        }

        setEditPhotoMode(EEditPhotoMode.CompletedCrop)
      }, imageFile.type)
    }
  }

  return (
    <div className={styles.editAvatarWrapper}>
      <div className='contentHeader'>
        <div className='inner'>
          <h1 className='ud-heading-xl'>Photo</h1>

          <p className='mt-8px ud-text-md'>Add a nice photo of yourself for your profile.</p>
        </div>
      </div>

      <div className='contentBody'>
        <form action='' onSubmit={handleSubmitForm}>
          <div className='um-container'>
            <div className='ud-form-group'>
              <label htmlFor='img' className='ud-form-label ud-heading-sm'>
                Image preview
              </label>
              <div className='udlite-in-udheavy'>
                <div className='image-upload-preview-with-crop--preview-wrapper'>
                  <div className='image-upload-preview-with-crop--image-wrapper'>
                    {editPhotoMode === EEditPhotoMode.Crop ? (
                      <ReactCrop
                        crop={crop}
                        onChange={(_, percent) => {
                          setCrop(percent)
                        }}
                        onComplete={(c) => setCompletedCrop(c)}
                      >
                        <img ref={imgRef} src={imagePreview} alt='' style={{ maxWidth: '100%' }} />
                      </ReactCrop>
                    ) : (
                      <img ref={imgRef} src={imagePreview} alt='' style={{ maxWidth: '100%' }} />
                    )}
                  </div>

                  <input
                    type='file'
                    accept='.png,.jpg,.jpeg'
                    onChange={handleFileChange}
                    ref={inputRef}
                    className='inputFile'
                  />

                  {!!completedCrop && (
                    <canvas
                      ref={previewCanvasRef}
                      style={{
                        // objectFit: 'contain',

                        display: 'none',
                        width: completedCrop.width,
                        height: completedCrop.height
                      }}
                    />
                  )}

                  <canvas></canvas>
                </div>

                {<p className='ud-form-note-validate-14'>{error}</p>}
                <div className='ud-image-upload-form-wrapper'>
                  <div className='ud-form-group'>
                    <label htmlFor='form-group--3' className='ud-form-label ud-heading-sm'>
                      Add / Change Image
                    </label>
                    {editPhotoMode === EEditPhotoMode.Normal && (
                      <button
                        type='button'
                        className='ud-btn ud-btn-large ud-btn-secondary ud-heading-md'
                        onClick={handleClickUploadImage}
                      >
                        <span>Upload Image</span>
                      </button>
                    )}
                    {editPhotoMode === EEditPhotoMode.CompletedCrop && (
                      <button
                        type='button'
                        className='ud-btn ud-btn-large ud-btn-secondary ud-heading-md'
                        onClick={handleClickUploadImage}
                      >
                        <span>Change Image</span>
                      </button>
                    )}
                    {editPhotoMode === EEditPhotoMode.Crop && (
                      <button
                        type='button'
                        className='ud-btn ud-btn-large ud-btn-secondary ud-heading-md'
                        onClick={handleClickCropButton}
                      >
                        <span>Crop Image</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className='ud-footer-btns' style={{ textAlign: 'left' }}>
              <button type='submit' className='ud-btn ud-btn-large ud-btn-primary ud-heading-md'>
                <span>Save</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditPhoto
