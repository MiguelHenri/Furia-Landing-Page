import { useDisclosure } from "@mantine/hooks";
import { Anchor, Burger, Group, Image } from "@mantine/core";
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

    return (
        <Group justify="space-between" h={70}>
            <Burger opened={opened} onClick={toggle} size="md" ml={30}/>
            <Image 
                src='https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png'
                h={60}
            />
            <Anchor mr={30} c='black'>
                <IconShoppingBag stroke={2} width={30} height={30}/>
            </Anchor>
        </Group>
    )
}

export default Header;