import { useForm, isNotEmpty } from "@mantine/form"
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../contexts/useAuth";
import { modals } from "@mantine/modals";
import { Button, Stack, TextInput } from "@mantine/core";

function EditNewsModal({ news }) {
    const [loading, setLoading] = useState(false);

    const { token } = useAuth();

    const form = useForm({
        mode: 'uncontrolled',

        initialValues: {
            title: '',
            text: '',
            link: '',
            image_path: '',
            alt: '',
        },

        validate: {
            title: isNotEmpty('Título é necessário.'),
            text: isNotEmpty('Texto é necessário.'),
            link: isNotEmpty('Link é necessário.'),
            image_path: isNotEmpty('Imagem é necessária.')
        }
    })

    function onSubmit(values) {
        setLoading(true);
        axios.post('/api/news', values, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(_ => {
            modals.closeAll();
        })
        .catch(err => {
            console.error('Unhandled error when editing news.', err);
        })
        .finally(() => setLoading(false));
    }

    return (
        <Stack component='form' onSubmit={form.onSubmit(onSubmit)}>
            <TextInput
                placeholder='Título'
                {...form.getInputProps('title')}
            />
            <TextInput
                placeholder='Texto descritivo'
                {...form.getInputProps('text')}
            />
            <TextInput
                placeholder='Link da notícia'
                {...form.getInputProps('link')}
            />
            <TextInput
                placeholder='Imagem'
                {...form.getInputProps('image_path')}
            />
            <TextInput
                placeholder='Texto Alternativo'
                {...form.getInputProps('alt')}
            />

            <Button type='submit' loading={loading}>
                SALVAR
            </Button>
        </Stack>
    )
}

export default EditNewsModal;