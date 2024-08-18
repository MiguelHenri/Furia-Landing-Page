import { Flex, Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

function Layout() {
    return (
        <Flex h="100vh" direction="column" justify='flex-start' mr={30} ml={30}>

            <Header/>

            <Box style={{flex:1}}> 
                <Outlet/>
            </Box>

            <Footer/>

        </Flex>
    )
}

export default Layout;