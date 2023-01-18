import React from 'react'
import { Container , AppBar , Typography , Grow ,Grid }from '@mui/material'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
const App = () => {

  return (
    <Container maxwidth = "lg">
      <AppBar position="static" color = 'inherit'>
          <Typography  variant ='h2' align = 'center'>Memories</Typography>
          <img  src={memories} alt="memories" height="500" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify = 'space-between' alignItems= 'stretch' spacing={4}>
            <Grid item xs = {12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs = {12} sm={7}>
              <Form />
            </Grid>
          </Grid>
        </Container>

      </Grow>

    </Container>
  )
}
// npm install @mui/material @emotion/react @emotion/styled
export default App