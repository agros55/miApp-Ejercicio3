
// ---------- IMPORTACION DE COMPONENTES ----------
// Estructura
import { Center, Box, Image } from '@chakra-ui/react'

// Navbar

import { Link } from '@chakra-ui/react'

// Textos
import { Heading, Text } from '@chakra-ui/react'

// Card
import { Card, CardHeader, CardBody } from '@chakra-ui/react'


function Header() {
    return (

        <Center h="15vh" bg="steelblue" justifyContent="space-around">
            <Image src="./img/Logo.png" alt="Logo" h="80%" />
            <Box>
                <Link color="white" borderRadius="5px" p="5px" m="5px" href="/" _hover={{ bg: "lightblue" }}>Inicio</Link>
                <Link color="white" borderRadius="5px" p="5px" m="5px" href="https://github.com/agros55/myapp-Ejercicio3.git" target="_blank" _hover={{ bg: "lightblue" }}>Repositorio</Link>
            </Box>
        </Center>

    )
}

export default Header