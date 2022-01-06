import { Container, Typography } from "@mui/material";

interface Props {}

export const Home = (props: Props) => {
   return (
      <Container>
         <Typography variant="h2" textAlign="center">
            Homepage
         </Typography>
      </Container>
   );
};

// useSelector => use this to return a slice of the store state
// useDispatch => allows us to dispatch actions to the store
