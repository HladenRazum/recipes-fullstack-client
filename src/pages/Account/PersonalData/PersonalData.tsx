import { Container, Typography } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";

interface Props {}

const PersonalData = (props: Props) => {
   return (
      <Container>
         <Typography variant="h3">Your Details</Typography>
      </Container>
   );
};

export default PersonalData;
