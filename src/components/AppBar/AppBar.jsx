import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { AppBarContainer, AppBarWrapper } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBarWrapper>
      <AppBarContainer>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBarContainer>
    </AppBarWrapper>
  );
};

export default AppBar;
