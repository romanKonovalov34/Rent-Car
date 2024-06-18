import { DictCodes, IProposalFormFields, ITemplateEditedProposal } from "@/types/types"
import { initAutoCategoryCurrentOption, initCityCurrentOption, initModelCurrentOption } from "./initProposalSelectOptions"
import { InitProposalSelectOptionNames } from "./initProposalSelectOptionNames"

export const templateFormFields: IProposalFormFields = {
    firstName: '',
    lastName: '',
    driverLicense: '',
    email: '',
    city: initCityCurrentOption(),
    autoCategory: initAutoCategoryCurrentOption(),
    model: initModelCurrentOption(),
}

export const templateEditedProposal: ITemplateEditedProposal = {
    id: 0,
    status: {
        id: 0,
        name: InitProposalSelectOptionNames.STATUS,
        code: '',
        dictCode: DictCodes.STATUSES,
        categoryId: 0,
        createdAt: '',
        updatedAt: '',
    },
    person: {
        lastName: '',
        firstName: '',
        driverLicense: '',
        email: '',
    },
    city: {
        id: 0,
        name: InitProposalSelectOptionNames.CITY,
        code: '',
        dictCode: DictCodes.CITIES,
        categoryId: 0,
        createdAt: '',
        updatedAt: '',
    },
    autoCategory: {
        id: 0,
        name: InitProposalSelectOptionNames.AUTO_CATEGORY,
        code: '',
        dictCode: DictCodes.AUTO_CATEGORIES,
        categoryId: 0,
        createdAt: '',
        updatedAt: '',
    },
    model: {
        id: 0,
        name: InitProposalSelectOptionNames.MODEL,
        code: '',
        dictCode: DictCodes.AUTO,
        categoryId: 0,
        createdAt: '',
        updatedAt: '',
    },
    isHaveData: false,
    isAutoCategoryWasChanged: false,
}