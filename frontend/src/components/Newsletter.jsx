import { Button, Checkbox, Group, Stack, TextInput, Title } from "@mantine/core";
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { IconArrowRight } from '@tabler/icons-react';
import { useMediaQuery } from "@mantine/hooks";

function Newsletter() {

    const isMobile = useMediaQuery('(max-width: 768px)');

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            email: '',
            agreement: false,
        },
        validate: {
            name: isNotEmpty('O Nome é necessário.'),
            email: isEmail('Email inválido.'),
            agreement: isNotEmpty('Você deve concordar em receber emails.')
        }
    })

    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <>
        <Title ml='2vw' mt='50px' mb='10px'>
            Torne-se um Furioso
        </Title>
        <Stack
            component={'form'}
            onSubmit={form.onSubmit(onSubmit)}
            ml='2vw'
            mr='2vw'
            mt='10px'
        >
            <TextInput
                placeholder='Nome'
                {...form.getInputProps('name')}
            />
            <TextInput
                placeholder='Email'
                {...form.getInputProps('email')}
            />
            <Group ml='1vw'>
                <Checkbox 
                    label='Concordo em receber emails.'
                    {...form.getInputProps('agreement')}
                />
                <Button
                    type='submit'
                    size={isMobile ? 'sm' : 'lg'}
                >
                    ENVIAR
                    <IconArrowRight/>
                </Button>
            </Group>
        </Stack>
        </>
    )
}

export default Newsletter;