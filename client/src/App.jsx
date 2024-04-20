import {Route, RouterProvider, createBrowserRouter , createRoutesFromElements} from 'react-router-dom'
import './App.css'
import RootLayout from './layout/RootLayout'
import Register, { SubmitRegister } from './pages/Auth/Register'
import Login, { SubmitLogin } from './pages/Auth/Login'
import Home, { AuthorizationLoader } from './pages/Home'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route path='/register' element={<Register />} action={SubmitRegister}/>
        <Route path='/login' element={<Login />} action={SubmitLogin}/>
        <Route index element={<Home />} loader={AuthorizationLoader}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
