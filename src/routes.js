import Home from "./pages/home/Home";
import About from "./pages/aboutUs/About";
import AsiaTour from "./pages/AsiaTour/AsiaTour";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contactUs/Contact";
import Visa from "./pages/visa/Visa";
import EuropTour from "./pages/EuropTour/EuropTour";
import Hotels from "./pages/hotels/Hotels";
import Login from "./pages/login/Login";
import TouristPlace from "./pages/TouristPlace/TouristPlace";
import Panel from "./pages/panel/Panel";
import AsiaIstanbul from "./pages/AsiaTour/test/Asia-istanbul";
import TurkeyTourist from "./pages/TouristPlace/cities/turkey/TurkeyTourist";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./pages/login/Register";
import LoginTempCode from "./pages/login/LoginTempCode";
import TourDetails from "./pages/AsiaTour/test/tourDetails/TourDetails";
import Layout from "./Layout";
import Blog from "./pages/blogs/Blog";
import HotelCity from "./pages/hotels/HotelCity";

export let routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/about-us", element: <About /> },
      // { path: "asia-tour", element: <AsiaTour /> },
      { path: "blog", element: <Blogs /> },
      { path: "contact-us", element: <Contact /> },
      { path: "visa", element: <Visa /> },
      { path: "Europe-tour", element: <EuropTour /> },
      {path: "hotels", element: <Hotels />},
      { path: "login", element: <Login /> },
      { path: "tourist-place", element: <TouristPlace /> },
      { path: "panel", element: <Panel /> },
      { path: "asia-tour-استانبول", element: <AsiaIstanbul /> },
      { path: "جاذبه-های-استانبول", element: <TurkeyTourist /> },
      { path: "register", element: <Register /> },
      { path: "temporyLogin", element: <LoginTempCode /> },
      { path: "tour/:tourId", element: <TourDetails /> },
      { path: "blogs/:blogId", element: <Blog /> },
      {
        path: 'asia-tours/*',
        children: [
          {
            path:"asia-tours/:countryId/:cityId",
            element: <AsiaIstanbul />
          }
        ]
      },
      { 
        path: "hotels", 
        element: <Hotels />,
      },
      { 
        path: "hotels/:city", // The city route
        element: <HotelCity />, 
      }
    ],
  },
  { element: <PrivateRoute /> }, // Private route wrapper (if you have private routes)
];

export default routes;
