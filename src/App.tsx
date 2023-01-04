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
import { Product } from "./Components/Product";
import Navbar from "./navbar";




function App() {

  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/About" element={<About />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>

    </div>
  )
}
   

export default App;