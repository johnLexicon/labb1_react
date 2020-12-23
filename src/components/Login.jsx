import React, {useRef} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles({
  my: {
    marginBottom: '2rem',
    marginTop: '2rem'
  }
})

export const Login = ({login}) => {
  const classes = useStyles();
  const emailContainer = useRef(null)
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
          <Button className={classes.my} onClick={(e) => {e.preventDefault(); login(emailContainer.current.value)}} mt={1} size="large" variant="contained" color="primary">Log In</Button>
      </div>
    </div>
  );
};
