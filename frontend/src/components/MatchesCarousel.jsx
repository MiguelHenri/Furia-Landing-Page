import { Carousel } from '@mantine/carousel';
import Match from './Match';
import classes from './MatchesCarousel.module.css';
import { useMediaQuery } from '@mantine/hooks';

function MatchesCarousel() {

    const isMobile = useMediaQuery('(max-width: 550px)');

    const slides = Array.from({ length: 3 }, (_, index) => (
        <Carousel.Slide 
            key={index}
        >
            <Match/>
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