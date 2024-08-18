import { Card, Image } from "@mantine/core";

function NewsPost() {

    return (
        <Card shadow="sm" radius="md" withBorder>
            <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                alt="Norway"
            />
        </Card>
    );
}

export default NewsPost;