import { Link } from './SharedLayout/SharedLayout.styled';


export const AuthNav = () => {
  return (
    <div styled ={{ display: 'flex'}}>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};
