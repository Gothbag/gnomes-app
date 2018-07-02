import React from "react";
import PropTypes from "prop-types";
import { Panel } from "react-bootstrap";

class Home extends React.PureComponent {

	static propTypes = {
	    name: PropTypes.string
  	}

  	static defaultProps = {
	    name: ""
  	}

	render() {
		const { props: { name } } = this;

		return (<li><Panel>
			<Panel.Heading>
	      		<Panel.Title componentClass="h3" toggle>{name}</Panel.Title>
		    </Panel.Heading>
		    <Panel.Collapse>
            <Panel.Body>
            </Panel.Body>
          </Panel.Collapse>
		</Panel></li>);
	}
}

export default Home;