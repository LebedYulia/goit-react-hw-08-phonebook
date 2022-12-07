import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const validationSchema = yup.object({
  name: yup
    .string('Enter name')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .trim()
    .required('Name is required'),
  number: yup
    .string('Enter phone number')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },

    validationSchema: validationSchema,
    onSubmit: ({ name, number }) => {      
      const containName = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (containName) {
        return toast.error(`${name} is alredy in contacts`);
      }
      dispatch(addContact({ name, number }));
      formik.values.name = '';
      formik.values.number = '';      
    }, 
  });

  return (
    <form onSubmit={formik.handleSubmit} >
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        onChange={formik.handleChange} 
        value ={formik.values.name}       
        margin="normal"
        size="small"        
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />

      <TextField
        fullWidth
        id="number"
        name="number"
        label="Number"
        onChange={formik.handleChange}
        value ={formik.values.number}         
        margin="normal"
        size="small"
        error={formik.touched.number && Boolean(formik.errors.number)}
        helperText={formik.touched.number && formik.errors.number}
      />

      <Button fullWidth color="warning" variant="contained" type="submit">
        add contact
      </Button>
    </form>
  );
};
