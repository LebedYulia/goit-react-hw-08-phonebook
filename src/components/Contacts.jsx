import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectIsLoading, selectError } from "redux/contacts/selectors";
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';



export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
 
    return (
      <div>
        <Section title={'Phonebook'}>
          <ContactForm  />
        </Section>
  
        <Section title={'Contacts'}>
          <Filter />
          {error && <b>Server Error</b>}
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
        </Section>
      </div>
    );
  };
