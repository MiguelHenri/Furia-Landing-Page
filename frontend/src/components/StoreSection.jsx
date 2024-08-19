import { Title, Group, Button, Center } from "@mantine/core";
import StoreItem from "./StoreItem";
import { IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

function StoreSection() {

    const isMobile = useMediaQuery('(max-width: 768px)');

    const items = Array.from({ length: 2 }, (_, index) => (
        <StoreItem key={index}/>
    ));

    return (
        <>
        <Title ml='2vw' mb='20px'>
            Loja
        </Title>
        <Group justify="center" gap='10vw'>
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