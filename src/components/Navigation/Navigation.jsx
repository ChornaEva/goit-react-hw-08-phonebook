import { Button, Container, Grid, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Container>
      <Toolbar disableGutters>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item xs={6}>
            <Button variant="text" startIcon={<HomeIcon />}>
              <NavLink to="/"></NavLink>
            </Button>
            <Button variant="text">
              <NavLink to="/contacts">Contacts</NavLink>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </Container>
  );
};

export default Navigation;
