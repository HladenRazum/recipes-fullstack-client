import React from 'react';
import { Box, CircularProgress } from '@mui/material';

interface Props {

}


const SuspenceFallback = (props: Props) => {
   return (
      <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", minWidth: "100vw", minHeight: "100vh", paddingBottom: 30 }}>
         <CircularProgress size={120} />
      </Box>
   );
};

export default SuspenceFallback;
