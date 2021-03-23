import {
  CHECKBOX_FALSY,
  CHECKBOX_TRUTHY,
  FILTER_BY_ID_KEY,
  PROPERTY_TYPE_STRING,
  SORT_ORDER_DESC,
} from "./constants";

const getIntersectionArray = (a, b) => {
  const bSet = new Set(b);
  return [...a].filter((x) => bSet.has(x));
};

const isSubstringIgnoreCase = (targetString = "", searchString = "") =>
  targetString.toLowerCase().includes(searchString.toLowerCase);

const isMatchingByKey = (targetArr = [], searchArr = [], key = "") => {
  return getIntersectionArray(
    targetArr.map((l) => l[key]),
    searchArr.map((l) => l[key])
  ).length;
};

const checkVerificationStatus = (checkboxStatus, checkboxFilter) => {
  switch (checkboxFilter.value) {
    case CHECKBOX_TRUTHY: {
      return checkboxStatus;
    }
    case CHECKBOX_FALSY: {
      return !checkboxStatus;
    }
    default:
      return true;
  }
};

export const filterJournalists = (journalists = [], filters = {}) => {
  const filteredJournalists = journalists.filter((j) => {
    return (
      isSubstringIgnoreCase(j.name, filters.name) ||
      isMatchingByKey(j.locations, filters.locations, FILTER_BY_ID_KEY) ||
      isMatchingByKey(j.publications, filters.publications, FILTER_BY_ID_KEY) ||
      isMatchingByKey(j.interests, filters.interests, FILTER_BY_ID_KEY) ||
      checkVerificationStatus(j.isVerifiedByWizikey, filters.isVerified)
    );
  });
  console.log({ filteredJournalists });
  return filteredJournalists;
};

const compareStrings = (str1, str2) =>
  str1.localeCompare(str2, undefined, { sensitivity: "accent" });

const compareNumbers = (n1, n2) => n1 > n2;

export const sortJournalists = (journalists = [], sortBy = {}) => {
  journalists.sort(
    sortBy.propertyType === PROPERTY_TYPE_STRING
      ? (j1, j2) => compareStrings(j1[sortBy.property], j2[sortBy.property])
      : (j1, j2) => compareNumbers(j1[sortBy.property], j2[sortBy.property])
  );
  if (sortBy.orderType === SORT_ORDER_DESC) {
    journalists.reverse();
  }
};
