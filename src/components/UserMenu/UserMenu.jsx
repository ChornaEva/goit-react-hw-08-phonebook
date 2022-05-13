import { Box, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operation';
import authSelectors from 'redux/auth/auth-selectors';
import { UserName } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <Box containe sx={{ display: 'flex', alignItems: 'center' }}>
      <UserName>Welcome, {name}!</UserName>
      <Button
        sx={{ marginLeft: '16px', width: 150 }}
        startIcon={<LogoutIcon />}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default UserMenu;
