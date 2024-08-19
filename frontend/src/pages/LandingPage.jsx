import { Center, Title } from "@mantine/core";
import NewsCarousel from "../components/NewsCarousel";
import StoreSection from "../components/StoreSection";
import MatchesCarousel from "../components/MatchesCarousel";
import TeamsSection from "../components/TeamsSection";
import Newsletter from "../components/Newsletter";

function LandingPage() {
    return (
        <>
            <Center mt='10px'>
                <NewsCarousel/>
            </Center>

            <StoreSection/>

            <Title ml='3vw'>
                Proximos jogos
            </Title>
            <Center mt='20px'>
                <MatchesCarousel/>
            </Center>

            <TeamsSection/>

            <Newsletter/>
        </>
    )
}

export default LandingPage;