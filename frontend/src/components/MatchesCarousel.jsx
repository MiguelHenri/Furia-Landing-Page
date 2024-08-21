import { Carousel } from '@mantine/carousel';
import Match from './Match';
import classes from './MatchesCarousel.module.css';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MatchesCarousel() {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(false);

    const isMobile = useMediaQuery('(max-width: 550px)');

    // Fetching matches
    useEffect(() => {
        setLoading(true);
        axios.get('/api/matches')
            .then(res => {
                setMatches(res.data);
            })
            .catch(err => {
                console.error('Unhandled error when fetching matches.', err);
            })
            .finally(() => setLoading(false));
    }, [])

    const slides = matches.map((l, index) => (
        <Carousel.Slide 
            key={index}
        >
            <Match match={l}/>
        </Carousel.Slide>
    ));

    return (
        <div style={{ width: isMobile ? '300px' : '550px'}}>
            <Carousel
                classNames={classes}
            >
                {slides}
            </Carousel>
        </div>
    );
}

export default MatchesCarousel;