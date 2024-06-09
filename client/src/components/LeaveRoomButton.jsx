import {Button} from '@chakra-ui/react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import Socket from '../Socket'
export default function LeaveRoomButton() {
    const {id} = useParams() ;
    const navigate = useNavigate() ;
    const LeaveRoomHandeler = async() => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_REACT_BASE_URL}/room/leave/${id}` , {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("JWT")}`,
                },
            })
            Socket.emit('leave' , {user_id : localStorage.getItem("ID") , room_id : id})
            navigate('/') ;
        } catch (error) {
            console.log('Error : '+error) ;
            navigate('/') ;
        }
    }
  return (
    <div className="absolute bottom-24 w-full p-4" >
        <Button width={"100%"} colorScheme="red" variant="outline" onClick={() => LeaveRoomHandeler()}>
          Leave Room
        </Button>
      </div>
  )
}
