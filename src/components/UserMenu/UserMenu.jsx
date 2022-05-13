import { Box, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operation';
import authSelectors from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <Box>
      <img
        src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-default-avatar-png-image_5408430.jpg"
        alt=""
        width="32"
      />
      <span>Welcome, {name}</span>
      <Button
        variant="outlined"
        startIcon={<LogoutIcon />}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        sx={{ mt: 3, mb: 2 }}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default UserMenu;
