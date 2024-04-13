import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="h-screen w-full">
        <nav className="flex justify-between p-2 place-items-center bg-primary-blue sm:h-[13vh]">
            <h1 className="font-bold text-white text-2xl sm:text-3xl cursor-pointer">Room Chat</h1>
            <div className="flex place-content-center sm:mr-10 sm:flex-row flex-col">
                <NavLink to="/register" className="sm:mr-5 sm:mb-0 mb-2 registre">Register</NavLink>
                <NavLink to="/login" className="registre">Login</NavLink>
            </div>
        </nav>
            <Outlet />
    </div>
  )
}
