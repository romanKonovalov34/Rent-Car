import SortTypes from "./SortTypes";
import SortValues from "./SortValues";

export const initialSelectedSorts = [
  {
    id: 0,
    value: SortValues.SORT_VALUE_STATUS,
    type: SortTypes.SORT_TYPE_OFF,
  },
  {
    id: 1,
    value: SortValues.SORT_VALUE_NAME,
    type: SortTypes.SORT_TYPE_OFF,
  },
  {
    id: 2,
    value: SortValues.SORT_VALUE_EMAIL,
    type: SortTypes.SORT_TYPE_OFF,
  },
  {
    id: 3,
    value: SortValues.SORT_VALUE_AUTO_CATEGORY,
    type: SortTypes.SORT_TYPE_OFF,
  },
  {
    id: 4,
    value: SortValues.SORT_VALUE_MODEL,
    type: SortTypes.SORT_TYPE_OFF,
  },
  {
    id: 5,
    value: SortValues.SORT_VALUE_CITY,
    type: SortTypes.SORT_TYPE_OFF,
  },
];
