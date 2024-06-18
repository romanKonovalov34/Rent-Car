import React, { useEffect, useState } from "react";
import { ISortingHeaderProps, SortType } from "@/types/types";
import SortTypes from "@/constants/SortTypes";
import styles from "./SortingHeader.module.scss";

const SortingHeader = ({children, currentSort, setLastSortSelected, setSelectedSorts }: ISortingHeaderProps) => {

    const updateLastSort = (newType: SortType) => {
        setLastSortSelected({
            id: currentSort.id,
            value: currentSort.value,
            type: newType,
        });
    }

    const updateSortsTypes = (newType: SortType) => {
        setSelectedSorts(prevState => {
            return (
                [...prevState].map(sort => {
                    if (sort.id === currentSort.id) {
                        sort.type = newType;
                    }
                    else {
                        sort.type = SortTypes.SORT_TYPE_OFF;
                    }
                    return sort;
                })

            )
        })
    }

    const changeType = () => {
        switch (currentSort.type) {
            case SortTypes.SORT_TYPE_OFF:
                updateLastSort(SortTypes.SORT_TYPE_ASK);
                updateSortsTypes(SortTypes.SORT_TYPE_ASK);
                break;
            case SortTypes.SORT_TYPE_ASK:
                updateLastSort(SortTypes.SORT_TYPE_DESK);
                updateSortsTypes(SortTypes.SORT_TYPE_DESK);

                break;
            case SortTypes.SORT_TYPE_DESK:
                updateLastSort(SortTypes.SORT_TYPE_OFF);
                updateSortsTypes(SortTypes.SORT_TYPE_OFF);

                break;
        }
    };

    const isASK = currentSort.type === SortTypes.SORT_TYPE_ASK;
    const isDESK = currentSort.type === SortTypes.SORT_TYPE_DESK;

    return (
        <div className={styles.component}>
            <div className={styles.wrapper}>
                {children}
                <div className={styles.arrows} onClick={changeType}>
                    <span style={isASK ? {color: 'red'} : {color: '#181818'} }>&#9660;</span>
                    <span style={isDESK ? {color: 'red'} : {color: '#181818'} }>&#9650;</span>
                </div>
            </div>
        </div>
    );
};

export default SortingHeader;
