import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import Avatar from '@mui/material/Avatar';
import { pink } from '@mui/material/colors';
import { Button } from 'components/Logout/Logout.styled';
import { Box } from '@mui/material';
import { selectName } from 'redux/auth/selectors';

export const Logout = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}`,
    };
  }

  return (
    <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
      <Avatar {...stringAvatar( name )} sx={{ width: 32, height: 32, bgcolor: pink[400] }} />
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Box>
  );
};
