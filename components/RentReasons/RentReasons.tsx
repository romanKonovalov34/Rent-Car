import { RENT_REASONS } from "@/constants/rentReasons";
import styles from "./RentReasons.module.scss";
import RentReason from "../RentReason/RentReason";

const RentReasons = () => {
    return (
        <ul className={styles.reasons}>
            {RENT_REASONS.map((reason, id) => {
                return (
                    <li key={id}>
                        <RentReason
                            key={id}
                            title={reason.title}
                            description={reason.description}
                        >
                            {reason.children}
                        </RentReason>
                    </li>
                );
            })}
        </ul>
    );
};

export default RentReasons;
