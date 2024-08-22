import { Image, Stack, Text, Anchor } from "@mantine/core";

function StoreItem({ item }) {

    return (
        <Stack w={{base: '40vw', sm: '30vw', md: '25vw', lg: '20vw'}}>
            <Anchor href={item.link}>
                <Image
                    src={item.image_path}
                    alt={item.alt}
                />
            </Anchor>
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