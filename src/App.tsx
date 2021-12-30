import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./containers/Home/Home";
import { Navigation } from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import RegisterPage from "./containers/RegisterPage/RegisterPage";
import Account from "./containers/Account/Account";
import { Box } from "@mui/system";
import LoginPage from "./containers/LoginPage/LoginPage";
import RecipesPage from "./containers/RecipesPage/RecipesPage";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";

const App = () => {
   return (
      <React.Fragment>
         <BrowserRouter>
            <Navigation />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/register" element={<RegisterPage />} />
               <Route path="/login" element={<LoginPage />} />
               <Route path="/account" element={<Account />} />
               <Route path="/recipes" element={<RecipesPage />} />
               <Route path="/recipes/:id" element={<RecipesPage />} />
               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </BrowserRouter>
      </React.Fragment>
   );
};

export default App;
