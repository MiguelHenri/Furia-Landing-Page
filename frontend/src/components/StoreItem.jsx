import { Image, Stack, Text } from "@mantine/core";

// this should receive an item object
function StoreItem({ item }) {

    return (
        <Stack w={{base: '40vw', sm: '30vw', md: '25vw', lg: '20vw'}}>
            <Image
                src={item.image}
                alt={item.alt}
            />
            <Text fw={700}>
                {item.title}
            </Text>
            <Text c='furiagray.0'>
                {item.price}
            </Text>
        </Stack>
    );
}

export default StoreItem;