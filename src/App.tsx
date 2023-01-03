import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  Router,
} from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Pricing from "./Components/Pricing";
import Navbar from "./navbar";

interface IProduct {
  title: string;
  description: string;
  id: number;
  image: string;
  price: number;
}


function App() {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    };

    fetchData();
  }, []);

  const handleClick = () => {
    console.log('hello hello');
  }

  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>  
  </div>

  return (
    <Container>
        <Navbar />
      <Heading>Productos</Heading>

      <SimpleGrid columns={2} gap={4}>
        {products.map((product) => (
          <Card maxW="sm">
            <CardBody>
              <Image
                src={product.image}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                width="100%"
                height="250px"
                objectFit="cover"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{product.title}</Heading>
                <Text maxHeight="250px" overflowY="scroll">
                  {product.description}
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  {product.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button onClick={handleClick} variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default App;