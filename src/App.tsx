import { useContext } from 'react'
import { useLoading } from './hooks/useLoading'
import { useRouteElements } from './useRouteElements'
import { useBoolean } from './hooks/useBoolean'
import { LoadingContext } from './contexts/loading.context'
import LazyLoading from './components/LazyLoading/LazyLoading'

function App() {
  const { isLoading, _, showLoading, closeLoading } = useContext(LoadingContext)

  const callAPi = () => {
    showLoading()

    setTimeout(() => {
      closeLoading()
    }, 2000)
  }
  return (
    <>
      {/* <button onClick={callAPi}>API</button>
      {isLoading && <LazyLoading />} */}
      <div>{useRouteElements()}</div>
    </>
  )
}

export default App
