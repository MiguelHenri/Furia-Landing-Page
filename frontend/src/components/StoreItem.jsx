import { Image, Stack, Text } from "@mantine/core";

// this should receive an item object
function StoreItem() {

    const mockItem = {
        title: 'CAMISETA CHAMPION X FURIA MASCOT HOODIE PRETA',
        price: 'R$179,99',
        image: 'https://furia.gg/wp-content/uploads/2024/08/02-7.png',
        alt: 'A imagem mostra o influenciador Brino utilizando uma camiseta do collab da Champion + FURIA. A camiseta em questão mostra a logo da FURIA com capuz e o título de ambas marcas.',
    }

    return (
        <Stack w={{base: '40vw', sm: '30vw', md: '25vw', lg: '20vw'}}>
            <Image
                src={mockItem.image}
                alt={mockItem.alt}
            />
            <Text fw={700}>
                {mockItem.title}
            </Text>
            <Text c='furiagray.0'>
                {mockItem.price}
            </Text>
        </Stack>
    );
}

export default StoreItem;