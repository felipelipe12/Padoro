import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'original.900',
                color: 'original.50',
            },
        },
    },
    colors: {
        original: {
            50: '#ECF0F1',
            100: '#BDC3C7',
            200: '#95999C',
            300: '#818486',
            400: '#6D6F70',
            500: '#515C67',
            600: '#435363',
            700: '#34495E',
            800: '#2A3A4B',
            900: '#1F2B38'
        },
        theme: {
            50: '#E3E7F1',
            100: '#C6CBEF',
            200: '#8186D5',
            300: '#494CA2',
            400: '#2f3169',
        },
    },
});