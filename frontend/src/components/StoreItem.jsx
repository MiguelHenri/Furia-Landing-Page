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
        <Stack w='30vw'>
            <Image
                src={mockItem.image}
                alt={mockItem.alt}
            />
            <Text>
                {mockItem.title}
            </Text>
            <Text>
                {mockItem.price}
            </Text>
        </Stack>
    );
}

export default StoreItem;