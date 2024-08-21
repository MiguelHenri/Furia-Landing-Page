import { Carousel } from '@mantine/carousel';
import NewsPost from './NewsPost';
import classes from './NewsCarousel.module.css';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import axios from "axios"

function NewsCarousel() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    const isMobile = useMediaQuery('(max-width: 768px)');

    // Fetching news posts
    useEffect(() => {
        setLoading(true);
        axios.get('/api/news')
            .then(res => {
                setNews(res.data);
            })
            .catch(err => {
                console.error('Unhandled error when fetching news.', err);
            })
            .finally(() => setLoading(false));
    }, [])

    const slides = news.map((l, index) => (
        <Carousel.Slide 
            key={index}
        >
            <div style={{ 
                width: isMobile? '90vw' : '85vw', 
                height: isMobile? '65vh' : '90vh',
            }}>
                <NewsPost post={l}/>
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
                slideGap='sm'
            >
                {slides}
            </Carousel>
        </div>
    );
}

export default NewsCarousel;