import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { selectLogIn } from 'redux/auth/selectors';
import { Navigation } from 'components/Navigation';
import { Container, Header } from './SharedLayout.styled';
import { AuthNav } from 'components/AuthNav';
import { Logout } from 'components/Logout/Logout';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectLogIn);

  return (
    <Container>
      <Header>
        <Navigation />
        {!isLoggedIn ? <AuthNav /> : <Logout />}
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
