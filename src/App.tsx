import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Navigation } from "./components/Navigation/Navigation";
import AppWrapper from "./layout/AppWrapper/AppWrapper";
import CreateRecipe from "./pages/Account/CreateRecipe/CreateRecipe";
import PersonalData from "./pages/Account/PersonalData/PersonalData";
import UsersRecipes from "./pages/Account/UsersRecipes/UsersRecipes";
import SuspenceFallback from "./pages/SuspenceFallback/SuspenceFallback";
import DetailedRecipePage from "./pages/DetailedRecipePage/DetailedRecipePage";
import { useAppSelector } from "./store/hooks";

const PasswordResetPage = React.lazy(
   () => import("./pages/PasswordResetPage/PasswordResetPage")
);
const Account = React.lazy(() => import("./pages/Account/Account"));
const RegisterPage = React.lazy(
   () => import("./pages/RegisterPage/RegisterPage")
);
const LoginPage = React.lazy(() => import("./pages/LoginPage/LoginPage"));
const NotFoundPage = React.lazy(
   () => import("./pages/NotFoundPage/NotFoundPage")
);
const RecipesPage = React.lazy(() => import("./pages/RecipesPage/RecipesPage"));

const App = () => {
   const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
   return (
      <React.Fragment>
         <Navigation />
         <AppWrapper>
            <Suspense fallback={<SuspenceFallback />}>
               <Routes>
                  <Route path="/" element={<Home />} />

                  <Route
                     path="/account"
                     element={
                        isLoggedIn ? <Account /> : <Navigate to="/login" />
                     }
                  >
                     <Route
                        path="/account/add-recipe"
                        element={<CreateRecipe />}
                     />

                     <Route
                        path="/account/my-recipes"
                        element={<UsersRecipes />}
                     />
                     <Route index element={<PersonalData />} />
                  </Route>
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route
                     path="/password-reset"
                     element={<PasswordResetPage />}
                  />
                  <Route path="/recipes" element={<RecipesPage />}>
                     <Route
                        path="/recipes/filtered"
                        element={<p>Filtered items</p>}
                     />
                  </Route>
                  <Route path="/recipes/:id" element={<DetailedRecipePage />} />
                  <Route path="*" element={<NotFoundPage />} />
               </Routes>
            </Suspense>
         </AppWrapper>
      </React.Fragment>
   );
};

export default App;
