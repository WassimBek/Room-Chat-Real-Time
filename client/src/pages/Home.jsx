import { useDispatch} from 'react-redux'
import axios from 'axios' 
import {login} from '../redux/slice/userSlice'
import { redirect } from 'react-router-dom'
import {useEffect } from 'react'
import AsideLayout from '../layout/AsideLayout'
export default function Home() {
  const dispatch = useDispatch() ;
  useEffect(() => {
    AuthorizationLoader() ;
  } , [])

  const AuthorizationLoader =  async() => {
    const token = localStorage.getItem('JWT') ;
    if (token) {
      try {
        const url = `http://localhost:8080/room/get-rooms/${localStorage.getItem('ID')}` ;
        const response = await axios.get(url , {headers : {Authorization : `Bearer ${token}`}}) ;
        dispatch(login({username : response.data.room.username , email : response.data.room.email , id : response.data.room.id , exist : true}))
        return ;
      } catch (error) {
        console.error(`ERROR : ${error.message}`) ;
        return redirect("/Login") ;
      }
    }
    return redirect("/Login") ;
  };
  return (
    <div className='grid grid-cols-aside-bar h-[85%] w-[100%]'>
      <main className=''></main>
      <AsideLayout />
    </div>
  )
}