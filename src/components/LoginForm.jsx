import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(7, 'Password should be of minimum 7 characters length')
    .required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {      
      dispatch(logIn(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ width: 500, margin: 'auto' }}>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        onChange={formik.handleChange}
        margin="normal"
        size="small"
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        onChange={formik.handleChange}
        margin="normal"
        size="small"
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />

      <Button 
      fullWidth
      endIcon={<SendIcon />}
      color="warning" 
      variant="contained"  
      type="submit">
        Send
      </Button>
    </form>
  );
};
