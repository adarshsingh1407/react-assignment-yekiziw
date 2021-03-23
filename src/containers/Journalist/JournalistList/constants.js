export const FETCH_JOURNALIST_LIST = "FETCH_JOURNALIST_LIST";
export const FETCH_JOURNALIST_LIST_SUCCESS = "FETCH_JOURNALIST_LIST_SUCCESS";
export const FETCH_JOURNALIST_LIST_ERROR = "FETCH_JOURNALIST_LIST_ERROR";

export const FILTER_JOURNALIST_LIST = "FILTER_JOURNALIST_LIST";
export const SORT_JOURNALIST_LIST = "SORT_JOURNALIST_LIST";

export const UPDATE_FILTERED_JOURNALIST_LIST =
  "UPDATE_FILTERED_JOURNALIST_LIST";

export const FILTER_BY_ID_KEY = "id";
export const CHECKBOX_TRUTHY_INDETERMINATE = 0;
export const CHECKBOX_TRUTHY = 1;
export const CHECKBOX_FALSY = 2;

export const FILTER_IS_VERIFIED_INDETERMINATE = {
  label: "Showing all",
  value: CHECKBOX_TRUTHY_INDETERMINATE,
};
export const FILTER_IS_VERIFIED_TRUE = {
  label: "Showing only verified",
  value: CHECKBOX_TRUTHY,
};
export const FILTER_IS_VERIFIED_FALSE = {
  label: "Showing only non-verified",
  value: CHECKBOX_FALSY,
};
export const FILTER_IS_VERIFIED_OPTIONS = [
  FILTER_IS_VERIFIED_INDETERMINATE,
  FILTER_IS_VERIFIED_TRUE,
  FILTER_IS_VERIFIED_FALSE,
];

export const SORT_ORDER_ASC = "SORT_ORDER_ASC";
export const SORT_ORDER_DESC = "SORT_ORDER_DESC";
export const PROPERTY_TYPE_NUMBER = "number";
export const PROPERTY_TYPE_STRING = "string";

export const SORT_BY_NAME_ASC = {
  label: "Name",
  orderLabel: "asc",
  property: "name",
  propertyType: PROPERTY_TYPE_STRING,
  orderType: SORT_ORDER_ASC,
};

export const SORT_BY_NAME_DESC = {
  label: "Name",
  orderLabel: "desc",
  property: "name",
  propertyType: PROPERTY_TYPE_STRING,
  orderType: SORT_ORDER_DESC,
};

export const SORT_BY_RATING_ASC = {
  label: "Wizikey Rating",
  orderLabel: "asc",
  property: "wizikeyRating",
  propertyType: PROPERTY_TYPE_NUMBER,
  orderType: SORT_ORDER_ASC,
};

export const SORT_BY_RATING_DESC = {
  label: "Wizikey Rating",
  orderLabel: "asc",
  property: "wizikeyRating",
  propertyType: PROPERTY_TYPE_NUMBER,
  orderType: SORT_ORDER_DESC,
};

export const SORT_BY_OPTIONS = [
  SORT_BY_NAME_ASC,
  SORT_BY_NAME_DESC,
  SORT_BY_RATING_ASC,
  SORT_BY_RATING_DESC,
];
