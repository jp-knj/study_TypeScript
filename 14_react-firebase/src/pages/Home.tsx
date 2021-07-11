import React, { Fragment, useEffect, useState } from "react";

import { Button, Container, Grid, Typography } from "@material-ui/core";

const Home = (props: any) => {
  const [currentUser, setCurrentUser] = useState<null | object>(null);

  useEffect(() => {
    // if not logged in, redirect to login page
  }, []);

  return (
    <Fragment>
      <Container>
        <Grid container style={{ marginTop: "1em" }}>
          <Grid item md={4}></Grid>
          <Grid item md={4}>
            <Typography>Here is the user's information</Typography>
            <Typography
              variant="caption"
              style={{
                paddingTop: "2em",
                paddingBottom: "2em",
                whiteSpace: "pre",
              }}
            ></Typography>
            <Button
              fullWidth
              style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
            >
              Logout
            </Button>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Home;
