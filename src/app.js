import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import indigo from 'material-ui/colors/indigo'
import teal from 'material-ui/colors/teal'
import { search, mock_search, mock_object } from './api'

class App extends React.Component {
  render() {
    return <SmallDesign designObject={mock_object()} />
  }
}

function SmallDesign({ designObject }) {
  return <p> {designObject.name} </p>
}

ReactDOM.render(<App />, document.getElementById('container'))
