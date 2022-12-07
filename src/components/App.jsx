import { Routes, Route } from 'react-router-dom';
import { RestrictedRoute, PrivateRoute } from 'components/Routes';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { MainPage } from 'pages/Main';
import { RegistrationPage } from 'pages/Registration';
import { LoginPage } from 'pages/Login';
import { Contacts } from 'components/Contacts';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
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
