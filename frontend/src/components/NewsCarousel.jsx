import { Carousel } from '@mantine/carousel';
import NewsPost from './NewsPost';
import classes from './NewsCarousel.module.css';
import { useMediaQuery } from '@mantine/hooks';

function NewsCarousel() {

    const isMobile = useMediaQuery('(max-width: 768px)');

    const slides = Array.from({ length: 3 }, (_, index) => (
        <Carousel.Slide 
            key={index}
        >
            <div style={{ 
                width: isMobile? '90vw' : '85vw', 
                height: isMobile? '65vh' : '90vh',
            }}>
                <NewsPost />
            </div>
        </Carousel.Slide>
    ));

    return (
        <div style={{ 
            width: isMobile? '90vw' : '85vw',
            height: isMobile? '65vh' : '90vh',
        }}>
            <Carousel 
                withControls={false} 
                withIndicators
                classNames={classes}
            >
                {slides}
            </Carousel>
        </div>
    );
}

export default NewsCarousel;