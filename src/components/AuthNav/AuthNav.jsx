import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, Grid } from '@mui/material';

const AuthNav = () => {
  return (
    <Box component="ul">
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        spacing={3}
      >
        <Grid item xs={6}>
          <Button variant="text">
            <NavLink to="/register">Register</NavLink>
          </Button>
          <Button variant="text">
            <NavLink to="/login">Log in</NavLink>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthNav;
