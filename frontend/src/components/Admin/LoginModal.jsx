import { useForm, isNotEmpty } from "@mantine/form"
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../contexts/useAuth";
import { modals } from "@mantine/modals";
import { Button, PasswordInput, Stack, TextInput, Text } from "@mantine/core";

function LoginModal() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { saveLogin, token, clearAuth } = useAuth();

    const form = useForm({
        mode: 'uncontrolled',

        initialValues: {
            username: '',
            password: '',
        },

        validate: {
            username: isNotEmpty('Usuário é necessário.'),
            password: isNotEmpty('Senha é necessária.'),
        }
    })

    function onSubmit(values) {
        setLoading(true);
        axios.post('/api/admins/login', values)
        .then(res => {
            const { access_token } = res.data;
            saveLogin(access_token);
            modals.closeAll();
        })
        .catch(err => {
            clearAuth();
            if (err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError('Ocorreu um erro desconhecido.');
            }
            console.error('Unhandled error when logging in.', err);
        })
        .finally(() => setLoading(false));
    }

    // Log out
    if (token) return (
        <Stack align='center' p='20px'>
            <Text c='primary.0'>
                Usuário já logado.
            </Text>
            <Button onClick={() => {
                clearAuth();
                modals.closeAll();
            }} 
                bg='red'
            >
                SAIR
            </Button>
        </Stack>
    );

    return (
        <Stack component='form' onSubmit={form.onSubmit(onSubmit)} align='center' p='20px'>
            <TextInput
                w='260px'
                placeholder='Usuário'
                {...form.getInputProps('username')}
            />
            <PasswordInput
                w='260px'
                placeholder='Senha'
                {...form.getInputProps('password')}
            />
            {error && <Text c='red'>{error}</Text>}
            <Button type='submit' loading={loading}>
                ENTRAR
            </Button>
        </Stack>
    );
}

export default LoginModal;