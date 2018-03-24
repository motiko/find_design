import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import indigo from 'material-ui/colors/indigo'
import teal from 'material-ui/colors/teal'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/typography'
import { SmallDesignCard } from './small-design-card'
import { CircularProgress } from 'material-ui/Progress'
import { SearchBar } from './search-bar'
import { search, mock_search, mock_object } from './api'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      designObjects: mock_search().results,
      searchInProgress: false
    }
  }

  searchObjects = (query, availability) => {
    this.setState({ searchInProgress: true })
    search(query, availability).then(response => {
      this.setState({
        designObjects: response.results,
        searchInProgress: false
      })
    })
  }

  render() {
    const { designObjects, searchInProgress } = this.state
    return (
      <React.Fragment>
        <SearchBar handleSearch={this.searchObjects} />
        {searchInProgress ? (
          <CircularProgress style={{ position: 'fixed' }} />
        ) : null}
        <Grid
          container
          spacing={24}
          style={{ margin: '80 auto 0 auto', width: '90vw' }}
        >
          {designObjects.length == 0 ? (
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Typography variant="display1">
                {' '}
                Sorry no results found
              </Typography>
            </Grid>
          ) : null}
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
