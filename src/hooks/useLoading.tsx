import React, { useState } from 'react'

function useLoading() {
  const [isLoading, setIsLoading] = useState(false)

  return [isLoading, setIsLoading]
}

export { useLoading }
