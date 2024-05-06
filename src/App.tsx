import { useContext, useEffect } from 'react'
import { useLoading } from './hooks/useLoading'
import { useRouteElements } from './useRouteElements'
import { useBoolean } from './hooks/useBoolean'
import { LoadingContext } from './contexts/loading.context'
import LazyLoading from './components/LazyLoading/LazyLoading'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAppSelector } from './services/state/redux/store'

function App() {
  const { isLoading, _, showLoading, closeLoading } = useContext(LoadingContext)
  const callAPi = () => {
    showLoading()

    setTimeout(() => {
      closeLoading()
    }, 2000)
  }

  const { user } = useAppSelector((state) => state.auth)

  console.log('user: ', user)

  return (
    <div>
      <ToastContainer />
      {/* <button onClick={callAPi}>API</button>
      {isLoading && <LazyLoading />} */}
      {useRouteElements()}
    </div>
  )
}

export default App
