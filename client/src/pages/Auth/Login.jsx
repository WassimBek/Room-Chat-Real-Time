import {Form, redirect, useActionData} from 'react-router-dom'
import {FormControl , FormLabel , Input , InputGroup , InputRightElement , IconButton , Button} from '@chakra-ui/react'
import {ViewIcon , ViewOffIcon} from '@chakra-ui/icons'
import {useState} from 'react'
import axios from 'axios'
import { useDispatch} from 'react-redux'
import {login} from '../../redux/slice/userSlice'
export default function Login() {
    const [show , setShow] =useState(false)
    const handleClick = () => setShow(!show)
    const error = useActionData() ;
  return (
    <div className="sm:w-[500px] w-[80%] mx-auto pt-10 mt-16">
    <h2 className="font-bold text-2xl text-center">Login</h2>
    <Form method='POST'>
        <FormControl isRequired marginY={2}>
            <FormLabel>email adress  : </FormLabel>
            <Input 
             borderRadius="1rem"
             paddingX="18px" 
             paddingY="18px"
            border="1px solid #12182B" type="text" name="email" placeholder="Enter Username"/>
            {error && error.message.email && <p className="text-red-500">{error.message.email}</p>}
        </FormControl>
        <FormControl isRequired>
            <FormLabel>password  : </FormLabel>
            <InputGroup size='md'>
                <Input
                borderRadius="1rem"
                paddingX="18px" 
                paddingY="18px"
                border="1px solid black"
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                name='password'
                />
                {error && error.message.password && <p className="text-red-500">{error.message.password}</p>}
                <InputRightElement width='4.5rem' >
                    <IconButton bgColor="transparent" variant="ghost" size='xs' as={show ? ViewIcon : ViewOffIcon} onClick={handleClick}/>
                </InputRightElement>
            </InputGroup>
        </FormControl>
        <div className="text-center">
            <Button  type="submit" bgColor="transparent" border="2px solid #12182B" _hover={{bgColor : '#12182B' , color : "white"}} className="mt-4">Login</Button>
        </div>
    </Form>
</div>
  )
}

export const SubmitLogin = async({request}) => {
    // const dispatch = useDispatch() ;
    const data = await request.formData() ;
    const body = {
        email : data.get('email') ,
        password : data.get('password') ,
    }
    try {
        const url = "http://localhost:8080/auth/login" ;
        const response = await axios.post(url , body) ;
        // dispatch(login({username : response.data.user.username , email : body.email , id : response.data.user.id}))
        localStorage.setItem("JWT" , response.data.token) ;
        localStorage.setItem("ID" , response.data.user.id) ;
        console.log(response.data) ;
        return redirect("/") ;
    } catch (error) {
        console.error("err:  "+ error.response.data) ;
        return error.response.data ;
    }
}