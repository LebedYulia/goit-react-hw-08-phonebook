import { useSelector } from 'react-redux';
import { selectLogIn } from 'redux/auth/selectors';
import { Link } from './SharedLayout/SharedLayout.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectLogIn);

  return (
    <nav>
      <Link to="/" end>
        Home
      </Link>
      {isLoggedIn && <Link to="/contacts">My contacts</Link>}
    </nav>
  );
};
