import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Button } from 'components/RegisterForm/RegisterForm.styled';

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
