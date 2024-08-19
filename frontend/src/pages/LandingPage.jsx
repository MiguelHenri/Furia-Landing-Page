import { Center } from "@mantine/core";
import NewsCarousel from "../components/NewsCarousel";
import StoreSection from "../components/StoreSection";

function LandingPage() {
    return (
        <>
            <Center mt='10px'>
                <NewsCarousel/>
            </Center>

            <StoreSection/>
        </>
    )
}

export default LandingPage;