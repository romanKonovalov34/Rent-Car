import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IEditedProposalDto, IProposalFormFields, ITemplateEditedProposal } from "../../types/types";
import { initProposalSlice } from "@/constants/initProposalSlice";

// тут сохранются данные недозаполненных полей, если перешли на другую страницу (кеширование)
const proposalSlice = createSlice({
    name: "proposalSlice",
    initialState: initProposalSlice,
    reducers: {
        saveChangesNewProposal: (state, action: PayloadAction<IProposalFormFields>) => {
            state.newProposal = {...action.payload};
        },
        saveChangesCreatedProposal: (state, action: PayloadAction<IProposalFormFields>) => {
            state.createdProposal = {...action.payload};
        },
        saveLocationDataNewProposal: (state, action: PayloadAction<ITemplateEditedProposal>) => {
            state.locationDataNewProposal = {...action.payload};
        },
        saveLocationDataCreatedProposal: (state, action: PayloadAction<ITemplateEditedProposal>) => {
            state.locationDataCreatedProposal = {...action.payload};
        },
        saveAllProposals: (state, action: PayloadAction<IEditedProposalDto[]>) => {
            state.allProposals = [...action.payload];
        },
        saveVisitedProposalId: (state, action: PayloadAction<number>) => {
            state.visitedProposalsIds.push(action.payload);
        },
    },
});

export const {
    saveChangesNewProposal,
    saveChangesCreatedProposal,
    saveAllProposals,
    saveLocationDataNewProposal,
    saveLocationDataCreatedProposal,
    saveVisitedProposalId,
} = proposalSlice.actions;
export const proposalReducer = proposalSlice.reducer;
