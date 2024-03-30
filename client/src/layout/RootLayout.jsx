import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
        <nav className="flex justify-between p-2 place-items-center bg-primary-blue">
            <h1 className="font-bold text-white text-2xl sm:text-3xl cursor-pointer">Room Chat</h1>
            <div className="flex place-content-center sm:mr-10">
                <NavLink to="/register" className="sm:mr-5 mr-2 registre">Register</NavLink>
                <NavLink to="/login" className="registre">Login</NavLink>
            </div>
        </nav>
        <main className="bg-red-500 w-screen h-full">
            <Outlet />
        </main>
    </div>
  )
}
