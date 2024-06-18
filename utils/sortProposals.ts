import SortTypes from "../constants/SortTypes";
import SortValues from "../constants/SortValues";
import { IEditedProposalDto, ISelectedSort } from "../types/types";

export const sortProposals = (proposals: IEditedProposalDto[], selectedSortOption: ISelectedSort): IEditedProposalDto[] => {
    let valueA, valueB = '';
    const sortedData = [...proposals].sort((a, b) => {

        switch (selectedSortOption.value) {
            case SortValues.SORT_VALUE_NAME:
                valueA = `${a.person.firstName} ${a.person.lastName}`;
                valueB = `${b.person.firstName} ${b.person.lastName}`;
                break;
            case SortValues.SORT_VALUE_STATUS:
                valueA = a.status.name;
                valueB = b.status.name;
                break;
            case SortValues.SORT_VALUE_EMAIL:
                valueA = a.person.email;
                valueB = b.person.email;
                break;
                
            case SortValues.SORT_VALUE_AUTO_CATEGORY:
                valueA = a.autoCategory.name;
                valueB = b.autoCategory.name;
                break;
            case SortValues.SORT_VALUE_MODEL:
                valueA = a.model.name;
                valueB = b.model.name;
                break;
            case SortValues.SORT_VALUE_CITY:
                valueA = a.city.name;
                valueB = b.city.name;
                break;
            default:
                return 0;
        }

        switch (selectedSortOption.type) {
            case null:
                return 0
            case SortTypes.SORT_TYPE_ASK:
                return valueA.localeCompare(valueB)
            case SortTypes.SORT_TYPE_DESK:
                return valueB.localeCompare(valueA)
            default:
                return 0;
        }
    });
  
    return sortedData;
}
