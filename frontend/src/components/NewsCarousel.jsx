import { Carousel } from '@mantine/carousel';
import NewsPost from './NewsPost';
import classes from './NewsCarousel.module.css';
import { useMediaQuery } from '@mantine/hooks';

function NewsCarousel() {

    const isMobile = useMediaQuery('(max-width: 768px)');

    const mockData = [
        {
            title: 'CHAMPION + FURIA',
            text: 'A Champion, icônica marca de sportswear, se une com a FURIA, uma das maiores organizações de esports do mundo, para uma coleção especial e limitada de camisetas e moletons, mixando gráficos e temas de ambas as marcas em uma verdadeira campanha colaborativa. ',
            image: 'https://furia.gg/wp-content/uploads/2024/08/Banner-Furia-Desk-scaled-2048x911.webp',
            alt: 'A imagem mostra três pessoas vestindo roupas de um collab das marcas "Champion" e "FURIA", posando contra um fundo azul.',
        },
        {
            title: 'GUERRI EM COLOGNE?',
            text: 'Agora head de esports da FURIA, Nicholas "gueri" Nogueira acompanhou a equipe de CS2 na IEM Cologne, o que chamou a atenção do público já que ele não é mais o coach. Neste domingo, o também sócio da organização explicou o por que esteve junto com o time na "Catedral" do Counter-Strike.',
            image: 'https://img-cdn.hltv.org/gallerypicture/SnUAZeF02_zuwY_LAN2STx.jpg?ixlib=java-2.1.0&w=1200&s=b87d9d29dbe0dce092cf170d2c75ca3e',
            alt: '',
        },
        {
            title: 'HELLMANS E FURIA',
            text: `A Hellmann's anunciou que é a nova parceria da Furia, uma das principais organizações de eSports global. Com o acordo, as marcas irão criar conteúdos e unir forças para participar de competições e promover ações proprietárias.`,
            image: 'https://assets.propmark.com.br/uploads/2024/08/HELLMANN-S---AN-NCIO-PARCERIA-COM-FURIA.png',
            alt: '',
        }
    ]

    const slides = mockData.map((l, index) => (
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