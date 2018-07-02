import { listActions } from "../../actions/lists";

export const listConsts = {
	GNOMES: "gnomes"
};

const baseInitialState = {
    elements: [],
    filter: {
    	filterBy: "",
    	value: ""
    },
    filters: []
};

const initialState = {
	[listConsts.GNOMES]: {...baseInitialState}
};

const filter = (state = {}, action) => {
	switch (action.type) {
		case listActions.SET_LIST_FILTER_VALUE:
			return {...state, value: action.value};
		case listActions.SET_LIST_FILTER_BY:
			return {...state, filterBy: action.filterBy};
		default:
			return state;
	}
};

const elementLists = (state = initialState, action) => {
  	// make sure a list with the given id exists
	if (!state[action.listId] || !action.type) {
		return state;
	}
	const elementList = state[action.listId];

	switch (action.type) {
		case listActions.SET_LIST_ELEMENTS:
			console.log([...action.payload])
			return {...state, [action.listId]: {...elementList, elements: [...action.payload]}};

		case listActions.SET_LIST_FILTER_BY:
		case listActions.SET_LIST_FILTER_VALUE:
			return {...state, [action.listId]: {...elementList, filter: filter(state.filter, action)}};
		case listActions.SET_LIST_FILTERS:
			return {...state, [action.listId]: {...elementList, filters: [...action.payload]}};
		default:
			return state;
	}
};

export default elementLists;