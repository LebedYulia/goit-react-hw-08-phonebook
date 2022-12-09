import { Helmet } from 'react-helmet';
import { Contacts } from '../components/Contacts';

const MyContacts = () => {
  return (
    <>
      <Helmet>
        <title>My contacts</title>
      </Helmet>
      <Contacts />
    </>
  );
};

export default MyContacts;
