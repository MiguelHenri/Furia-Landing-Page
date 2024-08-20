import { Card, Image, Stack, Title, Text, Center, Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

function NewsPost({ post }) {

    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <Center>
            <Card 
                radius="xl"
                h={{base:'60vh', sm:'85vh'}}
                w={{base:'90vw', sm:'85vw'}}
            >
                <Card.Section style={{ position: 'relative' }}>
                    <Image
                        src={post.image}
                        alt={post.alt}
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
                        <Title c='primary.0' order={isMobile? 2 : 1} lineClamp={1}> 
                            {post.title}
                        </Title>
                        <Text truncate='end' c='primary.0'> 
                            {post.text}
                        </Text>
                    </Stack>
                </Card.Section>
            </Card>
        </Center>
    );
}

export default NewsPost;