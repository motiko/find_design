import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import indigo from 'material-ui/colors/indigo'
import teal from 'material-ui/colors/teal'
import Grid from 'material-ui/Grid'
import { SmallDesignCard } from './small-design-card'
import { SearchBar } from './search-bar'
import { search, mock_search, mock_object } from './api'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { designObjects: mock_search().results }
  }

  searchObjects = query => {
    console.log('start')
    search(query).then(response => {
      console.log('done')
      debugger
      this.setState({ designObjects: response.results })
    })
  }

  render() {
    const { designObjects } = this.state
    return (
      <React.Fragment>
        <SearchBar handleSearch={this.searchObjects} />
        <Grid
          container
          spacing={24}
          style={{ margin: '80 auto 0 auto', width: '90vw' }}
        >
          {designObjects.map((designObject, index) => (
            <Grid item xs={12} sm={6} xl={3} key={index}>
              <SmallDesignCard designObject={designObject} />
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'))
