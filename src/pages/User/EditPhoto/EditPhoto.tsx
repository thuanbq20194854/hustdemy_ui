import ReactCrop, { Crop, PixelCrop } from 'react-image-crop'
import { UpdateProfileForm } from '../../../models/auth'
import { useAppDispatch, useAppSelector } from '../../../services/state/redux/store'
import { schemaUpdateProfile } from '../../../validators/auth'
import { FormEvent, useEffect, useRef, useState } from 'react'

import styles from './EditPhoto.module.scss'
import 'react-image-crop/dist/ReactCrop.css'
import { setCanvasPreview } from './setCanvasPreview'
import { useDebounceEffect } from '../../../hooks/useDebounceEffect'

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
  const [error, setError] = useState('')
  const [imageFile, setImageFile] = useState<File | undefined>(undefined)
  const [imagePreview, setImagePreview] = useState(user?.avatar ? user?.avatar : '')

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    console.log(e)

    //Form Data

    // API Call

    // Set Slice User with return API
  }

  const handleClickUploadImage = () => {
    inputRef.current?.click()
  }

  const handleFileChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    // Validate

    const newFile = evt.target.files ? evt.target.files[0] : undefined

    if (newFile) {
      setImagePreview(URL.createObjectURL(newFile))
    }

    setEditPhotoMode(EEditPhotoMode.Crop)
  }

  console.log('editPhotoMode: ', editPhotoMode)

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
        const imageURL = URL.createObjectURL(blob)

        setImagePreview(imageURL)
      })
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
                        // aspect={ASPECT_RATIO}
                        // minWidth={MIN_DIMENSION}
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
                        width: completedCrop.width,
                        height: completedCrop.height
                      }}
                    />
                  )}

                  <canvas></canvas>
                </div>
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
                      <button type='button' className='ud-btn ud-btn-large ud-btn-secondary ud-heading-md'>
                        <span>Change Image</span>
                      </button>
                    )}
                    {editPhotoMode === EEditPhotoMode.Crop && (
                      <button
                        type='button'
                        className='ud-btn ud-btn-large ud-btn-secondary ud-heading-md'
                        onClick={handleClickCropButton}
                      >
                        <span>Crop</span>
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
