import { Container, Typography, Grid } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";

interface Props { }

const PersonalData = (props: Props) => {
   const user = useAppSelector((state) => state.user.user);

   return (
      <Container>
         <Typography variant="h4">Account Details</Typography>
         <Grid container>
            <Grid item md={4}>
               username:{" "}
            </Grid>
            <Grid item md={8}>
               {user?.user.username}
            </Grid>
         </Grid>
      </Container>
   );
};

export default PersonalData;
