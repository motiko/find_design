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
import FavoriteIcon from 'material-ui-icons/Favorite'
import FavoriteBorderIcon from 'material-ui-icons/FavoriteBorder'
import ShoppingCartIcon from 'material-ui-icons/ShoppingCart'

const styles = theme => ({
  card: {
    margin: theme.spacing.unit
  },
  media: {
    height: 200
  },
  button: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2
  }
})

export const SmallDesignCard = withStyles(styles)(
  ({ designObject, classes }) => {
    return (
      <Card className={classes.card} raised>
        <CardHeader
          title={designObject.name}
          subheader={`by ${designObject.user.screen_name}`}
        />
        <CardMedia
          image={designObject.thumbnail_url}
          title="Design"
          className={classes.media}
        />
        <CardContent>
          <Typography component="p" className={classes.description}>
            {designObject.short_description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton className={classes.button} aria-label="Favorite">
            <FavoriteBorderIcon />
            {designObject.num_favorites}
          </IconButton>
          <IconButton className={classes.button} aria-label="Buy">
            <ShoppingCartIcon />
            Buy
          </IconButton>
        </CardActions>
      </Card>
    )
  }
)
