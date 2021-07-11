import React, { Fragment, useEffect, useState } from "react";

import {
  Button,
  Container,
  FormControl,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";

const Login = (props: any) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    // if logged in, redirect to home
  }, []);

  return (
    <Fragment>
      <Container>
        <Grid container>
          <Grid item md={4}></Grid>
          <Grid item md={4}>
            <FormControl margin="normal" fullWidth>
              <TextField
                style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                name="email"
                label="E-mail"
                fullWidth
                variant="outlined"
                value={email}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                name="password"
                label="Password"
                fullWidth
                variant="outlined"
                type="password"
                value={password}
              />
            </FormControl>
            <FormControl fullWidth>
              <Button
                fullWidth
                style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
              >
                Login
              </Button>
            </FormControl>
            <Typography align="center">
              <Link href="/signup">to signup</Link>
            </Typography>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Login;
