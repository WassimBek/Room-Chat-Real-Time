import { NavLink, Outlet } from "react-router-dom";
import {useSelector} from "react-redux"
export default function RootLayout() {  
  const user = useSelector(state => state.user.value) ;
  console.log(user) ;
  return (
    <div className="h-screen w-full overflow-x-hidden">
        <nav className="flex justify-between p-2 place-items-center bg-primary-blue h-[15%]" >
            <h1 className="font-bold text-white text-2xl sm:text-3xl cursor-pointer">Room Chat</h1>
            <div className="flex place-content-center sm:mr-10 sm:flex-row flex-col">
              {user.exist ? (
                <>
                  <NavLink to="/profile" className="sm:mr-5 sm:mb-0 mb-2 registre">{user.username}</NavLink>
                  <NavLink to="/logout" className="registre">Logout</NavLink>
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
            <Outlet />
    </div>
  )
}
