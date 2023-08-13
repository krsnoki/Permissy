import {
  createBrowserRouter,
} from "react-router-dom"

import About from './pages/about';
import Login from './pages/login';
import App from './app';
import ResetPassword from "./pages/resetPassword";
import Sdashboard from "./pages/Sdashboard";
import Fdashboard from "./pages/fdashboard";
import Signup from "./pages/signup";

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
  {
    path: "/student-dashboard",
    element: <Sdashboard />,
  },
  {
    path: "/faculty-dashboard",
    element: <Fdashboard />,
  },
  {
    path: "/signup",
    element: <Signup />,
  }
])
export default router;