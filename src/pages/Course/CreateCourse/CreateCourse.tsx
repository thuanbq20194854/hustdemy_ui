import React, { useEffect, useState } from 'react'

import styles from './CreateCourse.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { IoIosArrowDown } from 'react-icons/io'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemeCreateCourse } from '@/validators/course'
import { Category } from '@/models/course'
import { toast } from 'react-toastify'

interface OptionProps {
  id: number
  name: string
}

const fakeCategory: Category[] = [
  {
    id: 1,
    name: 'Technology',

    parent_id: null,
    children: null,
    updated_at: '2024-05-06T04:50:32.1079751+00:00',
    created_at: '2024-05-06T04:50:32.1079751+00:00'
  },
  {
    id: 2,
    name: 'Cooking',

    parent_id: null,
    children: null,
    updated_at: '2024-05-06T04:50:32.1079751+00:00',
    created_at: '2024-05-06T04:50:32.1079751+00:00'
  }
]

function CreateCourse() {
  const navigate = useNavigate()
  const [categoriesList, setCategoriesList] = useState<Category[]>([])

  const [subcategoriesList, setSubcategoriesList] = useState<Category[]>([])

  const {
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    register,
    watch
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schemeCreateCourse),
    defaultValues: {
      title: '',
      category_id: -1,
      sub_category_id: -1
    }
  })

  useEffect(() => {
    //fetch Category
    setCategoriesList(fakeCategory)
  })

  useEffect(() => {
    // fetch subcategories by categories id

    setSubcategoriesList(fakeCategory)
  }, [getValues('category_id')])

  const handleCreateCourse = () => {
    try {
      // API

      reset()
      navigate('/instructor/courses')

      toast.success('Create Course Successfully !')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className={styles.createCourseWrapper}>
      <form onSubmit={handleSubmit(handleCreateCourse)}>
        <div className='createCourseHeader'>
          <NavLink to='/instructor/courses'>
            <div className='logoContainer'>
              <img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg' alt='' />
            </div>
          </NavLink>
          <button className='ud-btn ud-btn-large ud-btn-ghost ud-heading-md'>
            <span>Exit</span>
          </button>
        </div>

        <div className='createCourseContent'>
          <div>
            <h1 className='ud-heading-serif-xl  create-course-title'>How about a working title?</h1>

            <p className='create-course-title-explain'>
              It's ok if you can't think of a good title now. You can change it later.
            </p>

            <div className='ud-form-group'>
              <div className='ud-text-input-container'>
                <input
                  type='text'
                  className='ud-text-input ud-text-input-large ud-text-md'
                  placeholder='e.g. Learn Photoshop CS6 from Scratch'
                  maxLength={60}
                  {...register('title')}
                />

                <div className='text-input-with-counter-module--counter'>{60 - watch('title').length}</div>
                <div className='ud-text-input-box'></div>
              </div>

              <div className='ud-form-note-validate-14'>{errors.title ? errors.title.message : ''}</div>
            </div>

            <div className='ud-form-group ml-32'>
              <div className='ud-form-label ud-heading-sm'>Category</div>
              <div className='ud-select-container ud-select-container-large'>
                <select className='ud-select ud-text-md' {...register('category_id')}>
                  <option value={-1}>--Select category--</option>

                  {categoriesList.map((category) => (
                    <option value={category.id}>{category.name ?? ''}</option>
                  ))}
                </select>
                <div className='ud-select-icon-container ud-select-icon-right'>
                  <IoIosArrowDown className='ud-icon ud-icon-small ud-icon-color-neutral' />
                </div>
              </div>

              <div className='ud-form-note-validate-14'>{errors.category_id ? errors.category_id.message : ''}</div>
            </div>

            <div className='ud-form-group ml-32'>
              <div className='ud-form-label ud-heading-sm'>Subcategory</div>
              <div className='ud-select-container ud-select-container-large'>
                <select className='ud-select ud-text-md' {...register('sub_category_id')}>
                  <option value={-1}>--Select subcategory--</option>
                  {subcategoriesList.map((category) => (
                    <option value={category.id}>{category.name ?? ''}</option>
                  ))}
                </select>
                <div className='ud-select-icon-container ud-select-icon-right'>
                  <IoIosArrowDown className='ud-icon ud-icon-small ud-icon-color-neutral' />
                </div>
              </div>
              <div className='ud-form-note-validate-14'>
                {errors.sub_category_id ? errors.sub_category_id.message : ''}
              </div>
            </div>

            <div className='actionRegion'>
              <button className={`ud-btn ud-btn-large ud-btn-primary ud-heading-md`}>
                <span>Create</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateCourse
