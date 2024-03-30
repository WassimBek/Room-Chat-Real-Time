import {Route, RouterProvider, createBrowserRouter , createRoutesFromElements} from 'react-router-dom'
import './App.css'
import RootLayout from './layout/RootLayout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route path='/register'/>
        <Route path='/login'/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
