import Home from "./pages/home/Home";
import About from "./pages/aboutUs/About";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contactUs/Contact";
import Visa from "./pages/visa/Visa";
import Hotels from "./pages/hotels/Hotels";
import Login from "./pages/login/Login";
import TouristPlace from "./pages/TouristPlace/TouristPlace";
import Panel from "./pages/panel/Panel";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./pages/login/Register";
import LoginTempCode from "./pages/login/LoginTempCode";
import Layout from "./Layout";
import Blog from "./pages/blogs/Blog";
import HotelCity from "./pages/hotels/HotelCity";
import Tours from "./pages/Tour/Tours";
import TourDetail  from "./pages/Tour/tourDetails/TourDetails";
import Loader from "./components/loaders/Loader";

export let routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/about-us", element: <About /> },
      { path: "blog", element: <Blogs /> },
      { path: "contact-us", element: <Contact /> },
      { path: "visa/visas", element: <Visa /> },
      {path: "hotels", element: <Hotels />},
      { path: "login", element: <Login /> },
      { path: "tourist-places", element: <TouristPlace /> },
      { path: "panel", element: <Panel /> },
      { path: "register", element: <Register /> },
      { path: "temporyLogin", element: <LoginTempCode /> },
      { path: "tour/detail/:tourId", element: <TourDetail /> },
      { path: "tour/:cityId", element: <Tours /> },
      { path: "blogs/:blogId", element: <Blog /> },
      // {
      //   path: 'asia-tours/*',
      //   children: [
      //     {
      //       path:"asia-tours/:countryId/:cityId",
      //       element: <AsiaIstanbul />
      //     }
      //   ]
      // },
      { path: "hotels", element: <Hotels />,},
      { 
        path: "hotels/:city", // The city route
        element: <HotelCity />, 
      }
    ],
  },
  { element: <PrivateRoute /> }, // Private route wrapper (if you have private routes)
];

export default routes;
