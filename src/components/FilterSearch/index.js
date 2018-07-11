import React from "react";
import { DropdownButton, FormControl, FormGroup, InputGroup, MenuItem } from "react-bootstrap";
import PropTypes from "prop-types";
import { debounce, filter, noop } from "lodash";

class FilterSearch extends React.PureComponent {

  static propTypes = {
    defaultTitle: PropTypes.string,
    filterBy: PropTypes.string,
    filters: PropTypes.arrayOf(PropTypes.shape({})),
    onChange: PropTypes.func,
    onSelect: PropTypes.func
  }

  static defaultProps = {
    defaultTitle: "Select Filter",
    filterBy: "",
    filters: [],
    onChange: noop,
    onSelect: noop
  }

  prepareFilter = filter => (<MenuItem key={filter.id} onSelect={this.handleOnSelect(filter.id)} active={filter.id === this.props.filterBy}>{filter.name}</MenuItem>);

  handleOnSelect = id => () => this.props.onSelect(id);

  handleOnChange = event => {
    event.persist();
    this.debouncedOnChange(event);
  }

  debouncedOnChange = debounce(event => {
    event.persist();
    this.props.onChange(event.target.value)
  }, 1000);

  getFilterName = () => {
    const { props: { defaultTitle, filters, filterBy } } = this;
    if (Array.isArray(filters) && filters.length) {
      const selectedFilt = filter(filters, filt => filt.id === filterBy);
      if (selectedFilt.length) {
        return selectedFilt[0].name;
      }
    }
    return defaultTitle;
  }

  render() {
    const { getFilterName, handleOnChange, prepareFilter, props: { filters } } = this;
    return (
      <FormGroup>
        <InputGroup>
          <FormControl onChange={handleOnChange} type="text" />
          <DropdownButton
            componentClass={InputGroup.Button}
            id="selected-filter"
            title={getFilterName()}
          >
            {filters.map(prepareFilter)}
          </DropdownButton>
        </InputGroup>
      </FormGroup>
    );
  }
}

export default FilterSearch;
