import { Carousel } from '@mantine/carousel';
import NewsPost from './NewsPost';

function NewsCarousel() {

    return (
        <Carousel 
            height={200} 
            slideGap="md" 
            loop 
            withControls={false} 
            withIndicators
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