import {Route, RouterProvider, createBrowserRouter , createRoutesFromElements} from 'react-router-dom'
import './App.css'
import RootLayout from './layout/RootLayout'
import Register from './pages/Register'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route path='/register' element={<Register />}/>
        <Route path='/login'/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
