import { Card, Center, Group, Text } from "@mantine/core";
import { IconBrandValorant } from '@tabler/icons-react';

const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    
    // Utils to format timestamp
    const dateOptions = {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
    };
    const timeOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false, // 24-hour format
    };
    
    // Formatting date and time
    const formattedDate = date.toLocaleDateString('pt-BR', dateOptions);
    const formattedTime = date.toLocaleTimeString('pt-BR', timeOptions);
    
    return `${formattedDate} - ${formattedTime}h`;
};

function Match({ match }) {

    return (
        <Center>
            <Card
                radius="lg" 
                withBorder
                style={{ 
                    backgroundColor: '#403F3D',
                }}
                w={{base: '200px', xs: '300px', sm: '350px', md: '400px'}}
            >
                <Group justify='space-between'>
                    <Text c='furiagray.0' fz={{base:'14px', sm: '16px'}}>
                        {formatTimestamp(match.date)}
                    </Text>
                    {match.gameIcon}
                </Group>
                <Text fw={700} fz={{base:'16px', sm: '20px'}}>
                    {match.tournament}
                </Text>
                <Text fz={{base:'14px', sm: '18px'}}>
                    {match.player1} X {match.player2}
                </Text>
            </Card>
        </Center>
    );
}

export default Match;