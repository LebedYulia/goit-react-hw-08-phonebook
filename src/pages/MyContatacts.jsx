import { Helmet } from 'react-helmet';
import { Contacts } from '../components/Contacts'

export const MyContactsPage = () => {
  return (
    <>
      <Helmet>
        <title>My contacts</title>
      </Helmet>
      <Contacts />      
    </>
  );
};