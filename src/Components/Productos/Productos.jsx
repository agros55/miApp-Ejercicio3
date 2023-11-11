

// ---------- IMPORTACION DE COMPONENTES ----------
// Estructura
import { Center, Box, Button } from '@chakra-ui/react'

// Textos y contenido
import { Heading, Text, Image } from '@chakra-ui/react'

// Card
import { Card, CardHeader, CardBody } from '@chakra-ui/react'

import Producto from '../Producto/Producto';
import Products from './data';

const Productos = () => {
    // Trayendo la lista de productos de data.js
    const Productos = Products;

    // Creando tarjeta de Producto por cada registro
    const listProducts = Productos.map(Product =>
        <Producto
            key={Product.Id}
            Id={Product.Id}
            Imagen={Product.Imagen}
            Nombre={Product.Nombre}
            Precio={Product.Precio}
        />
    )

    return (
        // Devuelve una sección con los Productos
        <Center flexWrap="wrap">
            {listProducts}
        </Center>
    );
}

export default Productos;
