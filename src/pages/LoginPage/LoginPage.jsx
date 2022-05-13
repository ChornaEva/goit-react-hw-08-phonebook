import {
  Button,
  Container,
  Link,
  TextField,
  Typography,
  Grid,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/auth-operation';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container maxWidth="xs">
      <Grid container justifyContent="center">
        <Grid item>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
        </Grid>
      </Grid>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 1 }}
      >
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          margin="normal"
          required
          fullWidth
          defaultValue="Normal"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
          margin="normal"
          required
          fullWidth
          defaultValue="Normal"
        />
        <Button
          variant="outlined"
          type="submit"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
        >
          Log in
        </Button>
        <Grid container justifyContent="center">
          <Grid item>
            <Link href="/register" variant="body2" underline="hover">
              Don't have an account? Register
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
