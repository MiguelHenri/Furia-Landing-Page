import { Card, Image, Stack, Title, Text, Center, Button } from "@mantine/core";

// needs to receive a post object.
function NewsPost() {

    const mockPost = {
        title: 'CHAMPION + FURIA',
        text: 'A Champion, icônica marca de sportswear, se une com a FURIA, uma das maiores organizações de esports do mundo, para uma coleção especial e limitada de camisetas e moletons, mixando gráficos e temas de ambas as marcas em uma verdadeira campanha colaborativa. ',
        image: 'https://furia.gg/wp-content/uploads/2024/08/Banner-Furia-Desk-scaled-2048x911.webp',
        alt: 'A imagem mostra três pessoas vestindo roupas de um collab das marcas "Champion" e "FURIA", posando contra um fundo azul.',
    }

    return (
        <Center>
            <Card 
                radius="lg" 
                withBorder
                h='90vh'
                w='80vw'
            >
                <Card.Section style={{ position: 'relative' }}>
                    <Image
                        src={mockPost.image}
                        alt={mockPost.alt}
                        h='70vh'
                    />
                    <Button 
                        style={{
                            position: 'absolute',
                            bottom: '20px',
                            right: '20px',
                        }}
                    >
                        LEIA MAIS
                    </Button>
                </Card.Section>
                <Card.Section>
                    <Stack p='md'>
                        <Title> 
                            {mockPost.title}
                        </Title>
                        <Text truncate='end'> 
                            {mockPost.text}
                        </Text>
                    </Stack>
                </Card.Section>
            </Card>
        </Center>
    );
}

export default NewsPost;