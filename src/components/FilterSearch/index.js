import React from "react";
import { DropdownButton, FormControl, FormGroup, InputGroup, MenuItem } from "react-bootstrap";
import PropTypes from "prop-types";
import { debounce, noop } from "lodash";

class FilterSearch extends React.PureComponent {

  static propTypes = {
    filter: PropTypes.string,
    filters: PropTypes.arrayOf(PropTypes.shape({})),
    onChange: PropTypes.func,
    onSelect: PropTypes.func
  }

  static defaultProps = {
    filterName: "",
    filters: [],
    onChange: noop,
    onSelect: noop
  }


  prepareFilter = filter => (<MenuItem key={filter.id} onSelect={this.handleOnSelect(filter.id)}>{filter.name}</MenuItem>);

  handleOnSelect = id => () => this.props.onSelect(id);

  handleOnChange = event => {
    event.persist();
    debounce(() => this.props.onChange(event.target.value), 1000)();
  }

  render() {
    const { handleOnChange, prepareFilter, props: { filterName, filters } } = this;
    return (
      <FormGroup>
        <InputGroup>
          <FormControl onChange={handleOnChange} type="text" />
          <DropdownButton
            componentClass={InputGroup.Button}
            id="selected-filter"
            title={filterName || "Select Filter"}
          >
            {filters.map(prepareFilter)}
          </DropdownButton>
        </InputGroup>
      </FormGroup>
    );
  }
}

export default FilterSearch;
