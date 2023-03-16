import React from "react";
import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import Home from "../pages/home/Home";
import {Container} from '@mui/material'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
    </Route>
  )
);

function NavBar(){
    return (
        <>
        <Header/>
        <Container>
            <Outlet/>
        </Container>
        <Footer/>
        </>
        
    );
}

function NavigationRoute(){
    return (
        <RouterProvider router={router}/>
    );
}

export default NavigationRoute