import { Title, Group, Button, Center } from "@mantine/core";
import StoreItem from "./StoreItem";
import { IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import axios from "axios";
import { useEffect, useState } from "react";

function StoreSection() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const isMobile = useMediaQuery('(max-width: 768px)');

    // Fetching store items
    useEffect(() => {
        setLoading(true);
        axios.get('/api/store')
            .then(res => {
                setItems(res.data);
            })
            .catch(err => {
                console.error('Unhandled error when fetching store items.', err);
            })
            .finally(() => setLoading(false));
    }, [])

    const data = items.map((l, index) => (
        <StoreItem key={index} item={l}/>
    ));

    return (
        <>
        <Title ml='2vw' mb='20px'>
            Loja
        </Title>
        <Group justify="center" align='flex-start' gap='10vw'>
            {data}
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