import React from 'react'

import styles from './CourseGoals.module.scss'
import { Input } from 'antd'
import { MdDelete } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { LuPlus } from 'react-icons/lu'

import { IntendedLearners } from '../../../../models/course'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemeUdpateIntendedLearner } from '../../../../validators/course'
import { BiSolidErrorAlt } from 'react-icons/bi'
const defaultFormValue = {
  outcomes: [{ value: '' }, { value: '' }, { value: '' }, { value: '' }],
  prerequisites: [{ value: '' }],
  intendFor: [{ value: '' }]
}

function CourseGoals() {
  const {
    handleSubmit,
    control,
    watch,
    register,
    formState: { errors }
  } = useForm<IntendedLearners>({
    defaultValues: defaultFormValue,
    resolver: yupResolver(schemeUdpateIntendedLearner)
  })

  const {
    fields: objectivesOutcomes,
    remove: removeOutcome,
    append: appendOutcome,

    swap: swapOutcome
  } = useFieldArray({
    control,
    name: 'outcomes'
  })
  const {
    fields: requirementsField,
    remove: removeRequirements,
    append: appendRequirements,

    swap: swapRequirements
  } = useFieldArray({
    control,
    name: 'requirements'
  })
  const {
    fields: intendedForField,
    remove: removeIntendedFor,
    append: appendIntendedFor,
    swap: swapIntendFor
  } = useFieldArray({
    control,
    name: 'intended_for'
  })

  const onSubmit = (data: IntendedLearners) => {
    console.log('DAta: ', data)
  }

  /*
  1. FOrm Diry => Có thể click Save (check form có thực sự khác biệt, để render notificaiton modal)


  2. Input.length > 0 + Hover => hiện button Delete + Move

  3. Tất cả input phải có length > 0 => THì mới cho add thêm Response Input
  */

  const canOutcomesItemBeDeleted = objectivesOutcomes.length > 4

  const handleAppendOutComes = () => {
    // console.log('watch ', watch('objectives'))
    if (watch('outcomes').every((item) => item.value.trim().length > 0)) {
      appendOutcome({
        value: ''
      })
    } else {
      return
    }
  }
  const handleAppendRequirements = () => {
    if (watch('requirements')?.length === 0 || watch('requirements')?.every((item) => item.value.trim().length > 0)) {
      appendRequirements({
        value: ''
      })
    } else {
      return
    }
  }
  const handleAppendIntendedFor = () => {
    if (watch('intended_for')?.length === 0 || watch('intended_for')?.every((item) => item.value.trim().length > 0)) {
      appendIntendedFor({
        value: ''
      })
    } else {
      return
    }
  }

  const handleRemoveOutcome = (index: any) => {
    if (!canOutcomesItemBeDeleted) {
      return
    }

    removeOutcome(index)
  }

  const handleOnDragEndOutcome = (result: any) => {
    if (!result.destination) {
      return
    }
    swapOutcome(result.source.index, result.destination.index)

    console.log(result)
  }
  const handleOnDragEndRequirement = (result: any) => {
    if (!result.destination) {
      return
    }
    swapRequirements(result.source.index, result.destination.index)

    console.log(result)
  }
  const handleOnDragEndIntendedFor = (result: any) => {
    if (!result.destination) {
      return
    }
    swapIntendFor(result.source.index, result.destination.index)

    console.log(result)
  }

  console.log('objectivesOutcomes: ', objectivesOutcomes)

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

            <DragDropContext onDragEnd={handleOnDragEndOutcome}>
              <Droppable droppableId='outcomes'>
                {(provided) => (
                  <ul className='fieldArrayListContainer' {...provided.droppableProps} ref={provided.innerRef}>
                    {objectivesOutcomes.map(({ id }, index) => (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <Controller
                            control={control}
                            {...register(`outcomes.${index}.value`)}
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
                                <span className={`btnWrapper ${!canOutcomesItemBeDeleted && 'prevent'}`}>
                                  <button className={`btnContainer`} onClick={() => handleRemoveOutcome(index)}>
                                    <MdDelete />
                                  </button>
                                </span>
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

            <div className='formErrorMessage'>
              <BiSolidErrorAlt className='errorIcon' />
              <span className='text ud-heading-md'>This field should contain at least 4 items.</span>
            </div>

            <button
              className='addMoreBtn ud-btn ud-btn-large ud-btn-ghost ud-heading-md'
              onClick={handleAppendOutComes}
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

            <DragDropContext onDragEnd={handleOnDragEndRequirement}>
              <Droppable droppableId='requirements'>
                {(provided) => (
                  <ul className='fieldArrayListContainer' {...provided.droppableProps} ref={provided.innerRef}>
                    {requirementsField.map(({ id }, index) => (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <Controller
                            control={control}
                            {...register(`requirements.${index}.value`)}
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
                                <button className='btnContainer' onClick={() => removeRequirements(index)}>
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
              onClick={handleAppendRequirements}
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

            <DragDropContext onDragEnd={handleOnDragEndIntendedFor}>
              <Droppable droppableId='intended_for'>
                {(provided) => (
                  <ul className='fieldArrayListContainer' {...provided.droppableProps} ref={provided.innerRef}>
                    {intendedForField.map(({ id }, index) => (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <Controller
                            control={control}
                            {...register(`intended_for.${index}.value`)}
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
                                <button className='btnContainer' onClick={() => removeIntendedFor(index)}>
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
              onClick={handleAppendIntendedFor}
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
