import { Title, Button, Center, Card, SimpleGrid, Anchor } from "@mantine/core";
import { IconBrandValorant } from '@tabler/icons-react';

function TeamsSection() {

    const teams = Array.from({ length: 3 }, (_, index) => (
        <Anchor key={index}>
            <Card 
                withBorder
                w='30vw'
                h='20vh'
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
            <Button>
                TODOS TIMES
            </Button>
        </div>
    );

    return (
        <>
        <Title ml='3vw'>
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