import { useDisclosure } from "@mantine/hooks";
import { Anchor, Burger, Collapse, Divider, Group, Image, Stack } from "@mantine/core";
import { IconAddressBook, IconCalendarMonth, IconHeartHandshake,
    IconShoppingBag, IconUsersGroup } from '@tabler/icons-react';

function Header() {

    const [opened, { toggle }] = useDisclosure(false, {
        onOpen: () => (document.body.style.overflow = 'hidden'),
        onClose: () => (document.body.style.overflow = ''),
    });

    const data = [
        { link: '', label: 'Loja', icon: <IconShoppingBag/>},
        { link: '', label: 'Times', icon: <IconUsersGroup/>},
        { link: '', label: 'Agenda', icon: <IconCalendarMonth/>},
        { link: '', label: 'Parceiros', icon: <IconHeartHandshake/>},
        { link: '', label: 'Contato', icon: <IconAddressBook/>},
    ];

    const menuLinks = data.map((l, index) => (
        <Anchor key={index} href={l.link} size='lg'>
            <Group>
                {l.icon}
                {l.label}
            </Group>
        </Anchor>
    ))

    return (
        <>
        <Group justify="space-between" mt='10px' ml='10px' mr='10px'>
            <Burger opened={opened} onClick={toggle} size="md"/>
            <Anchor href="">
                <Image 
                    src='https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png'
                    h='50px' w='50px'
                />
            </Anchor>
            <Anchor href="https://furia.gg/">
                <IconShoppingBag stroke={2} width={30} height={30}/>
            </Anchor>
        </Group>

        {opened && (
        <div // Shadow overlay
            onClick={toggle}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 998,
            }}
        />
        )}

        <Collapse // Collapsed sidebar
            in={opened}
            style={{ 
                position: 'fixed',
                width: '300px',
                zIndex: 999,
            }}
            >
            <Stack 
                w='300px'
                h='100vh'
                bg='primary.0'
                p='20px'
            >
                <Burger opened={opened} onClick={toggle} size="md"/>
                {menuLinks}
            </Stack>
        </Collapse>
        <Divider mt='10px'/>
        </>
    )
}

export default Header;