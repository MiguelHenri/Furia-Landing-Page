import { Card, Image, Stack, Title, Text, Center, Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

// needs to receive a post object.
function NewsPost() {

    const isMobile = useMediaQuery('(max-width: 768px)');

    const mockPost = {
        title: 'CHAMPION + FURIA',
        text: 'A Champion, icônica marca de sportswear, se une com a FURIA, uma das maiores organizações de esports do mundo, para uma coleção especial e limitada de camisetas e moletons, mixando gráficos e temas de ambas as marcas em uma verdadeira campanha colaborativa. ',
        image: 'https://furia.gg/wp-content/uploads/2024/08/Banner-Furia-Desk-scaled-2048x911.webp',
        alt: 'A imagem mostra três pessoas vestindo roupas de um collab das marcas "Champion" e "FURIA", posando contra um fundo azul.',
    }

    return (
        <Center>
            <Card 
                radius="xl"
                h={{base:'60vh', sm:'85vh'}}
                w={{base:'90vw', sm:'85vw'}}
            >
                <Card.Section style={{ position: 'relative' }}>
                    <Image
                        src={mockPost.image}
                        alt={mockPost.alt}
                        h={{base:'45vh', sm:'70vh'}}
                    />
                    <Button 
                        style={{
                            position: 'absolute',
                            bottom: '20px',
                            right: '20px',
                        }}
                        size={isMobile ? 'sm' : 'lg'}
                    >
                        LEIA MAIS&nbsp;
                        <IconArrowRight/>
                    </Button>
                </Card.Section>
                <Card.Section>
                    <Stack p='xs'>
                        <Title c='primary.0' order={isMobile? 2 : 1}> 
                            {mockPost.title}
                        </Title>
                        <Text truncate='end' c='primary.0'> 
                            {mockPost.text}
                        </Text>
                    </Stack>
                </Card.Section>
            </Card>
        </Center>
    );
}

export default NewsPost;