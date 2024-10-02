import { Outlet } from 'react-router-dom';
import NavCustome from './components/navbar/NavCustome';
import Footer from './components/footer/Footer';

const Layout = () => {
  return (
    <div>
      <NavCustome />
      <Outlet /> 
      <Footer/>
    </div>
  );
};

export default Layout;
