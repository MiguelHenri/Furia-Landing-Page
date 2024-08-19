import { Carousel } from '@mantine/carousel';
import NewsPost from './NewsPost';

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
            >
                {slides}
            </Carousel>
        </div>
    );
}

export default NewsCarousel;