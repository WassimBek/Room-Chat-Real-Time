// import { useDispatch } from 'react-redux'
import axios from 'axios' 
// import {login} from '../redux/slice/userSlice'
import { redirect } from 'react-router-dom'
export default function Home() {
  return (
    <div>Home</div>
  )
}

export const AuthorizationLoader = async() => {
  // const dispatch = useDispatch() ;
  const token = localStorage.getItem('token') ;
  if (token) {
    try {
      const url = `http://localhost:8080/room/get-rooms/${localStorage.getItem('ID')}` ;
      const response = await axios.get(url , {headers : {Authorization : `Bearer ${token}`}}) ;
      // dispatch(login({username : response.data.user.username , email : response.data.user.email , id : response.data.user.id}))
      return response.data ;
    } catch (error) {
      console.error(`ERROR : ${error.message}`) ;
      return redirect("/Login") ;
    }
  }
  return redirect("/Login") ;
}