import { red, blue, orange, grey } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
   palette: {
      primary: {
         main: blue[500],
      },
      secondary: {
         main: grey[500],
      },
      error: {
         main: red.A400,
      },
   },
});

export default responsiveFontSizes(theme);
