import axios from "axios";
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function Chat({message , setMessage}) {
    const {id} = useParams() ;
    const navigate = useNavigate() ;
    const GetRoomMessages = async() => {
        const url = `http://localhost:8080/chat/get-messages/${id}` ;
        try {
            const response = await axios.get(url , {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem("JWT")}`
                }
            })
            return response.data.data ;
        } catch (error) {
            console.log(error) ;
            navigate("/login") ;
        }
    }
    useEffect(() => {
        GetRoomMessages().then(data =>
            setMessage(data) 
        )
    } , [])
  return (
    <div>
        {message && message.map(msg => (
            <>
                <p>{msg.message}</p>
            </>
        ))}
    </div>
  )
}
