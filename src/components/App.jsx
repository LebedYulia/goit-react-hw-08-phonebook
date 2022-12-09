import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { RestrictedRoute, PrivateRoute } from 'components/Routes';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { NotFound } from 'components/NotFound';
import { refreshUser } from 'redux/auth/operations';

const HomePage = lazy(() => import('pages/HomePage'));
const RegistrationPage = lazy(() => import('pages/Registration'));
const LoginPage = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/MyContacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser(), []);
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster
        position="top-right"
        duration="3000"
        toastOptions={{
          error: {
            style: {
              border: '2px solid red',
            },
          },
          success: {
            style: {
              background: '#53ad57',
              color: '#fff',
            },
            iconTheme: {
              primary: 'white',
              secondary: 'green',
            },
          },
        }}
      />
    </>
  );
};
