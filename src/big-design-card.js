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
import FavoriteBorderIcon from 'material-ui-icons/FavoriteBorder'
import ShoppingCartIcon from 'material-ui-icons/ShoppingCart'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'

const styles = theme => ({
  dialog: {
    padding: 0
  },
  media: {
    height: 200
  },
  button: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2
  }
})

export const BigDesignCard = withStyles(styles)(
  ({ designObject, isOpen, onClose, classes }) => {
    return (
      <Dialog open={isOpen} onClose={onClose} fullWidth>
        <DialogContent className={classes.dialog} style={{ paddingTop: 0 }}>
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
        </DialogContent>
      </Dialog>
    )
  }
)
