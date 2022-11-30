import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';


export const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </>
  );
};