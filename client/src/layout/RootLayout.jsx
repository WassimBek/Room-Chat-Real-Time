import { NavLink, Outlet } from "react-router-dom";
import {useSelector , useDispatch} from "react-redux"
import {logout} from "../redux/slice/userSlice"
export default function RootLayout() {  
  const user = useSelector(state => state.user.value) ;
  const dispatch = useDispatch() ;
  const HandelLogout = () => {
    dispatch(logout()) ;
    localStorage.clear() ;
    location.href = '/login' ;
  }
  return (
    <div className="h-screen w-full overflow-x-hidden">
        <nav className="flex justify-between p-2 place-items-center bg-primary-blue h-[15%]" >
            <h1 className="font-bold text-white text-2xl sm:text-3xl cursor-pointer">Room Chat</h1>
            <div className="flex place-content-center sm:mr-10 sm:flex-row flex-col">
              {user.exist ? (
                <>
                  <p className="sm:mr-5 sm:mb-0 mb-2 registre">{user.username}</p>
                  <NavLink className="registre" onClick={() => HandelLogout()}>Logout</NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/register" className="sm:mr-5 sm:mb-0 mb-2 registre">Register</NavLink>
                  <NavLink to="/login" className="registre">Login</NavLink>
                </>
              )
              }  
            </div>
        </nav>
            <Outlet/>
    </div>
  )
}
