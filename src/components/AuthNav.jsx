import { Link } from './SharedLayout/SharedLayout.styled';


export const AuthNav = () => {
  return (
    <>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </>
  );
};
