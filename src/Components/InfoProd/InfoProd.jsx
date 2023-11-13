import { useParams } from "react-router-dom";
import Products from '../Productos/data';

// ---------- IMPORTACION DE COMPONENTES ----------
// Estructura
import { Box, Center, Flex } from '@chakra-ui/react'

// Textos y contenido
import { Heading, Text, Image, Button } from '@chakra-ui/react'

// Card
import { Card, CardHeader, CardBody } from '@chakra-ui/react'

const InfoProd = () => {
    let { id } = useParams();;
    let Product = Products.find(prod => prod.Id == id);
    return (
        <Center mt={5} flexWrap={{ base: "wrap", lg: "nowrap" }}>
            <Image src={Product.Imagen} alt={Product.Nombre} p="0 20px" minW={{ base: "90vw", lg: "40vw" }} />
            <Box p={10} w={{ base: "90%", lg: "50%" }}>
                <Heading>{Product.Nombre}</Heading>
                <Heading>{Product.Precio}</Heading>
                <Text mt={5}>{Product.Descripcion}</Text>
                <Heading fontSize={14} mt={5}>Cantidad disponible: </Heading>
                <Text>{Product.Stock}</Text>
                <Heading fontSize={14} mt={5}>SKU: </Heading>
                <Text>{Product.SKU}</Text>
            </Box>
        </Center>
    );
}

export default InfoProd;
{/* <div className="InfoProd">
        <img src={Product.Imagen2} alt="" />
        <div className="Info">
            <h1 className="Nombre">{Product.Nombre}</h1>
            <p className="Precio">{Product.Precio}</p>
            <h3 className="Label">Descripción: </h3>
            <p className="Descripcion">{Product.Descripcion}</p>
            <h3 className="Label">Cantidad disponible: </h3>
            <p className="Stock">{Product.Stock}</p>
            <h3 className="Label">SKU: </h3>
            <p className="SKU">{Product.SKU}</p>
        </div>
    </div> */}