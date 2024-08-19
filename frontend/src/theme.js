import { createTheme } from "@mantine/core";

const theme = createTheme({

    fontFamily: 'Roboto, sans-serif',

    colors: {
        primary: ['#0D0D0D'],
        secondary: ['#F2F0E9'],
        furiagray: ['#A6A49F', '#73726E', '#403F3D'],
    },

    components: {
        Text: {
            defaultProps: {
                c: 'secondary.0'
            }
        },
        Title: {
            defaultProps: {
                c: 'secondary.0'
            }
        },
        Divider: {
            defaultProps: {
                color: 'furiagray.1'
            }
        },
        Burger: {
            defaultProps: {
                color: 'secondary.0'
            }
        },
        Anchor: {
            defaultProps: {
                color: 'secondary.0',
                underline: 'always',
            }
        },
        TextInput: {
            styles: (theme) => ({
                input: {
                    backgroundColor: theme.colors.furiagray[2],
                    color: theme.colors.secondary[0],
                    borderColor: theme.colors.primary[0],
                },
            }),
            defaultProps: {
                size: 'md',
                w: {base: '90vw', sm: '80vw', md: '80vw', lg:'70vw'},
            }
        },
        Checkbox: {
            defaultProps: {
                color: 'furiagray.0',
            }
        },
        Button: {
            styles: (theme) => ({
                root: {
                    backgroundColor: theme.colors.furiagray[2],
                    color: theme.colors.secondary[0],
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                        backgroundColor: theme.colors.furiagray[1],
                    },
                },
            }),
            defaultProps: {
                size: 'md',
            },
        }
    },

});

export default theme;