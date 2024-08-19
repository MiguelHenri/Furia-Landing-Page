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

// this should receive an match object
function Match() {

    const mockMatch = {
        date: formatTimestamp(1692267600000),
        tournament: 'VCT AMERICAS 2024 - Stage 2',
        player1: 'FURIA Esports',
        player2: 'Leviatán',
        gameIcon: <IconBrandValorant color='#F2F0E9'/>,
    }

    return (
        <Center>
            <Card
                radius="lg" 
                withBorder
                style={{ 
                    backgroundColor: '#403F3D',
                }}
            >
                <Group justify='space-between'>
                    <Text c='furiagray.0'>
                        {mockMatch.date}
                    </Text>
                    {mockMatch.gameIcon}
                </Group>
                <Text fw={700}>
                    {mockMatch.tournament}
                </Text>
                <Text>
                    {mockMatch.player1} X {mockMatch.player2}
                </Text>
            </Card>
        </Center>
    );
}

export default Match;