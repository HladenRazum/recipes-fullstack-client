import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Navigation } from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Account from "./pages/Account/Account";
import { Box } from "@mui/system";
import LoginPage from "./pages/LoginPage/LoginPage";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import { useSelector } from "react-redux";

// interface AuthenticationState {
//    isAuthenticated: boolean;
// }

const App = () => {
   return (
      <React.Fragment>
         <BrowserRouter>
            <Navigation />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/account" element={<Account />} />
               <Route path="/register" element={<RegisterPage />} />
               <Route path="/login" element={<LoginPage />} />

               <Route path="/recipes" element={<RecipesPage />}>
                  <Route
                     path="/recipes/filtered"
                     element={<p>Filtered items</p>}
                  />
               </Route>
               <Route path="/recipes/:id" element={<RecipesPage />} />
               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </BrowserRouter>
      </React.Fragment>
   );
};

export default App;
