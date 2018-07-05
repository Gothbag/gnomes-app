import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import FilterSearch from "../FilterSearch";
import GnomeItem from "../GnomeItem";
import Paginator from "../Paginator";

class Home extends React.PureComponent {

	static propTypes = {
    	gnomes: PropTypes.arrayOf(PropTypes.shape({}))
	}

	static defaultProps = {
    	gnomes: []
	}

	componentDidMount() {
		const { props: { filters, gnomes, loadGnomes, setGnomeFilters } } = this;
		if (isEmpty(gnomes)) {
			loadGnomes();
		}
		if (isEmpty(filters)) {
			setGnomeFilters();
		}
	}

	render() {
		const { props: { filterName, filters, gnomes, setGnomeFilterValue, setGnomeFilterBy } } = this;
		return (<div>
			<FilterSearch onChange={setGnomeFilterValue} filters={[...filters, {name:"None", id:""}]} filterName={filterName} onSelect={setGnomeFilterBy}/>
			<ul>		
				<Paginator elements={gnomes} elementItem={GnomeItem}/>
			</ul>
		</div>);
	}
}

export default Home;