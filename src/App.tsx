import { useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LazyLoading from './components/LazyLoading/LazyLoading'
import { LoadingContext } from './contexts/loading.context'
import { useBoolean } from './hooks/useBoolean'
import { useAppSelector } from './services/state/redux/store'
import { useRouteElements } from './useRouteElements'

function App() {
  const { isLoading, showLoading, closeLoading } = useContext(LoadingContext)
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
      {/* <button onClick={callAPi}>API</button> */}
      {isLoading && <LazyLoading />}
      {useRouteElements()}

      {/* <button onClick={() => setOpen(true)}>Click Tao</button>
      <ModalCustom open={open} setOpen={setOpen} /> */}
    </div>
  )
}

export default App
