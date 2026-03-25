import {Outlet} from "react-router-dom";
import {Navigation} from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <main>
        <Header />
        <Navigation />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;