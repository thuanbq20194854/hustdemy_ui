import { useForm } from 'antd/es/form/Form'
import AccordionFilterPanel from './AccordionFilterPanel'
import styles from './CourseSearch.module.scss'
import { Form, Select, SelectProps } from 'antd'

const options: SelectProps['options'] = []

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i
  })
}

function CourseSearch() {
  const [form] = useForm()

  console.log('form: ', form.getFieldsValue())
  return (
    <div className={styles.courseSearchPageWrapper}>
      <h1 className='headerTitle ud-heading-xl'>904 results for “abc”</h1>

      <div className='filterSection'>
        <div className='heading'>
          <div className='sortBtn'>
            <Select options={options} id='sort' rootClassName={styles.rootClassSelect} className='classSelect'></Select>
            <label htmlFor='sort' className='label ud-heading-xs'>
              Sort by
            </label>
          </div>
          <button className='clearFilterBtn ud-btn ud-btn-large ud-btn-ghost ud-heading-md'>
            <span>Clear Filters</span>
          </button>
          <div className='resultCount ud-heading-md'>904 results</div>
        </div>

        <div className='filterRegion'>
          <div className='filterSidebar'>
            <Form action='' form={form}>
              <AccordionFilterPanel filterType='radio' filterTitle='Rating' />
              <AccordionFilterPanel filterType='checkbox' filterTitle='Language' />
            </Form>
          </div>

          <div className='paginatedCourseList'></div>
        </div>
      </div>
    </div>
  )
}

export default CourseSearch
