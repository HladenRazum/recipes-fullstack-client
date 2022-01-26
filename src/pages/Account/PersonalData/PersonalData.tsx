import { Container, Typography, Grid } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";

interface Props {}

const PersonalData = (props: Props) => {
   const user = useAppSelector((state) => state.user.user);

   return (
      <Container>
         <Typography variant="h4">Account Details</Typography>
         <Grid container justifyContent="space-between">
            <Grid item md={4}>
               <Typography variant="body2">username:</Typography>
            </Grid>
            <Grid item md={7}>
               <Typography variant="body2" color="error.main">
                  {user?.user.username}
               </Typography>
            </Grid>
         </Grid>
         <Grid container justifyContent="space-between">
            <Grid item md={4}>
               <Typography variant="body2">token:</Typography>
            </Grid>
            <Grid item md={7}>
               <Typography variant="body2" color="error.main">
                  {user?.token}
               </Typography>
            </Grid>
         </Grid>
         <Grid container justifyContent="space-between">
            <Grid item md={4}>
               <Typography variant="body2">id:</Typography>
            </Grid>
            <Grid item md={7}>
               <Typography variant="body2" color="error.main">
                  {user?.user.id}
               </Typography>
            </Grid>
         </Grid>
      </Container>
   );
};

export default PersonalData;
