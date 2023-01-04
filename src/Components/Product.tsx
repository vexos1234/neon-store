import React, { useEffect, useState } from 'react'
import { CircularProgress, CircularProgressLabel, Card, CardHeader, CardBody, CardFooter, Container, Heading, SimpleGrid, Image, Stack, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import {
  useParams,
} from "react-router-dom";
import axios from "axios";


export const Product = () => {

  const [product, setProduct] = useState<IProduct>();

  const { id } = useParams()
    useEffect(() => {



    const fetchData = async () => {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(data);
      console.log(data);
   
    };

    fetchData();
    }, []);

    interface IProduct {
      title: string;
      description: string;
      id: number;
      image: string;
      price: number;
    }

  if (!product) return (
    <CircularProgress isIndeterminate color='green.300' />
  );


  return (

    
    <Container>
      <Heading>Producto</Heading>
        <SimpleGrid columns={2} gap={4}>
            <Card maxW="sm">
                <CardBody>
                <Image
                    src={product.image}
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
          </SimpleGrid>
  </Container>
)
}
