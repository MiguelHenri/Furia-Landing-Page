import { Title, Button, Center, Card, SimpleGrid, Anchor } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowRight, IconBrandValorant } from '@tabler/icons-react';

function TeamsSection() {

    const isMobile = useMediaQuery('(max-width: 768px)');

    const teams = Array.from({ length: 3 }, (_, index) => (
        <Anchor key={index}>
            <Card 
                withBorder
                w={{ base:'35vw', xs: '30vw', md: '25vw' }}
                h={{ base:'20vh', xs: '25vh', md: '30vh' }}
                style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#403F3D'
                }}
            >
                <IconBrandValorant height={50} width={50} color='#F2F0E9'/>
            </Card>
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
                {isMobile ? 'TODOS' : 'TODOS TIMES'}
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
            <SimpleGrid cols={2}>
                {teams}
                {teamButton}
            </SimpleGrid>
        </Center>
        </>
    );
}

export default TeamsSection;