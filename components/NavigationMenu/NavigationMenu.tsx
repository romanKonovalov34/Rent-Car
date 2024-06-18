import { Link } from "react-router-dom";
import styles from "./NavigationMenu.module.scss";
import { useAppSelector } from "@/hooks/redux";

const NavigationMenu = () => {
    const createdProposal = useAppSelector(state => state.proposal.createdProposal);
    const allProposals = useAppSelector(state => state.proposal.allProposals);

    const identifyLinkSource = () => {
        if (createdProposal.isEditing) {
            return "/proposal"
        } else {
            return "/proposals"
        }
    }
    
    const getEditedProposal = () => {
        if (createdProposal.isEditing) {
            return allProposals.find(proposal => proposal.id === createdProposal.editedProposalId)
        }
    }

    return (
        <nav className={styles.menu}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/home" className={styles.link}>
                        <span>Главная</span>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to="/proposal" state={{isNewProposal: true, carData: false}} className={styles.link}>
                        <span>Новая заявка</span>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to={identifyLinkSource()} state={{isNewProposal: false, proposal: getEditedProposal()}} className={styles.link}>
                        <span>Созданные заявки</span>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to="/cars" className={styles.link}>
                        <span>Автомобили</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationMenu;
