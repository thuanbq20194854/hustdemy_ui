import React from 'react'

import styles from './CourseGoals.module.scss'
import { Input } from 'antd'
import { MdDelete } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { LuPlus } from 'react-icons/lu'
import { FormContext } from 'antd/es/form/context'

interface IFormValues {
  objectives: {
    value: string
  }[]
  prerequisites?: {
    value: string
  }[]
  intendFor?: {
    value: string
  }[]
}

const defaultFormValue = {
  objectives: [{ value: '' }, { value: '' }, { value: '' }, { value: '' }],
  prerequisites: [{ value: '' }],
  intendFor: [{ value: '' }]
}

function CourseGoals() {
  const { handleSubmit, control, watch, register } = useForm<IFormValues>({ defaultValues: defaultFormValue })

  const {
    fields: objectivesField,
    remove: removeObjective,
    append: appendObjective,

    swap: swapObjective
  } = useFieldArray({
    control,
    name: 'objectives'
  })
  const {
    fields: prerequisitesField,
    remove: removePrerequisites,
    append: appendPrerequisites,

    swap: swapPrerequisites
  } = useFieldArray({
    control,
    name: 'prerequisites'
  })
  const {
    fields: intendForField,
    remove: removeIntendFor,
    append: appendIntendFor,
    swap: swapIntendFor
  } = useFieldArray({
    control,
    name: 'intendFor'
  })

  const onSubmit = (data: IFormValues) => {
    console.log('DAta: ', data)
  }

  /*
  1. FOrm Diry => Có thể click Save (check form có thực sự khác biệt, để render notificaiton modal)


  2. Input.length > 0 + Hover => hiện button Delete + Move

  3. Tất cả input phải có length > 0 => THì mới cho add thêm Response Input
  */

  const handleAppendObjective = () => {
    // console.log('watch ', watch('objectives'))
    if (watch('objectives').every((item) => item.value.trim().length > 0)) {
      appendObjective({
        value: ''
      })
    } else {
      return
    }
  }
  const handleAppendPrerequisite = () => {
    if (watch('prerequisites')?.length === 0 || watch('prerequisites')?.every((item) => item.value.trim().length > 0)) {
      appendPrerequisites({
        value: ''
      })
    } else {
      return
    }
  }
  const handleAppendIntendFor = () => {
    if (watch('intendFor')?.length === 0 || watch('intendFor')?.every((item) => item.value.trim().length > 0)) {
      appendIntendFor({
        value: ''
      })
    } else {
      return
    }
  }

  const handleRemoveObjective = (index: any) => {
    if (objectivesField.length === 4) {
      return
    }

    removeObjective(index)
  }

  const handleOnDragEndObjective = (result: any) => {
    if (!result.destination) {
      return
    }
    swapObjective(result.source.index, result.destination.index)

    console.log(result)
  }
  const handleOnDragEndPrerequisites = (result: any) => {
    if (!result.destination) {
      return
    }
    swapPrerequisites(result.source.index, result.destination.index)

    console.log(result)
  }
  const handleOnDragEndIntendFor = (result: any) => {
    if (!result.destination) {
      return
    }
    swapIntendFor(result.source.index, result.destination.index)

    console.log(result)
  }

  console.log('objectivesField: ', objectivesField)

  return (
    <div className={styles.courseGoalsWrapper}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerContent}>
          <h2 className='ud-heading-serif-xl'>Intended learners</h2>
        </div>
      </div>
      <div className='mainContentWrapper'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='questionsContainer'>
            <p className='questionLabel ud-heading-md'>
              <span>What will students learn in your course?</span>
            </p>

            <p className='ud-text-md'>
              <span>
                You must enter at least 4 learning objectives or outcomes that learners can expect to achieve after
                completing your course.
              </span>
            </p>

            <DragDropContext onDragEnd={handleOnDragEndObjective}>
              <Droppable droppableId='objectives'>
                {(provided) => (
                  <ul className='fieldArrayListContainer' {...provided.droppableProps} ref={provided.innerRef}>
                    {objectivesField.map(({ id }, index) => (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <Controller
                            control={control}
                            {...register(`objectives.${index}.value`)}
                            render={({ field }) => (
                              <div className='inputFlexWrapper' ref={provided.innerRef} {...provided.draggableProps}>
                                <div className='inputContainer'>
                                  <Input
                                    {...field}
                                    className='antInput ud-text-md'
                                    placeholder='Example: Define the roles and responsibilities of a project manager'
                                  />
                                  <span className='counter'>160</span>
                                </div>
                                <button className='btnContainer' onClick={() => handleRemoveObjective(index)}>
                                  <MdDelete />
                                </button>
                                <button className='btnContainer' {...provided.dragHandleProps}>
                                  <FaBars />
                                </button>
                              </div>
                            )}
                          />
                        )}
                      </Draggable>
                    ))}

                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>

            <button
              className='addMoreBtn ud-btn ud-btn-large ud-btn-ghost ud-heading-md'
              onClick={handleAppendObjective}
            >
              <LuPlus size={24} />
              <span style={{ marginLeft: '4px' }}>Add more to your response</span>
            </button>
          </div>
          <div className='questionsContainer'>
            <p className='questionLabel ud-heading-md'>
              <span>What are the requirements or prerequisites for taking your course?</span>
            </p>

            <p className='ud-text-md'>
              <span>
                List the required skills, experience, tools or equipment learners should have prior to taking your
                course. If there are no requirements, use this space as an opportunity to lower the barrier for
                beginners.
              </span>
            </p>

            <DragDropContext onDragEnd={handleOnDragEndPrerequisites}>
              <Droppable droppableId='prerequisites'>
                {(provided) => (
                  <ul className='fieldArrayListContainer' {...provided.droppableProps} ref={provided.innerRef}>
                    {prerequisitesField.map(({ id }, index) => (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <Controller
                            control={control}
                            {...register(`prerequisites.${index}.value`)}
                            render={({ field }) => (
                              <div className='inputFlexWrapper' ref={provided.innerRef} {...provided.draggableProps}>
                                <div className='inputContainer'>
                                  <Input
                                    {...field}
                                    className='antInput ud-text-md'
                                    placeholder='Example: Define the roles and responsibilities of a project manager'
                                  />
                                  <span className='counter'>160</span>
                                </div>
                                <button className='btnContainer' onClick={() => removePrerequisites(index)}>
                                  <MdDelete />
                                </button>
                                <button className='btnContainer' {...provided.dragHandleProps}>
                                  <FaBars />
                                </button>
                              </div>
                            )}
                          />
                        )}
                      </Draggable>
                    ))}

                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>

            <button
              className='addMoreBtn ud-btn ud-btn-large ud-btn-ghost ud-heading-md'
              onClick={handleAppendPrerequisite}
            >
              <LuPlus size={24} />
              <span style={{ marginLeft: '4px' }}>Add more to your response</span>
            </button>
          </div>
          <div className='questionsContainer'>
            <p className='questionLabel ud-heading-md'>
              <span>Who is this course for?</span>
            </p>

            <p className='ud-text-md'>
              <span>
                Write a clear description of the intended learners for your course who will find your course content
                valuable. This will help you attract the right learners to your course.
              </span>
            </p>

            <DragDropContext onDragEnd={handleOnDragEndIntendFor}>
              <Droppable droppableId='intendFor'>
                {(provided) => (
                  <ul className='fieldArrayListContainer' {...provided.droppableProps} ref={provided.innerRef}>
                    {intendForField.map(({ id }, index) => (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <Controller
                            control={control}
                            {...register(`intendFor.${index}.value`)}
                            render={({ field }) => (
                              <div className='inputFlexWrapper' ref={provided.innerRef} {...provided.draggableProps}>
                                <div className='inputContainer'>
                                  <Input
                                    {...field}
                                    className='antInput ud-text-md'
                                    placeholder='Example: Define the roles and responsibilities of a project manager'
                                  />
                                  <span className='counter'>160</span>
                                </div>
                                <button className='btnContainer' onClick={() => removeIntendFor(index)}>
                                  <MdDelete />
                                </button>
                                <button className='btnContainer' {...provided.dragHandleProps}>
                                  <FaBars />
                                </button>
                              </div>
                            )}
                          />
                        )}
                      </Draggable>
                    ))}

                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>

            <button
              className='addMoreBtn ud-btn ud-btn-large ud-btn-ghost ud-heading-md'
              onClick={handleAppendIntendFor}
            >
              <LuPlus size={24} />
              <span style={{ marginLeft: '4px' }}>Add more to your response</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CourseGoals
