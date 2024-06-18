import StatusesCodes from "@/constants/StatusesCodes";
import SortTypes from "../constants/SortTypes";
import SortValues from "../constants/SortValues";

export type AccesToken = { access_token: string };

export type Dictionary = { code: string };

export type SortType =
    | SortTypes.SORT_TYPE_OFF
    | SortTypes.SORT_TYPE_ASK
    | SortTypes.SORT_TYPE_DESK;

export type SortValue =
    | SortValues.SORT_VALUE_STATUS
    | SortValues.SORT_VALUE_NAME
    | SortValues.SORT_VALUE_EMAIL
    | SortValues.SORT_VALUE_AUTO_CATEGORY
    | SortValues.SORT_VALUE_MODEL
    | SortValues.SORT_VALUE_CITY;

export interface IUserDto {
    id: number;
    login: string;
    isActive: boolean;
}

export interface ILoginDto {
    password: string;
    login: string;
}

export enum DictCodes {
    AUTO = "AUTO",
    CITIES = "CITIES",
    STATUSES = "STATUSES",
    AUTO_CATEGORIES = "AUTO_CATEGORIES",
}

export interface IDictionaryDto {
    id: number;
    name: string;
    code: string;
    dictCode: DictCodes;
    categoryId: number;
    createdAt: string;
    updatedAt: string;
}

export interface IPerson {
    lastName: string;
    firstName: string;
    driverLicense: string;
    email: string;
}

export interface IAuto {
    autoCategory: Dictionary;
    model: Dictionary;
}

export interface IProposalDto {
    id: number;
    status: Dictionary;
    person: IPerson;
    auto: IAuto;
    city: Dictionary;
}

export interface IEditedProposalDto {
    id: number;
    status: IDictionaryDto;
    person: IPerson;
    city: IDictionaryDto;
    autoCategory: IDictionaryDto;
    model: IDictionaryDto;
}

export interface ITemplateEditedProposal extends IEditedProposalDto {
    isHaveData?: boolean;
    isAutoCategoryWasChanged?: boolean;
}

export interface IProposalFormFields {
    firstName: string,
    lastName: string,
    driverLicense: string,
    email: string,
    city: IDictionaryDto;
    autoCategory: IDictionaryDto;
    model: IDictionaryDto;
    isEditing?: boolean;
    editedProposalId?: number;
    isSendedProposal?: boolean;
}

export interface ILocationData {
    isNewProposal: boolean;
    proposal?: IEditedProposalDto;
    carData?: IAuto;
}

export interface IAccessToken {
    access_token: string;
}

export interface ISelectProps {
    options: IDictionaryDto[];
    value: IDictionaryDto;
    setCurrentOption: React.Dispatch<React.SetStateAction<IDictionaryDto>>;
}

export interface ISelectedSort {
    id: number;
    value: SortValue;
    type: SortType;
}

export interface ISortingHeaderProps {
    children: string;
    currentSort: ISelectedSort;
    setLastSortSelected: React.Dispatch<React.SetStateAction<ISelectedSort>>;
    setSelectedSorts: React.Dispatch<React.SetStateAction<ISelectedSort[]>>;
}

export interface IRentStepProps {
    children: JSX.Element;
    title: string;
    description: string;
}

export interface IReasonStepProps extends IRentStepProps {}

export interface IInitProposalSliceProps {
    newProposal: IProposalFormFields;
    createdProposal: IProposalFormFields;
    locationDataNewProposal: ITemplateEditedProposal;
    locationDataCreatedProposal: ITemplateEditedProposal;
    allProposals: IEditedProposalDto[];
    visitedProposalsIds: number[];
}

export interface IPendingComponentProps {
    proposal: ITemplateEditedProposal | IEditedProposalDto;
    status: StatusesCodes;
}

export interface IPlateProps {
    status: StatusesCodes;
}

export interface ICar {
    autoCategoryCode: string,
    autoCategoryName: string,
    modelCode: string,
    modelName: string,
    url: string,
    engineCapacity: number,
    enginePower: number,
    price: number,
}

export interface ICarProps {
    car: ICar;
}

export interface IInitDictionary {
    autoCategories: IDictionaryDto[];
    models: IDictionaryDto[];
    cities: IDictionaryDto[];
    statuses: IDictionaryDto[];
}