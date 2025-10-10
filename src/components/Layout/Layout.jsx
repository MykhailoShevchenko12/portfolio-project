import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Error />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
