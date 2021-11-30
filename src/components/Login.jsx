import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
  Snackbar
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles({
  my: {
    marginBottom: '2rem',
    marginTop: '2rem'
  }
});

export const Login = ({ login, error }) => {
  const classes = useStyles();
  const emailContainer = useRef(null);
  const [open, setOpen] = useState(false);

  // Invoked when Snackbar autoHideDuration time is met
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = (email) => {
    const isValid = login(email);
    //Show Snackbar with error Alert
    if (!isValid) {
      setOpen(true);
    }
  };

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="input-with-icon-adornment">Sign in</InputLabel>
        <Input
          inputRef={emailContainer}
          id="email"
          type="email"
          placeholder="email"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <div>
        <Button
          className={classes.my}
          onClick={(e) => {
            e.preventDefault();
            handleLogin(emailContainer.current.value);
          }}
          mt={1}
          size="large"
          variant="contained"
          color="primary"
        >
          Log In
        </Button>
        <Snackbar open={open} onClose={handleClose} autoHideDuration={4000}>
          <Alert severity="error" sx={{ width: '100%' }}>
            User not found!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};
