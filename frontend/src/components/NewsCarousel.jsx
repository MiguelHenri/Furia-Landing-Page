import { Carousel } from '@mantine/carousel';
import NewsPost from './NewsPost';
import classes from './NewsCarousel.module.css';

function NewsCarousel() {

    const slides = Array.from({ length: 3 }, (_, index) => (
        <Carousel.Slide 
            key={index}
        >
            <NewsPost />
        </Carousel.Slide>
    ));

    return (
        <div style={{ width: '80vw', height: '90vh' }}>
            <Carousel 
                withControls={false} 
                withIndicators
                slideGap='5px'
                classNames={classes}
            >
                {slides}
            </Carousel>
        </div>
    );
}

export default NewsCarousel;