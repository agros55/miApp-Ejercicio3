import { ChakraProvider as Chakra } from '@chakra-ui/react'
import Productos from '../Productos/Productos';

// ---------- IMPORTACION DE COMPONENTES ----------
// Estructura
import { Center, Box, Button } from '@chakra-ui/react'

// Textos y contenido
import { Heading, Text, Image } from '@chakra-ui/react'

// Card
import { Card, CardHeader, CardBody } from '@chakra-ui/react'

const Main = () => {
    return (
        <Center flexDir="column" m="25px 0">
            <Heading>Productos</Heading>
            <Productos />
        </Center>
    );
}

export default Main;
