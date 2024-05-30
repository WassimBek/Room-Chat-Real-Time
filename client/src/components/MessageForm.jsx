import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

export default function MessageForm({setMsg}) {
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState("");
  const {id} = useParams() ;
  const navigate = useNavigate() ;
  const HandelMessageSubmit = async() => {
    const body = {
        message : message
    }
    try {
        const url = `http://localhost:8080/chat/add-message/${id}` ;
        const response = await axios.post(url , body , {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('JWT')}`
            }
        })
        setMsg(msg => [...msg, response.data.data]) ;
    } catch (error) {
        console.error(error) ;
        navigate("/login") ;
    }
    setMessage("");
    setIsTyping(false);
  };
  return (
    <div>
      <FormControl isRequired marginY={2}>
        <InputGroup paddingX={"10px"}>
          <Input
            borderRadius="1rem"
            padding={"18px"}
            border="1px solid #12182B"
            type="text"
            name="message"
            placeholder="Enter Message..."
            onChange={(e) => {
              if (e.target.value === "") {
                setIsTyping(false);
                setMessage("")
              } else {
                setIsTyping(true);
                setMessage(e.target.value);
              }
            }}
            value={message}
          />
          <InputRightElement width="4.5rem">
            {isTyping && (
              <IoSend
                size={25}
                cursor={"pointer"}
                onClick={() => HandelMessageSubmit()}
              />
            )}
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </div>
  );
}
