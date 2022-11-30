import { Helmet } from 'react-helmet';

export const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Main</title>
      </Helmet>
      <h1>Welcome to Contacts Book</h1>
      <p>To create your contact book please register</p>
    </>
  );
};
