import React, { FormEvent } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
   window?: () => Window;
}

const Search = styled("div")(({ theme }) => ({
   position: "relative",
   width: 500,
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginLeft: 0,
   marginRight: [theme.spacing(0)],
   [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
   },
   borderBottomRightRadius: 0,
   borderTopRightRadius: 0,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: "100%",
   position: "absolute",
   pointerEvents: "none",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: "inherit",
   "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
         width: "18ch",
         "&:focus": {
            width: "24ch",
         },
      },
   },
}));

const RecipeSearchForm = (props: Props) => {
   const [keyword, setKeyword] = React.useState("");

   const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
   };

   const submitHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // 2. Redirect the user to /recipes
      // 3. Add search term
   };

   return (
      <form onSubmit={submitHandler}>
         <Box sx={{ display: "flex" }}>
            <Search>
               <SearchIconWrapper>
                  <SearchIcon />
               </SearchIconWrapper>
               <StyledInputBase
                  placeholder="Search Recipes"
                  inputProps={{ "aria-label": "search" }}
                  onChange={inputChangeHandler}
                  value={keyword}
               />
            </Search>
            <Button
               type="submit"
               sx={{
                  marginRight: 20,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
               }}
               variant="contained"
               color="info"
               onClick={() => { }}
            >
               Submit
            </Button>
         </Box>
      </form>
   );
};

export default RecipeSearchForm;
