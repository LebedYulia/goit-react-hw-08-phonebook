import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { register } from 'redux/auth/operations';

const validationSchema = yup.object({
  name: yup
    .string('Enter your name')       
    .required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(7, 'Password should be of minimum 7 characters length')
    .required('Password is required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
      dispatch(register(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ width: 500, margin: 'auto' }}>
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        onChange={formik.handleChange}
        margin="normal"
        size="small"
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />

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
        color="warning"
        variant="contained"
        type="submit"
      >
        Register
      </Button>
    </form>
  );
};
