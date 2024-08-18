import { Carousel } from '@mantine/carousel';
import NewsPost from './NewsPost';

function NewsCarousel() {

    return (
        <Carousel 
            loop 
            withControls={false} 
            withIndicators
            height='200px'
        >
            <Carousel.Slide>
                <NewsPost/>
            </Carousel.Slide>
            <Carousel.Slide>
                <NewsPost/>
            </Carousel.Slide>
            <Carousel.Slide>
                <NewsPost/>
            </Carousel.Slide>
        </Carousel>
    );
}

export default NewsCarousel;