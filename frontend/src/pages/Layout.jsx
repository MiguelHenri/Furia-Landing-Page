import { Flex, Box } from "@mantine/core";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <Flex h="100vh" direction="column" justify='flex-start'>

            <Box style={{flex:1}}> 
                <Outlet/>
            </Box>

        </Flex>
    )
}

export default Layout;