import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/ToolBar'
import TextField from 'material-ui/TextField'
import SearchIcon from 'material-ui-icons/Search'
import ClearIcon from 'material-ui-icons/Clear'
import IconButton from 'material-ui/IconButton'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import Tooltip from 'material-ui/Tooltip'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/typography'
import { MenuItem } from 'material-ui/Menu'
import Select from 'material-ui/Select'

const capitalise = word => `${word[0].toUpperCase()}${word.slice(1)}`

const optionise = v => ({
  value: v,
  label: v
    .split('_')
    .map(capitalise)
    .join(' ')
})

export class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      availability: 'all',
      sortBy: 'classic',
      type: 'all'
    }
  }

  handleKey = event => {
    if (event.keyCode === 13) {
      this.invokeSearch()
    }
  }

  invokeSearch = () => {
    const { searchTerm, availability, sortBy, type } = this.state
    this.props.handleSearch(searchTerm, availability, type, sortBy)
  }

  updatePropertyAndSearch = property => event => {
    this.setState({ [property]: event.target.value }, this.invokeSearch)
  }

  updateSearchTerm = event => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    const { searchTerm, availability, sortBy, type } = this.state
    const { handleSearch } = this.props
    const optionsFor = {
      types: ['all', 'fabric', 'wallpaper', 'gift_wrap'].map(optionise),
      sortBy: [
        'classic',
        'freshtastic',
        'new',
        'bestselling',
        'favorites',
        'relevant'
      ].map(optionise),
      availabilities: [
        { value: 'all', label: 'All' },
        { value: 'for_sale', label: 'For Sale' },
        { value: 'not_for_sale', label: 'Not For Sale' }
      ]
    }
    return (
      <React.Fragment>
        <AppBar>
          <Toolbar disableGutters={true}>
            <TextField
              id="search"
              type="text"
              label="Find Design"
              value={searchTerm}
              onChange={this.updateSearchTerm}
              onKeyUp={this.handleKey}
              style={{ margin: '16 0 24 24', color: 'white' }}
              InputProps={{
                style: { color: 'white' },
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title="Search">
                      <IconButton color="default" onClick={this.invokeSearch}>
                        <SearchIcon />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                )
              }}
            />
          </Toolbar>
        </AppBar>
        <Grid container direction="row" spacing={40} style={{ marginTop: 80 }}>
          <Grid item>
            <TextField
              style={{ marginLeft: 24 }}
              margin="normal"
              select
              label="Availability"
              value={availability}
              onChange={this.updatePropertyAndSearch('availability')}
              helperText="Filter by design availability"
              margin="normal"
            >
              {optionsFor.availabilities.map(option => (
                <MenuItem value={option.value} key={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              select
              margin="normal"
              label="Type"
              value={type}
              onChange={this.updatePropertyAndSearch('type')}
              helperText="Filter by fabric type"
              margin="normal"
            >
              {optionsFor.types.map(option => (
                <MenuItem value={option.value} key={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              select
              margin="normal"
              label="Sort"
              value={sortBy}
              onChange={this.updatePropertyAndSearch('sortBy')}
              helperText="Sort design by"
              margin="normal"
            >
              {optionsFor.sortBy.map(option => (
                <MenuItem value={option.value} key={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}
