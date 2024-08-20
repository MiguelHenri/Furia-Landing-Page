import { Carousel } from '@mantine/carousel';
import Match from './Match';
import classes from './MatchesCarousel.module.css';
import { useMediaQuery } from '@mantine/hooks';
import { IconBrandValorant } from '@tabler/icons-react';

function MatchesCarousel() {

    const isMobile = useMediaQuery('(max-width: 550px)');

    // should fetch data and get ordered by date timestamp
    const mockData = [
        {
            date: 1729357200000, // timestamp
            tournament: 'VCT AMERICAS 2024 - Stage 2',
            player1: 'FURIA Esports',
            player2: 'Leviatán',
            gameIcon: <IconBrandValorant color='#F2F0E9'/>,
        },
        {
            date: 1729530000000,
            tournament: 'VCT AMERICAS 2024 - Stage 2',
            player1: 'FURIA Esports',
            player2: 'G2 Esports',
            gameIcon: <IconBrandValorant color='#F2F0E9'/>,
        },
        {
            date: 1729702800000,
            tournament: 'VCT AMERICAS 2024 - Stage 2',
            player1: 'FURIA Esports',
            player2: '100 Thieves',
            gameIcon: <IconBrandValorant color='#F2F0E9'/>,
        },
    ]

    const slides = mockData.map((l, index) => (
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