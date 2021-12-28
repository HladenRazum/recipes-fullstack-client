import React from "react";
import { Navigation } from "../Navigation/Navigation";

interface Props {}

export const Header = (props: Props) => {
   return (
      <header>
         <Navigation />
      </header>
   );
};
