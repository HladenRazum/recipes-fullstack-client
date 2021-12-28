import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { Navigation } from "../../components/Navigation/Navigation";

interface Props {}

const Layout = (props: Props) => {
   return (
      <React.Fragment>
         <Navigation />
         <main>
            <Outlet />
         </main>
         <Footer />
      </React.Fragment>
   );
};

export default Layout;
