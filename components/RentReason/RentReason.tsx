import { IReasonStepProps, IRentStepProps } from "@/types/types";
import styles from "./RentReason.module.scss";

const RentReason = ({children, title, description}: IReasonStepProps) => {
    return (
        <div className={styles.reason}>
            <div className={styles['logo-wrapper']}>
                {children}
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
};

export default RentReason;
