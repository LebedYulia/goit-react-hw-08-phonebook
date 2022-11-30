import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';


export const RegistrationPage = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </>
  );
};
