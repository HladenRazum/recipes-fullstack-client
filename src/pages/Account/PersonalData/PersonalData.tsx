import { Container, Paper, Typography } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";

interface Props {}

const PersonalData = (props: Props) => {
   return (
      <Container>
         <Paper
            sx={{
               maxWidth: 480,
               padding: 2,
               margin: "3em auto",
            }}
         ></Paper>
      </Container>
   );
};

export default PersonalData;
