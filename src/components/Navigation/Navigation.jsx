import { Button, Container, Grid, Link, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
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
            <Link href="/" color="inherit" underline="hover">
              <Button variant="text" startIcon={<HomeIcon />}>
                Home
              </Button>
            </Link>
            {isLoggedIn && (
              <Link href="/contacts" color="inherit" underline="hover">
                <Button variant="text">Contacts</Button>
              </Link>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </Container>
  );
};

export default Navigation;
