import { Group, Stack, Text, Title, Anchor, Image, Divider } from "@mantine/core";
import { IconBrandInstagram, IconBrandFacebook, IconBrandTwitter,
    IconBrandYoutube, IconBrandTwitch} from '@tabler/icons-react';

function Footer() {

    const linkData = [
        { link: '', label: 'Loja'},
        { link: '', label: 'Times'},
        { link: '', label: 'Agenda'},
        { link: '', label: 'Parceiros'},
        { link: '', label: 'Contato'},
    ];

    const linkButtons = linkData.map((l, index) => (
        <Anchor key={index}>
            {l.label}
        </Anchor>
    ));

    const socialData = [
        {icon: <Image src='https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png' h={50}/>, link: ''},
        {icon: <IconBrandInstagram stroke={2} width={30} height={30}/>, link: ''},
        {icon: <IconBrandTwitter stroke={2} width={30} height={30}/>, link: ''},
        {icon: <IconBrandFacebook stroke={2} width={30} height={30}/>, link: ''},
        {icon: <IconBrandYoutube stroke={2} width={30} height={30}/>, link: ''},
        {icon: <IconBrandTwitch stroke={2} width={30} height={30}/>, link: ''},
    ];

    const socialButtons = socialData.map((l, index) => (
        <Anchor key={index}>
            {l.icon}
        </Anchor>
    ));

    return (
        <>
        <Divider mt='10px'/>
        <Stack p='10px'>
            <Title>
                Sobre nós    
            </Title> 
            <Text>
                Somos <strong>FURIA</strong>. Uma organização de esports que nasceu do desejo de
                representar o Brasil no CS e conquistou muito mais que isso: expandimos
                nossas ligas, disputamos os principais títulos, adotamos novos objetivos e
                ganhamos um propósito maior. Somos muito mais que o sucesso competitivo.
                Somos um <strong>movimento sociocultural</strong>.
            </Text>
            <Title>
                Links
            </Title>
            <Group justify='space-between' w='80vw'>
                {linkButtons}
            </Group>
            <Group justify='center' mt='20px'>
                {socialButtons}
            </Group>
            <Text ta='center'>
                2024 Furia. All Rights Reserved.
            </Text>
        </Stack>
        </>
    )
}

export default Footer;