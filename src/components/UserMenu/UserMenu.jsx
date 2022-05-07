import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operation';
import authSelectors from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <div>
      <img
        src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-default-avatar-png-image_5408430.jpg"
        alt=""
        width="32"
      />
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;