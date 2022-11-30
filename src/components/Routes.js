import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLogIn, selectRefreshing } from 'redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectLogIn);
  const isRefreshing = useSelector(selectRefreshing);

  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};


export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectLogIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};