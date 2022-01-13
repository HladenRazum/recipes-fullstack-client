import { Container } from "@mui/material";
import React from "react";
import { footerStyles } from "./styles";

interface Props {}

const Footer = (props: Props) => {
   return (
      <footer>
         <Container sx={footerStyles}>
            <h2>Footer Element</h2>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
               voluptatibus fuga quia, corrupti obcaecati quaerat tempore qui
               expedita rerum aspernatur quis dolores omnis? Nobis ad impedit
               fugiat veniam veritatis nemo placeat suscipit dolore tempora
               iusto nihil rem, porro dolores quis dicta necessitatibus iste
               beatae ea, laudantium mollitia id ut recusandae nisi. Autem nulla
               perferendis sint.
            </p>
         </Container>
      </footer>
   );
};

export default Footer;
