import { Form, redirect, useActionData } from "react-router-dom";
import {Button, FormControl, FormLabel, IconButton, Input , InputGroup , InputRightElement,} from "@chakra-ui/react"
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
export default function Register() {
    const [show , setShow] =useState(false)
    const error = useActionData() ;
    const handleClick = () => setShow(!show)
  return (
    <div className="sm:w-[500px] w-[80%] mx-auto pt-10">
        <h2 className="font-bold text-2xl text-center">Register</h2>
        <Form method="POST">
            <FormControl isRequired >
                <FormLabel>name : </FormLabel>
                <Input  
                 borderRadius="1rem"
                 paddingX="18px" 
                 paddingY="18px"
                border="1px solid #12182B" type="text" name="name" placeholder="Enter Name"/>
                {error && error.name && <p className="text-red-500">{error.name}</p>}
            </FormControl>
            <FormControl isRequired marginY={2}>
                <FormLabel>username  : </FormLabel>
                <Input 
                 borderRadius="1rem"
                 paddingX="18px" 
                 paddingY="18px"
                border="1px solid #12182B" type="text" name="username" placeholder="Enter Username"/>
            </FormControl>
            <FormControl isRequired marginY={2}>
                <FormLabel>email  : </FormLabel>
                <Input 
                 borderRadius="1rem"
                 paddingX="18px" 
                 paddingY="18px"
                border="1px solid #12182B"
                type="email" 
                name="email" 
                placeholder="Enter Email"
                />
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
                    name="password"
                    />
                    <InputRightElement width='4.5rem' >
                        <IconButton bgColor="transparent" variant="ghost" size='xs' as={show ? ViewIcon : ViewOffIcon} onClick={handleClick}/>
                    </InputRightElement>
                </InputGroup>
                {error && error.message.password && <p className="text-red-500">{error.message.password}</p>}
            </FormControl>
            <div className="text-center">
            <Button  type="submit" bgColor="transparent" border="2px solid #12182B" _hover={{bgColor : '#12182B' , color : "white"}} className="mt-4">Registre</Button>
            </div>
        </Form>
    </div>
  )
}


export const SubmitRegister = async({request}) => {
    const data = await request.formData() ;
    const body = {
        email : data.get('email') ,
        password : data.get('password') ,
        name : data.get('name') ,
        username : data.get('username') ,
    }
    try {
        const url = "http://localhost:8080/auth/register" ;
        const resposne = await axios.post(url , body) ;
        console.log("not wo") ;
        console.log("data : " + resposne.data) ;
        return redirect("/login") ;
    } catch (error) {
        console.error("err:  "+ error.response.data) ;
        // console.dir(error.response);
        return error.response.data ;
    }
}