import { connect } from "react-redux"

import Home from "../components/Home";
import { setFilterBy, setFilters, setFilterValue } from "../actions/lists";
import { loadGnomes } from "../actions/gnomes";
import { listConsts } from "../reducers/lists";
import { filteredListSelector } from "../selectors";

const { GNOMES } = listConsts;

const mapStateToProps = state => {
	const { lists: { [GNOMES]: { filter, filters } } } = state;
	return {
		filterBy: filter.filterBy,
		filters,
	    gnomes: filteredListSelector(GNOMES)(state)
	}; 
}

const mapDispatchToProps = dispatch => ({
    loadGnomes: () => dispatch(loadGnomes()),
    setGnomeFilterBy: filterBy => dispatch(setFilterBy(filterBy, GNOMES)),
    setGnomeFilters: () => dispatch(setFilters([{name:"Name", id:"name"}], GNOMES)),
    setGnomeFilterValue: value => dispatch(setFilterValue(value, GNOMES))
}); 


export default connect(mapStateToProps, mapDispatchToProps)(Home);