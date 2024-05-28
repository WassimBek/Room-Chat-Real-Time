import { Tabs, TabList, TabPanels, Tab, TabPanel, Button } from '@chakra-ui/react'
import { Form } from 'react-router-dom';
import {FormControl , FormLabel , Input} from '@chakra-ui/react'
function AsideLayout() {
  return (
    <aside className="border-2">
      <div>
        <Tabs>
          <TabList >
            <Tab className='w-[50%]'>Create Room</Tab>
            <Tab className='w-[50%]'>Join Room</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <h1 className='text-2xl font-bold mb-8'>Create Room</h1>
              <Form method='POST'>
                <FormControl isRequired marginY={2}>
                    <FormLabel>Room Name  : </FormLabel>
                    <Input 
                    borderRadius="1rem"
                    paddingX="18px" 
                    paddingY="18px"
                    border="1px solid #12182B" type="text" name="name" placeholder="Room Name..."/>
                </FormControl>
                <Button bgColor={'transparent'} borderWidth={2} borderColor={"#12182B"} color={"black"} type='submit' width={"100%"} marginTop={"10px"} borderRadius="1rem" _hover={{bgColor : "#12182B", color : "white" }}>Submit</Button>
              </Form>
            </TabPanel>
            <TabPanel>
            <h1 className='text-2xl font-bold mb-8'>Join Room</h1>
              <Form method='POST'>
                <FormControl isRequired marginY={2}>
                    <FormLabel>Room Code  : </FormLabel>
                    <Input 
                    borderRadius="1rem"
                    paddingX="18px" 
                    paddingY="18px"
                    border="1px solid #12182B" type="number" name="name" placeholder="Room Code..."/>
                </FormControl>
                <Button bgColor={'transparent'} borderWidth={2} borderColor={"#12182B"} color={"black"} type='submit' width={"100%"} marginTop={"10px"} borderRadius="1rem" _hover={{bgColor : "#12182B", color : "white" }}>Submit</Button>
              </Form>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </aside>
  );
}

export default AsideLayout;
