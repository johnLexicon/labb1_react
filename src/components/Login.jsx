import React, {useRef} from "react";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

export const Login = ({login}) => {
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
          required="true"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <div>
          <Button onClick={() => {login(emailContainer.current.value)}} mt={1} size="large" variant="contained" color="primary">Log In</Button>
      </div>
    </div>
  );
};
