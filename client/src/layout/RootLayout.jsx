import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {useSelector , useDispatch} from "react-redux"
import {logout} from "../redux/slice/userSlice"
export default function RootLayout() {  
  const user = useSelector(state => state.user.value) ;
  const dispatch = useDispatch() ;
  const navigate = useNavigate() ;
  const HandelLogout = () => {
    dispatch(logout()) ;
    localStorage.clear() ;
    return navigate("/login") ;
  }
  return (
    <div className="h-screen w-full overflow-x-hidden">
        <nav className="flex justify-between h-[15%]  p-2 place-items-center bg-primary-blue" >
            <h1 className="font-bold text-white text-2xl sm:text-3xl cursor-pointer">Room Chat</h1>
            <div className="flex place-content-center sm:mr-10 sm:flex-row justify-evenly">
              {user.exist ? (
                <>
                  <p className="mr-2 registre">{user.username}</p>
                  <p className="registre cursor-pointer" onClick={() => HandelLogout()}>Logout</p>
                </>
              ) : (
                <>
                  <NavLink to="/register" className=" mr-2 registre">Register</NavLink>
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
