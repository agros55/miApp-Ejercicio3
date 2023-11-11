
import { useNavigate } from "react-router-dom";

// ---------- IMPORTACION DE COMPONENTES ----------
// Estructura
import { Box, Center, Flex } from '@chakra-ui/react'

// Textos y contenido
import { Heading, Text, Image, Button } from '@chakra-ui/react'

// Card
import { Card, CardHeader, CardBody } from '@chakra-ui/react'

const Producto = ({ Id, Imagen, Nombre, Precio }) => {
    const navigate = useNavigate();
    return (
        <Card minW="200px" maxW="300px" p="5px" m={2}>
            <CardHeader>
                <Image src={Imagen} alt={Nombre} w="90%" />
            </CardHeader>
            <CardBody display="flex" flexWrap="wrap" justifyContent="space-between">
                <Box>
                    <Heading fontSize={12}>{Nombre}</Heading>
                    <Heading fontSize={15}>{Precio}</Heading>
                </Box>
                <Button onClick={() => navigate("/producto/" + Id)}>VER MAS</Button>
            </CardBody>
        </Card>
    );
}

export default Producto;
