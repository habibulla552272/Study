
import { RouterProvider } from 'react-router'
import './App.css'
import Test from './commponent/Test'
import { rootRouter } from './router/router'

function App() {


  return (
    <>
      <RouterProvider router={rootRouter} />
    
    </>
  )
}

export default App
