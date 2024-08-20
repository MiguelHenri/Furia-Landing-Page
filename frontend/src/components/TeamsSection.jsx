import { Title, Button, Center, SimpleGrid, Anchor } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowRight } from '@tabler/icons-react';
import TeamCard from "./TeamCard";

function TeamsSection() {

    const isMobile = useMediaQuery('(max-width: 540px)');

    // must get the 'top' 3 teams
    // should provide ALT
    const data = [
        {link: '', name: 'LOL', image: 'https://noticias.maisesports.com.br/wp-content/uploads/2024/01/FURIA-2024-800x533.jpeg'},
        {link: '', name: 'VALORANT', image: 'https://www.esports.net/br/wp-content/uploads/sites/3/2024/06/furia-vct-americas-1024x683.webp'},
        {link: '', name: 'CS', image: 'https://static.draft5.gg/news/2024/07/16140915/FURIA-Esports-World-Cup-2024.jpeg'},
    ]

    const teams = data.map((l, index) => (
        <Anchor key={index} href={l.link}>
            <TeamCard team={l}/>
        </Anchor>
    ));

    const teamButton = (
        <div 
            style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100%' 
            }}>
            <Button
                size={isMobile ? 'sm' : 'lg'}
            >
                TODOS TIMES
                <IconArrowRight/>
            </Button>
        </div>
    );

    return (
        <>
        <Title ml='2vw' mb='20px' mt='50px'>
            Times
        </Title>
        <Center>
            <SimpleGrid cols={{base: 1, xs: 2}}>
                {teams}
                {teamButton}
            </SimpleGrid>
        </Center>
        </>
    );
}

export default TeamsSection;