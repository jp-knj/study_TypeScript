import React from 'react'
import Box from './components/Box/Box'
import Grid from './components/Grid/Grid'

function App() {
  return (
    <>
      <Grid container>
        <Grid item>
          <Box>ボックス１</Box>
        </Grid>
        <Grid item>
          <Box>ボックス2</Box>
        </Grid>
        <Grid item>
          <Box>ボックス3</Box>
        </Grid>
      </Grid>

    </>
  );
}

export default App;
