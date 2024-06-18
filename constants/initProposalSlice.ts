import { IInitProposalSliceProps } from "@/types/types";
import { templateEditedProposal, templateFormFields } from "./templatesInitProposalSlice";

export const initProposalSlice: IInitProposalSliceProps = {
    newProposal: {...templateFormFields},
    createdProposal: {...templateFormFields, isEditing: false, editedProposalId: 0},
    locationDataNewProposal: {...templateEditedProposal},
    locationDataCreatedProposal: {...templateEditedProposal},
    allProposals: [],
    visitedProposalsIds: [],
};