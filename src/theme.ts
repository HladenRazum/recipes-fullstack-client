import { red, blue, orange, grey } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
   palette: {
      primary: {
         main: "#121212",
      },
      secondary: {
         main: "#feecd2",
      },
      error: {
         main: red.A400,
      },
      info: {
         main: "#ad3aff"
      },

   },

});

export default responsiveFontSizes(theme);
