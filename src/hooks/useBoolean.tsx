import { useState } from 'react'

const useBoolean = (initValue = false): [boolean, (cmd: boolean) => void, () => void, () => void, () => void] => {
  const [value, setValue] = useState<boolean>(initValue)
  const setTrue = () => {
    setValue(true)
  }
  const setFalse = () => {
    setValue(false)
  }
  const toggle = () => {
    setValue((prev) => !prev)
  }

  const setCommand = (cmd: boolean) => {
    setValue(cmd)
  }
  return [value, setCommand, setTrue, setFalse, toggle]
}

export { useBoolean }
