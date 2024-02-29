import React, { createContext, useState } from 'react'

interface IContext {
  isLoading: boolean
  showLoading: () => void
  closeLoading: () => void
}

interface IProps {
  children?: React.ReactNode
}

export const LoadingContext = createContext<IContext>({
  isLoading: false,
  showLoading: () => null,
  closeLoading: () => null
})

function LoadingProvider(props: IProps) {
  const [isLoading, setIsLoading] = useState(false)

  const showLoading = () => {
    setIsLoading(true)
  }

  const closeLoading = () => {
    setIsLoading(false)
  }

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        showLoading,
        closeLoading
      }}
    >
      {props.children}
    </LoadingContext.Provider>
  )
}

export default LoadingProvider
