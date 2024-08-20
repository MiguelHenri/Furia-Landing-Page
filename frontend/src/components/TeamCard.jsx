import { Card, Image, Overlay, Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";

function TeamCard({ team }) {

    const { hovered, ref } = useHover();

    const { image, name } = team;

    return (
        <Card 
            withBorder
            w={{ base:'35vw', xs: '30vw', md: '25vw' }}
            h={{ base:'23vw', xs: '20vw', md: '15vw' }}
            style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#403F3D'
            }}
            ref={ref}
        >
            <Card.Section>
                <Image 
                    src={image}
                    fit='cover'
                />
                {hovered && (
                    <Overlay
                        color='primary.0'
                        backgroundOpacity={0.7}
                        zIndex={1}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <Title order={2}>
                            {name}
                        </Title>
                    </Overlay>
                )}
            </Card.Section>
        </Card>
    );
}

export default TeamCard;