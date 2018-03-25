import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/ToolBar'
import TextField from 'material-ui/TextField'
import SearchIcon from 'material-ui-icons/Search'
import ClearIcon from 'material-ui-icons/Clear'
import IconButton from 'material-ui/IconButton'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import Tooltip from 'material-ui/Tooltip'

export class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { searchTerm: '' }
  }

  updateSearchTerm = event => {
    this.setState({ searchTerm: event.target.value })
  }

  handleKey = event => {
    if (event.keyCode === 13) {
      this.props.handleSearch(this.state.searchTerm)
    }
  }

  render() {
    const { searchTerm } = this.state
    const { handleSearch } = this.props
    return (
      <AppBar>
        <TextField
          id="search"
          type="text"
          color="accent"
          label="Find Design"
          value={searchTerm}
          onChange={this.updateSearchTerm}
          onKeyUp={this.handleKey}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip title="Search">
                  <IconButton
                    color="default"
                    onClick={() => handleSearch(searchTerm)}
                  >
                    <SearchIcon />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            )
          }}
        />
      </AppBar>
    )
  }
}
