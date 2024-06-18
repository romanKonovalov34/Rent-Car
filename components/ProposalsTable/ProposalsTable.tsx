import { useEffect, useMemo, useState } from "react";
import styles from "./ProposalsTable.module.scss";
import { DictCodes, IEditedProposalDto, IPerson, ISelectedSort } from "@/types/types";
import { useDeleteProposalMutation, useLazyGetAllProposalsQuery } from "@/redux/services/proposalApi";
import { initialSelectedSorts } from "@/constants/initialSelectedSortOptions";
import { initialLastSortSelected } from "@/constants/initialLastOptionSelected";
import { sortProposals } from "@/utils/sortProposals";
import { tableHeadChildrens } from "@/constants/tableHeadChildrend";
import SortingHeader from "../SortingHeader/SortingHeader";
import { useLazyGetDictionaryQuery } from "@/redux/services/dictionaryApi";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { saveAllProposals } from "@/redux/reducers/proposalSlice";
import StatusesCodes from "@/constants/StatusesCodes";
import Loader from "../Loader/Loader";
import { LS_AUTH_KEY } from "@/constants/accessToken";
import { dictionaryActions } from "@/redux/reducers/dictionarySlice";

const ProposalsTable = () => {
    const [getAllProposals, { isError: isProposalError, data: proposals }] = useLazyGetAllProposalsQuery();
    const [deleteProposal, { isLoading: isDeleting }] = useDeleteProposalMutation();
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {autoCategories, models, cities, statuses} = useAppSelector(state => state.dictionary)

    const [getAutoCategories, {data: autoCategoriesNew}] = useLazyGetDictionaryQuery();
    const [getModels, {data: modelsNew}] = useLazyGetDictionaryQuery();
    const [getCities, {data: citiesNew}] = useLazyGetDictionaryQuery();
    const [getStatuses, {data: statusesNew}] = useLazyGetDictionaryQuery();

    const [selectedSorts, setSelectedSorts] = useState<ISelectedSort[]>(initialSelectedSorts);
    const [lastSortSelected, setLastSortSelected] = useState<ISelectedSort>(initialLastSortSelected);
    const [editedProposals, setEditedProposals] = useState<IEditedProposalDto[]>()

    useEffect(() => {
        if (autoCategories.length === 0 && models.length === 0 && cities.length === 0 && statuses.length === 0) {
            getAutoCategories(DictCodes.AUTO_CATEGORIES);
            getModels(DictCodes.AUTO);
            getCities(DictCodes.CITIES);
            getStatuses(DictCodes.STATUSES);
        }
    }, [])

    useEffect(() => {
        if (autoCategoriesNew && modelsNew && citiesNew && statusesNew) {
            dispatch(dictionaryActions.addAutoCategory([...autoCategoriesNew]));
            dispatch(dictionaryActions.addModels([...modelsNew]));
            dispatch(dictionaryActions.addCities([...citiesNew]));
            dispatch(dictionaryActions.addStatuses([...statusesNew]));
        }
    }, [autoCategoriesNew, modelsNew, citiesNew, statusesNew])


    useEffect(() => {
        if (isProposalError) {
            localStorage.removeItem(LS_AUTH_KEY);
            alert('Время истекло, необходимо повторно авторизоваться');
            navigate('/login');
        }
    }, [isProposalError])

    useEffect(() => {
        setTimeout(() => {
            getAllProposals();
        }, 300);
    }, [isDeleting]);

    useEffect(() => {
        convertProposal();
    }, [proposals, autoCategories, models, statuses, cities])

    useEffect(() => {
        if (editedProposals) {
            dispatch(saveAllProposals(editedProposals));
        }
    }, [editedProposals])

    const sortedProposals = useMemo(() => {
        if (editedProposals) {
            return sortProposals(editedProposals, lastSortSelected);
        }
    }, [editedProposals, lastSortSelected]);

    const convertProposal = () => {
        if (proposals && models && autoCategories && statuses && cities) {
            const customProposals: IEditedProposalDto[] = proposals.map(proposal => {
                const person: IPerson = {
                    firstName: proposal.person.firstName,
                    lastName: proposal.person.lastName,
                    email: proposal.person.email,
                    driverLicense: proposal.person.driverLicense,
                }
                const status = statuses.find(status => proposal.status.code === status.code);
                const city = cities.find(city => proposal.city.code === city.code);
                const autoCategory = autoCategories.find(category => proposal.auto.autoCategory.code === category.code);
                const model = models.find(model => proposal.auto.model.code === model.code);
                
                if (autoCategory && model && status && city) {
                    return {id: proposal.id, status, person, city, autoCategory, model}
                }
                else {
                    throw new Error('Ошибка, отсутсвуют необходимые данные')
                }
            }) 
            setEditedProposals(customProposals)
        }
    }

    const deleteProposalHandler = (id: number) => {
        const answer = confirm('Вы точно хотите удалить заявку?');
        if (answer) {
            deleteProposal(id);
        }
    }

    const identifyLinkSource = (status: string) => {
        if (status !== StatusesCodes.DRAFT) {
            return "/result"
        } else {
            return "/proposal"
        }
    }

    return (
        <div className={styles.page}>
            {sortedProposals ? (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            {tableHeadChildrens.map((children, id) => {
                                return (
                                    <th key={id}>
                                        <SortingHeader
                                            currentSort={selectedSorts[id]}
                                            setLastSortSelected={setLastSortSelected}
                                            setSelectedSorts={setSelectedSorts}
                                        >
                                            {children}
                                        </SortingHeader>
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedProposals.map((proposal) => {
                            return (
                                <tr key={proposal.id}>
                                    <td>
                                        <Link to={identifyLinkSource(proposal.status.code)} state={{proposal, isNewProposal: false}}>
                                            <span className={styles.cell}>
                                                {proposal.status.name}
                                            </span>
                                        </Link>
                                        {proposal.status.code === StatusesCodes.DRAFT &&
                                            <button
                                                className={styles.delete}
                                                onClick={() => deleteProposalHandler(proposal.id)}
                                            />
                                        }
                                    </td>
                                    <td>
                                        <Link to={identifyLinkSource(proposal.status.code)} state={{proposal, isNewProposal: false}}>
                                            <span className={styles.cell}>
                                                {`${proposal.person.firstName} ${proposal.person.lastName}`}
                                            </span>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={identifyLinkSource(proposal.status.code)} state={{proposal, isNewProposal: false}}>
                                            <span className={styles.cell}>
                                                {proposal.person.email}
                                            </span>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={identifyLinkSource(proposal.status.code)} state={{proposal, isNewProposal: false}}>
                                            <span className={styles.cell}>
                                                {`${proposal.autoCategory.name}`}
                                            </span>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={identifyLinkSource(proposal.status.code)} state={{proposal, isNewProposal: false}}>
                                            <span className={styles.cell}>
                                                {`${proposal.model.name}`}
                                            </span>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={identifyLinkSource(proposal.status.code)} state={{proposal, isNewProposal: false}}>
                                            <span className={styles.cell}>
                                                {proposal.city.name}
                                            </span>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <Loader text="Загрузка заявок"/>
            )}
        </div>
    );
};

export default ProposalsTable;
