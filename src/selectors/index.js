import {createSelector} from "reselect";
import {filter,lowerCase} from "lodash";

const filterSelector = listId => state => state.lists[listId].filter;
const filtersSelector = listId => state => state.lists[listId].filters;
const listElementsSelector = listId => state => state.lists[listId].elements;

export const filteredListSelector = listId => createSelector(
	filterSelector(listId),
	listElementsSelector(listId),
	(elementsFilter, elements) => {
		if (Array.isArray(elements) && elements.length) {
			if (elementsFilter.filterBy) {
				return filter(elements, element => element[elementsFilter.filterBy] && lowerCase(`${element[elementsFilter.filterBy]}`).includes(lowerCase(elementsFilter.value)));
			}
			return elements;
		}
		return [];
	} 
);

export const filterNameSelector = listId => createSelector(
	filterSelector(listId),
	filtersSelector(listId),
	(elementsFilter, filters) => {
		if (Array.isArray(filters) && filters.length) {
			const selectedFilt = filter(elementsFilter, filt => filt.id === elementsFilter.filterBy);
			if (selectedFilt.length) {
				return selectedFilt[0].name;
			}
		}
		return "";
	}
)