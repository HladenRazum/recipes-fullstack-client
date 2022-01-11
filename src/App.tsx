import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Navigation } from "./components/Navigation/Navigation";
import AppWrapper from "./layout/AppWrapper/AppWrapper";
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe";

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
   return (
      <React.Fragment>
         <AppWrapper>
            <Suspense fallback={<p>...</p>}>
               <Navigation />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/account" element={<Account />}>
                     <Route
                        path="/account/add-recipe"
                        element={<CreateRecipe />}
                     />
                  </Route>
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
            </Suspense>
         </AppWrapper>
      </React.Fragment>
   );
};

export default App;
