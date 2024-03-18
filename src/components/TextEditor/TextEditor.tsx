import React from 'react'

import { useQuill } from 'react-quilljs'
// or const { useQuill } = require('react-quilljs');

import 'quill/dist/quill.snow.css' // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

import styles from './TextEditor.module.scss'

const toolBarStandard = [
  [{ header: [1, 2, 3, 4, false] }],
  ['bold', 'italic', 'underline'],
  [{ list: 'ordered' }, { list: 'bullet' }]
]

const toolBarImage = [
  [{ header: [1, 2, 3, 4, false] }],
  ['bold', 'italic', 'underline'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['link', 'image']
]

interface IProps {
  customToolBar?: Array<any>
  placeholder?: string
  className?: string

  defaultValue: string
  handleHTMLChange?: (html: string) => void
}

function TextEditor({ customToolBar, placeholder, className, handleHTMLChange, defaultValue }: IProps) {
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: customToolBar ? customToolBar : toolBarStandard
    },
    placeholder: placeholder
  })

  // console.log(quill) // undefined > Quill Object
  // console.log(quillRef) // { current: undefined } > { current: Quill Editor Reference }

  React.useEffect(() => {
    // if (quill) {
    //   quill.clipboard.dangerouslyPasteHTML('<h1>React Hook for Quill!</h1>')
    // }

    if (quill) {
      const delta = quill.clipboard.convert(defaultValue)
      quill.setContents(delta)
      quill.on('text-change', (delta, oldDelta, source) => {
        if (handleHTMLChange) {
          handleHTMLChange(quill.root.innerHTML)
        }
        // console.log('Text change!')
        // console.log('quill.getText(): ', quill.getText()) // Get text only
        // console.log('quill.getContents(): ', quill.getContents()) // Get delta contents
        // console.log('quill.root.innerHTML: ', quill.root.innerHTML) // Get innerHTML using quill
        // console.log('quillRef.current.firstChild.innerHTML: ', quillRef.current.firstChild.innerHTML) // Get innerHTML using quillRef
      })
    }
  }, [quill])

  return (
    <div className={`${styles.textEditorWrapper} ${className}`}>
      <div ref={quillRef} />
    </div>
  )
}

export default TextEditor
