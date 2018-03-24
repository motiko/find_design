import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import indigo from 'material-ui/colors/indigo'
import teal from 'material-ui/colors/teal'
import { SmallDesignCard } from './small-design-card'
import { search, mock_search, mock_object } from './api'
import Grid from 'material-ui/Grid'

class App extends React.Component {
  render() {
    return (
      <Grid container justify="stretch">
        {mock_search().results.map((designObject, index) => (
          <Grid item xs={12} sm={6} xl={3}>
            <SmallDesignCard designObject={designObject} key={index} />
          </Grid>
        ))}
      </Grid>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'))
