import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import userImage from './assets/user.png'
import { Form } from './components/Form/Form'
import { Recipes } from './components/Recipes/Recipes'

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          User
        </Typography>
        <img src={userImage} alt="user" width="120" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            spacing={3}
            alignItems="stretch"
            justifyContent="space-between"
          >
            <Grid item xs={12} sm={7}>
              <Recipes />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
