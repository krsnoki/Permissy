import {
  createBrowserRouter,
  createRoutesFromElements, 
  Route, 
} from "react-router-dom"


import Hero from './pages/hero'
import About from './pages/about';
import Login from './pages/login';

export  const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/"  element={ <Hero />}>
  
    <Route path="about" element={<About />} />
    <Route path="login" element={<Login />} />
  </Route>

))