import { Carousel } from '@mantine/carousel';
import Match from './Match';
import classes from './MatchesCarousel.module.css';

function MatchesCarousel() {

    const slides = Array.from({ length: 3 }, (_, index) => (
        <Carousel.Slide 
            key={index}
        >
            <Match/>
        </Carousel.Slide>
    ));

    return (
        <div style={{ width: '30vw' }}>
            <Carousel
                classNames={classes}
            >
                {slides}
            </Carousel>
        </div>
    );
}

export default MatchesCarousel;