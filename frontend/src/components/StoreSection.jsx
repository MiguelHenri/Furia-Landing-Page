import { Title, Group, Button, Center } from "@mantine/core";
import StoreItem from "./StoreItem";
import { IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

function StoreSection() {

    const isMobile = useMediaQuery('(max-width: 768px)');

    // should fetch to get data
    const mockData = [
        {
            title: 'CAMISETA CHAMPION X FURIA MASCOT HOODIE PRETA',
            price: 'R$179,99',
            image: 'https://furia.gg/wp-content/uploads/2024/08/02-7.png',
            alt: 'A imagem mostra o influenciador Brino utilizando uma camiseta do collab da Champion + FURIA. A camiseta em questão mostra a logo da FURIA com capuz e o título de ambas marcas.',
        },
        {
            title: 'CAMISETA CHAMPION X FURIA COLLEGE PRETA',
            price: 'R$179,99',
            image: 'https://furia.gg/wp-content/uploads/2024/08/01-10.png',
            alt: 'A imagem mostra o influenciador Brino utilizando uma camiseta do collab da Champion + FURIA. A camiseta em questão mostra uma logo personalizada da furia e o título CHAMPION no estilo college norte-americano.',
        },
    ]

    const items = mockData.map((l, index) => (
        <StoreItem key={index} item={l}/>
    ));

    return (
        <>
        <Title ml='2vw' mb='20px'>
            Loja
        </Title>
        <Group justify="center" align='flex-start' gap='10vw'>
            {items}
        </Group>
        <Center mt='20px'>
            <Button
                size={isMobile ? 'md' : 'lg'}
                component="a"
                href="https://furia.gg/"
            >
                COMPRE AGORA
                <IconArrowRight/>
            </Button>
        </Center>
        </>
    );
}

export default StoreSection;