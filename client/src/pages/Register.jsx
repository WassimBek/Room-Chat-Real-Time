import { Form } from "react-router-dom";
import {Button, FormControl, FormLabel, Icon, IconButton, Input , InputGroup , InputRightElement, ListIcon} from "@chakra-ui/react"
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
export default function Register() {
    const [show , setShow] =useState(false)

    const handleClick = () => setShow(!show)
  return (
    <div className="sm:w-[500px] w-[80%] mx-auto pt-10">
        <h2 className="font-bold text-2xl text-center">Register</h2>
        <Form>
            <FormControl isRequired>
                <FormLabel>name : </FormLabel>
                <Input  border="2px solid #12182B" type="text" name="name" placeholder="Enter Name"/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>username  : </FormLabel>
                <Input border="2px solid #12182B" type="text" name="username" placeholder="Enter Username"/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>email  : </FormLabel>
                <Input border="2px solid #12182B" type="email" name="email" placeholder="Enter Email"/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>password  : </FormLabel>
                <InputGroup size='md'>
                    <Input
                    border="2px solid black"
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem' >
                        <IconButton bgColor="transparent" variant="ghost" size='xs' as={show ? ViewIcon : ViewOffIcon} onClick={handleClick}/>
                        {/* <ListIcon as={show ? ViewIcon : ViewOffIcon}/> */}
                        {/* <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button> */}
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <div className="text-center">
            <Button  type="submit" bgColor="transparent" border="2px solid #12182B" _hover={{bgColor : '#12182B' , color : "white"}} className="mt-4">Registre</Button>
            </div>
        </Form>
    </div>
  )
}
