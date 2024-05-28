import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import CreateRoom from '../tabs/CreateRoom';
import JoinRoom from '../tabs/JoinRoom';
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
              <CreateRoom />
            </TabPanel>
            <TabPanel>
                <JoinRoom />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </aside>
  );
}

export default AsideLayout;
