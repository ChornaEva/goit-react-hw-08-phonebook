import React from 'react';
import { Box, Button, Link } from '@mui/material';

const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
      <Link href="/register" color="inherit" underline="hover">
        <Button variant="text">Register</Button>
      </Link>
      <Link href="/login" color="inherit" underline="hover">
        <Button variant="text" sx={{ minWidth: 100 }}>
          Log in
        </Button>
      </Link>
    </Box>
  );
};

export default AuthNav;
