import { useDisclosure } from "@mantine/hooks";
import { Anchor, Burger, Divider, Group, Image } from "@mantine/core";
import { IconShoppingBag } from '@tabler/icons-react';

function Header() {

    const [opened, {toggle}] = useDisclosure();

    const data = [
        { link: '', label: 'Loja'},
        { link: '', label: 'Times'},
        { link: '', label: 'Agenda'},
        { link: '', label: 'Parceiros'},
        { link: '', label: 'Contato'},
    ];

    const thisWebsite = 'http://localhost:5173'

    return (
        <>
        <Group justify="space-between" mt='10px' ml='10px' mr='10px'>
            <Burger opened={opened} onClick={toggle} size="md"/>
            <Anchor href={thisWebsite}>
                <Image 
                    src='https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png'
                    h={50}
                />
            </Anchor>
            <Anchor c='black'>
                <IconShoppingBag stroke={2} width={30} height={30}/>
            </Anchor>
        </Group>

        <Divider mt='10px'/>
        </>
    )
}

export default Header;