
import { useNavigate } from "react-router-dom";

// ---------- IMPORTACION DE COMPONENTES ----------
// Estructura
import { Box, Center, Flex } from '@chakra-ui/react'

// Textos y contenido
import { Heading, Text, Image, Button } from '@chakra-ui/react'

// Card
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const Producto = ({ Id, Imagen, Nombre, Precio }) => {
    const navigate = useNavigate();
    return (
        <Card /* minW="20vw" maxW="300px" */ p="5px" m={2}>
            <CardHeader display="flex" justifyContent="center">
                <Image src={Imagen} alt={Nombre} minH="25vh" w="90%" />
            </CardHeader>
            <CardBody display="flex" flexWrap="wrap" justifyContent="space-between">
                <Box>
                    <Heading>{Nombre}</Heading>
                    <Heading>{Precio}</Heading>
                </Box>
            </CardBody>
            <CardFooter>
                <Button w="100%" bg="steelblue" color="white" borderRadius="5px" _hover={{ bg: "lightblue" }}
                    onClick={() => navigate("/producto/" + Id)} p="5px" fontSize={{ md: "3xl" }}>VER MAS</Button>
            </CardFooter>
        </Card>
    );
}

export default Producto;
