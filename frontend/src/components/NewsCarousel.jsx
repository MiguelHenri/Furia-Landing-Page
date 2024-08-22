import { Carousel } from '@mantine/carousel';
import NewsPost from './NewsPost';
import classes from './NewsCarousel.module.css';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import axios from "axios"
import { IconPencil } from '@tabler/icons-react';
import { ActionIcon, Stack } from '@mantine/core';
import { useAuth } from '../contexts/useAuth';
import { modals } from '@mantine/modals';
import EditNewsModal from './Admin/EditNewsModal';

function NewsCarousel() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    const { token } = useAuth();

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
        <Stack align='center'>
            {token && (
            <ActionIcon onClick={() => {
                modals.open({
                    title: 'Editar notícias',
                    c: 'primary.0',
                    children: <EditNewsModal />,
                })
            }}>
                <IconPencil/>
            </ActionIcon>
            )}
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
        </Stack>
    );
}

export default NewsCarousel;