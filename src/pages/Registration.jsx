import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm';


const RegistrationPage = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </>
  );
};

export default RegistrationPage;