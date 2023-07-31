import {
  createBrowserRouter,
} from "react-router-dom"

import About from './pages/about';
import Login from './pages/login';
import App from './app';
import ResetPassword from "./pages/resetPassword";

export  const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/resetPassword",
    element: <ResetPassword />,
  },
])
export default router;