import {Route, RouterProvider, createBrowserRouter , createRoutesFromElements} from 'react-router-dom'
import './App.css'
import RootLayout from './layout/RootLayout'
import Register, { SubmitRegister } from './pages/Register'
import Login from './pages/Login'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route path='/register' element={<Register />} action={SubmitRegister}/>
        <Route path='/login' element={<Login />}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
