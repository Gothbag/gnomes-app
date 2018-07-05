import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "react-bootstrap";

class Paginator extends React.PureComponent {

	static propTypes = {
		elementItem: PropTypes.element.isRequired,
		elements: PropTypes.arrayOf(PropTypes.shape({})),
		idProperty: PropTypes.string,
    	startingPageSize: PropTypes.number
	}

	static defaultProps = {
		elements: [],
		idProperty: "id",
    	startingPageSize: 20
	}

	constructor(props){
		super(props);
		this.state = {
			currentPage: 0,
			pageSize: props.startingPageSize
		}
	}

	setPageNumber = pageNumber => () => this.setState({
		currentPage: pageNumber
	});

	prepareElement = (element, index) => {
		const { props: { elementItem: ElementItem, idProperty } } = this;
		if (!ElementItem) {
			return null;
		}
		return (<ElementItem {...element} key={element[idProperty] ? element[idProperty] : index}/>)
	}

	render() {
		const { setPageNumber, prepareElement, props: { elements }, state: { currentPage, pageSize } } = this;
		const numberPages = Math.ceil(elements.length / pageSize);
		const isFirstPage = currentPage === 0;
		const isSecondPage = currentPage === 1;
		const isLastPage = currentPage === (numberPages - 1);
		const isSecondToLastPage = currentPage === (numberPages - 2);
		return (<div>
			{elements.map(prepareElement).slice(currentPage * pageSize, (currentPage + 1) * pageSize - 1)}
			<Pagination>
				<Pagination.First onClick={setPageNumber(0)} disabled={isFirstPage}/>
				<Pagination.Prev onClick={setPageNumber(currentPage - 1)} disabled={isFirstPage}/>

				{!isFirstPage && !isSecondPage && <Pagination.Item onClick={setPageNumber(currentPage - 2)}>{currentPage - 1}</Pagination.Item>}
				{!isFirstPage && <Pagination.Item onClick={setPageNumber(currentPage - 1)}>{currentPage}</Pagination.Item>}
				<Pagination.Item active>{currentPage + 1}</Pagination.Item>
				{!isLastPage && <Pagination.Item onClick={setPageNumber(currentPage + 1)}>{currentPage + 2}</Pagination.Item>}
				{!isLastPage && !isSecondToLastPage && <Pagination.Item onClick={setPageNumber(currentPage + 2)}>{currentPage + 3}</Pagination.Item>}

				<Pagination.Next onClick={setPageNumber(currentPage + 1)} disabled={isLastPage}/>
				<Pagination.Last onClick={setPageNumber(numberPages - 1)} disabled={isLastPage}/>
			</Pagination>
		</div>);
	}
}

export default Paginator;