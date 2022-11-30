import { useSelector } from 'react-redux';
import { selectFindContacts } from 'redux/contacts/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = () => {
  const findContactsByName = useSelector(selectFindContacts);
  return (
    <ul>
      {findContactsByName.map(findContactByName => (
        <ContactItem key={findContactByName.id} {...findContactByName}></ContactItem>
      ))}
    </ul>
  );
};
