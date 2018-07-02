import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import FilterSearch from "../FilterSearch";
import GnomeItem from "../GnomeItem";

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

	prepareGnome = gnome => <GnomeItem {...gnome} key={gnome.id}/>;

	render() {
		const { prepareGnome, props: { filterBy, filters, gnomes, setGnomeFilterValue, setGnomeFilterBy } } = this;
		return (<div>
			<FilterSearch onChange={setGnomeFilterValue} filters={filters} filterBy={filterBy} onSelect={setGnomeFilterBy}/>
			<ul>		
				{gnomes.map(prepareGnome)}
			</ul>
		</div>);
	}
}

export default Home;