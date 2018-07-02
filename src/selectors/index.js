import {createSelector} from "reselect";
import {filter} from "lodash";

const filterSelector = listId => state => state.lists[listId].filter;
const filterBySelector = listId => filterSelector(listId).filterBy;
const filterValueSelector = listId => filterSelector(listId).value;
const listElementsSelector = listId => state => state.lists[listId].elements;

export const filteredListSelector = listId => createSelector(
  filterBySelector(listId),
  filterValueSelector(listId),
  listElementsSelector(listId),
  (filterBy, filterValue, elements) => Array.isArray(elements) && elements.length ? filter(elements, element => element[filterBy] && `${element[filterBy]}`.contains(filterValue)) : []
);