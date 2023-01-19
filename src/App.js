import React from 'react'
import { Container , AppBar , Typography , Grow ,Grid }from '@mui/material'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
// import styledd from './styles'
const App = () => {
  // const classes = styledd()
  return (
    <Container maxwidth = "lg">
      <AppBar  style={{
          borderRadius: 15,
          margin: "30px 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
         position="static" color = 'inherit'>
          <Typography color = 'rgba(0,183,255, 1)'variant ='h2' align = 'center'>Memories</Typography>
          <img style = {{ width : 50, height : 50, marginLeft : 10 }} src={memories} alt="memories"  />
          {/*                                      ^ here margin is given bcoz makestyles hook is deprecated */}
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