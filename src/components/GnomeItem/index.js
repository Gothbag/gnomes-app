import React from "react";
import PropTypes from "prop-types";
import { Col, Image, Panel, Row } from "react-bootstrap";

import "./GnomeItem.css";

class Home extends React.PureComponent {

	static propTypes = {
	    name: PropTypes.string
  	}

  	static defaultProps = {
	    name: ""
  	}

	render() {
		const { props: { age, height, name, thumbnail } } = this;

		return (<li className="gnome-item">
			<Panel>
				<Panel.Heading>
		      		<Panel.Title componentClass="h3" toggle>{name}</Panel.Title>
			    </Panel.Heading>
			    <Panel.Collapse>
		            <Panel.Body>
		            	<Row>
		            		<Col md={4}>
		            			<Image src={thumbnail} rounded responsive/>
		            		</Col>
		            		<Col md={8}>
		            			<p>Age: {age}</p>
		            			<p>Height: {height}</p>
		            		</Col>
		            	</Row>
		            </Panel.Body>
	          	</Panel.Collapse>
			</Panel>
		</li>);
	}
}

export default Home;