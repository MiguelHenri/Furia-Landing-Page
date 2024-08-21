import { Card, Image, Overlay, Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";

function TeamCard({ team }) {

    const { hovered, ref } = useHover();

    return (
        <Card 
            withBorder
            w={{ base:'50vw', xs: '30vw', md: '25vw' }}
            h={{ base:'30vw', xs: '20vw', md: '15vw' }}
            style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#403F3D'
            }}
            ref={ref}
            component='a'
            href={team.link}
        >
            <Card.Section>
                <Image 
                    src={team.image_path}
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
                            {team.title}
                        </Title>
                    </Overlay>
                )}
            </Card.Section>
        </Card>
    );
}

export default TeamCard;