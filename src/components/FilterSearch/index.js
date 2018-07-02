import React from "react";
import { DropdownButton, FormControl, FormGroup, InputGroup, MenuItem } from "react-bootstrap";
import PropTypes from "prop-types";
import { debounce, noop } from "lodash";

class FilterSearch extends React.PureComponent {

  static propTypes = {
    filters: PropTypes.arrayOf(PropTypes.shape({})),
    onChange: PropTypes.func,
    onSelect: PropTypes.func
  }

  static defaultProps = {
    filters: [],
    onChange: noop,
    onSelect: noop
  }

  constructor(props) {
    super();
    this.handleOnChange = debounce(event => this.handleOnChange(event), 300);
  }

  prepareFilter = filter => (<MenuItem key={filter.id} onSelect={this.handleOnSelect(filter.id)}>{filter.name}</MenuItem>);

  handleOnSelect = id => () => this.props.onSelect(id);

  handleOnChange = event => {
    event.persist();
    this.props.onChange(event.target.value);
  }

  getFilterName = () => {
    const { props: { filters } } = this;
    if (Array.isArray(filters) && filters.length) {
      
    }
    return "";
  } 

  render() {
    const { getFilterName, handleOnChange, handleOnSelect, prepareFilter, props: { filters } } = this;
    return (
      <FormGroup>
        <InputGroup>
          <FormControl onChange={handleOnChange()} type="text" />
          <DropdownButton
            componentClass={InputGroup.Button}
            id="selected-filter"
            title={getFilterName()}
            onSelect={handleOnSelect}
          >
            {filters.map(prepareFilter)}
          </DropdownButton>
        </InputGroup>
      </FormGroup>
    );
  }
}

export default FilterSearch;
