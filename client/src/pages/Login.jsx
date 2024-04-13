import {Form} from 'react-router-dom'
import {FormControl , FormLabel , Input , InputGroup , InputRightElement , IconButton , Button} from '@chakra-ui/react'
import {ViewIcon , ViewOffIcon} from '@chakra-ui/icons'
import {useState} from 'react'
export default function Login() {
    const [show , setShow] =useState(false)

    const handleClick = () => setShow(!show)
  return (
    <div className="sm:w-[500px] w-[80%] mx-auto pt-10 mt-16">
    <h2 className="font-bold text-2xl text-center">Login</h2>
    <Form>
        <FormControl isRequired marginY={2}>
            <FormLabel>username  : </FormLabel>
            <Input 
             borderRadius="1rem"
             paddingX="18px" 
             paddingY="18px"
            border="1px solid #12182B" type="text" name="username" placeholder="Enter Username"/>
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
                />
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
