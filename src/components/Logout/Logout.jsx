import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Button } from 'components/Logout/Logout.styled';

export const Logout = () => {
  const dispatch = useDispatch();

  return (
    <>
      <span />
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </>
  );
};
