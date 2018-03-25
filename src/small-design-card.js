import React from 'react'
import Card, {
  CardActions,
  CardContent,
  CardMedia,
  CardHeader
} from 'material-ui/Card'
import Typography from 'material-ui/typography'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import ZoomIn from 'material-ui-icons/ZoomOutMap'
import FavoriteBorderIcon from 'material-ui-icons/FavoriteBorder'
import { BigDesignCard } from './big-design-card'

const styles = theme => ({
  card: {
    margin: theme.spacing.unit * 3,
    width: 173
  },
  media: {
    height: 173,
    width: 173
  },
  button: {
    marginLeft: theme.spacing.unit * 2
  }
})

class SmallDesignCardRaw extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dialogOpen: false }
  }

  toggleDialog = () => {
    this.setState(oldState => ({ dialogOpen: !oldState.dialogOpen }))
  }

  render() {
    const { designObject, classes } = this.props
    const { dialogOpen } = this.state
    return (
      <React.Fragment>
        <Card className={classes.card} raised>
          <CardMedia
            image={designObject.thumbnail_url}
            title="Design"
            className={classes.media}
          />
          <CardContent>
            <Typography component="p" noWrap={true}>
              {designObject.name}
            </Typography>
            <Typography variant="caption">
              {`by ${designObject.user.screen_name}`}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="View Details" onClick={this.toggleDialog}>
              <ZoomIn />
            </IconButton>
            <IconButton className={classes.button} aria-label="Favorite">
              <FavoriteBorderIcon />
              {designObject.num_favorites}
            </IconButton>
          </CardActions>
        </Card>
        <BigDesignCard
          designObject={designObject}
          isOpen={dialogOpen}
          onClose={this.toggleDialog}
        />
      </React.Fragment>
    )
  }
}

export const SmallDesignCard = withStyles(styles)(SmallDesignCardRaw)
