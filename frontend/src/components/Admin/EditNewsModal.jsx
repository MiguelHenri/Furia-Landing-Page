import { useForm, isNotEmpty } from "@mantine/form"
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/useAuth";
import { modals } from "@mantine/modals";
import { Button, Stack, TextInput, Text, SegmentedControl, 
    LoadingOverlay, Image, FileButton} from "@mantine/core";

function EditNewsModal() {
    const [loading, setLoading] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [newsNumber, setNewsNumber] = useState(1);
    const [imagePath, setImagePath] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

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

    useEffect(() => {
        setLoading(true);
        axios.get(`/api/news/${newsNumber}`)
            .then(res => {
                form.setValues({
                    title: res.data.title || '',
                    text: res.data.text || '',
                    link: res.data.link || '',
                    image_path: res.data.image_path || '',
                    alt: res.data.alt || '',
                });
                setImagePath(res.data.image_path);
            })
            .catch(err => {
                setError('Erro ao obter a notícia.')
                console.error('Unhandled error getting new from id.', err);
            })
            .finally(() => setLoading(false));
    }, [newsNumber]);

    function onSubmit(values) {
        setButtonLoading(true);
        values.image = file;
        axios.putForm(`/api/news/${newsNumber}`, values, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(_ => {
            modals.closeAll();
        })
        .catch(err => {
            setError('Erro ao editar notícia.');
            console.error('Unhandled error when editing news.', err);
        })
        .finally(() => setButtonLoading(false));
    }

    return (
        <Stack component='form' onSubmit={form.onSubmit(onSubmit)} align='center'>
            <LoadingOverlay visible={loading}/>
            <Text c='primary.0'>
                Qual notícia você deseja atualizar?
            </Text>
            <SegmentedControl
                data={[
                    { label: '1', value: '1' },
                    { label: '2', value: '2' },
                    { label: '3', value: '3' },
                ]}
                withItemsBorders={false}
                w="200px"
                color="furiagray.2"
                value={String(newsNumber)}
                onChange={(value) => setNewsNumber(parseInt(value, 10))}
            />
            <TextInput
                w='260px'
                labelProps={{ style: { fontWeight: 'normal' } }}
                label='Título'
                {...form.getInputProps('title')}
            />
            <TextInput
                w='260px'
                labelProps={{ style: { fontWeight: 'normal' } }}
                label='Texto descritivo'
                {...form.getInputProps('text')}
            />
            <TextInput
                w='260px'
                labelProps={{ style: { fontWeight: 'normal' } }}
                label='Link da notícia'
                {...form.getInputProps('link')}
            />
            {imagePath && (
                <Image
                    src={imagePath}
                    w='260px'
                />
            )}
            <FileButton 
                accept="image/png,image/jpeg,image/webp" 
                onChange={(uploadedFile) => {
                    setFile(uploadedFile);
                    setImagePath(URL.createObjectURL(uploadedFile));
                    // this may leak memory
                }}
            >
                {(props) => <Button {...props}>CARREGAR IMAGEM</Button>}
            </FileButton>
            <TextInput
                w='260px'
                labelProps={{ style: { fontWeight: 'normal' } }}
                label='Texto Alternativo'
                {...form.getInputProps('alt')}
            />
            {error && <Text c='red'>{error}</Text>}
            <Button type='submit' loading={buttonLoading} bg='blue'>
                SALVAR
            </Button>
        </Stack>
    )
}

export default EditNewsModal;