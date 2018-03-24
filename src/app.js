import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import indigo from 'material-ui/colors/indigo'
import teal from 'material-ui/colors/teal'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/typography'
import Button from 'material-ui/Button'

import { search, mock_search, mock_object } from './api'

class App extends React.Component {
  render() {
    return <SmallDesign designObject={mock_object()} />
  }
}

function SmallDesign({ designObject }) {
  return (
    <Card>
      <CardMedia
        image={designObject.thumbnail_url}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {designObject.name}
        </Typography>
        <Typography component="p">{designObject.short_description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

ReactDOM.render(<App />, document.getElementById('container'))
