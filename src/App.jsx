import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider as Chakra, chakra, isChakraTheme } from '@chakra-ui/react'

// ---------- IMPORTACION DE COMPONENTES ----------
// Estructura
import { Center, Box } from '@chakra-ui/react'

// Textos
import { Heading, Text } from '@chakra-ui/react'

// Card
import { Card, CardHeader, CardBody } from '@chakra-ui/react'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import InfoProd from './Components/InfoProd/InfoProd';

function App() {
  return (
    <Chakra>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/producto/:id" element={<InfoProd />} />
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Chakra>
  )
}

export default App
