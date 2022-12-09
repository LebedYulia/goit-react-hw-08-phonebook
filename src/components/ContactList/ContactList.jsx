import { useSelector } from 'react-redux';
import { selectFindContacts } from 'redux/contacts/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from '@mui/material';

export const ContactList = () => {
  const findContactsByName = useSelector(selectFindContacts);
  return (
    <List >
      {findContactsByName.map(findContactByName => (
        <ContactItem key={findContactByName.id} {...findContactByName}></ContactItem>
      ))}
    </List>
  );
};
