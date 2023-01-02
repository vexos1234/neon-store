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

interface IProduct {
  title: string;
  description: string;
  id: number;
  image: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);


  return (
    <Container>
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
                <Button variant="solid" colorScheme="blue">
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