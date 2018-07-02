export const listActions = {
  SET_LIST_ELEMENTS: "lists/elements/set",
  SET_LIST_FILTER_BY: "lists/filter/setBy",
  SET_LIST_FILTER_VALUE: "lists/filter/setValue",
  SET_LIST_FILTERS: "lists/filters/set"
};

export const setElements = (elements, listId) => ({
  type: listActions.SET_LIST_ELEMENTS,
  payload: elements,
  listId
});
 
export const setFilterBy = (filterBy, listId) => ({
  type: listActions.SET_LIST_FILTER_BY,
  filterBy,
  listId
});
 
export const setFilterValue = (value, listId) => ({
  type: listActions.SET_LIST_FILTER_VALUE,
  value,
  listId
});

export const setFilters = (filters, listId) => ({
  type: listActions.SET_LIST_FILTERS,
  payload: filters,
  listId
});