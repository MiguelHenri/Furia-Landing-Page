import { Title, Group, Button, Center } from "@mantine/core";
import StoreItem from "./StoreItem";

function StoreSection() {

    const items = Array.from({ length: 2 }, (_, index) => (
        <StoreItem key={index}/>
    ));

    return (
        <>
        <Title ml='3vw'>
            Loja
        </Title>
        <Group justify="center" gap='10vw'>
            {items}
        </Group>
        <Center mt='20px'>
            <Button>
                COMPRE AGORA
            </Button>
        </Center>
        </>
    );
}

export default StoreSection;