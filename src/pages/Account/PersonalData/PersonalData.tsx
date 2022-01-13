import { Container, Paper, Typography } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";

interface Props {}

const PersonalData = (props: Props) => {
   return (
      <Container>
         <Typography variant="h4">Account Details</Typography>
      </Container>
   );
};

export default PersonalData;
