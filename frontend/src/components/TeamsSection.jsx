import { Title, Button, Center, SimpleGrid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowRight } from '@tabler/icons-react';
import TeamCard from "./TeamCard";
import axios from "axios";
import { useEffect, useState } from "react";

function TeamsSection() {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(false);

    const isMobile = useMediaQuery('(max-width: 540px)');

    // Fetching matches
    useEffect(() => {
        setLoading(true);
        axios.get('/api/teams')
            .then(res => {
                setTeams(res.data);
            })
            .catch(err => {
                console.error('Unhandled error when fetching teams.', err);
            })
            .finally(() => setLoading(false));
    }, [])

    const teamsData = teams.map((l, index) => (
        <TeamCard team={l} key={index}/>
    ));

    const teamButton = (
        <div 
            style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100%' 
            }}>
            <Button
                size={isMobile ? 'md' : 'lg'}
            >
                TODOS TIMES
                <IconArrowRight/>
            </Button>
        </div>
    );

    return (
        <>
        <Title ml='2vw' mb='20px' mt='50px'>
            Nossos Times
        </Title>
        <Center>
            <SimpleGrid cols={{base: 1, xs: 2}}>
                {teamsData}
                {teamButton}
            </SimpleGrid>
        </Center>
        </>
    );
}

export default TeamsSection;