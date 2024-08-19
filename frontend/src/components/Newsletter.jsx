import { Button, Checkbox, Group, Stack, TextInput, Title } from "@mantine/core";
import { isEmail, isNotEmpty, useForm } from '@mantine/form';

function Newsletter() {

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
        <Title ml='3vw' mt='10px'>
            Torne-se um Furioso
        </Title>
        <Stack
            component={'form'}
            onSubmit={form.onSubmit(onSubmit)}
            w='90vw'
            ml='2vw'
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
            <Group justify='space-between'>
                <Checkbox 
                    label='Concordo em receber emails.'
                    {...form.getInputProps('agreement')}
                />
                <Button
                    type='submit'
                >
                    ENVIAR
                </Button>
            </Group>
        </Stack>
        </>
    )
}

export default Newsletter;